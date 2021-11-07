import React, { useEffect, useState } from 'react';

import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

import { FiPlus, FiHome } from 'react-icons/fi';
import { BiCurrentLocation } from 'react-icons/bi';

import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
} from '@react-google-maps/api';

import '../styles/pages/pointsMap.scss';
import api from '../services/api';

interface ResData {
  about: string;
  name: string;
  wastes_types: string;
  id: number;
  images: string[];
  instructions: string;
  latitude: number;
  longitude: number;
  opening_hours: string;
  others_actions: string;
}

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -30.1087957,
  lng: -51.3172272,
};

const googleMapsAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function PointsMap() {
  const [points, setPoints] = useState<ResData[]>([]);

  useEffect(() => {
    api.get('points').then(res => {
      const response: any = res.data;

      setPoints(response);
    });
  }, []);

  const teste = points.map(point => {
    return point.name;
  });

  return (
    <div id="page-map">
      <aside className="menuAside">
        <Link to="/" className="icon-menu">
          <FiHome size={28} color="#fff" />
          <span>Início</span>
        </Link>
        <Link to="/restaurante/cadastro" className="icon-menu">
          <FiPlus size={32} color="#fff" />
          <span>Novo</span>
        </Link>
      </aside>

      <aside className="logoDescriptionAside">
        <header>
          <img src={logo} alt="Logo marcar Cyclo" />
          <p>
            Selecione no mapa o restaurante e veja quais resíduos são coletados.
          </p>
        </header>

        <div>
          <label>Pesquise pelo endereço:</label>
          <div style={{ display: 'flex', color: 'black' }}>
            <input />
            <span
              style={{ backgroundColor: 'white', borderRadius: '0 5px 5px 0' }}
            >
              <BiCurrentLocation />
            </span>
          </div>
        </div>
      </aside>

      <LoadScript googleMapsApiKey={`${googleMapsAPIKey}`}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          <></>
          {points.map(item => {
            return (
              <>
                <Link to="/restaurante/:id" className="pointDetailsLink">
                  <Marker
                    position={{ lat: item.latitude, lng: item.longitude }}
                    title={item.name}
                  >
                    {item.name ? (
                      <OverlayView
                        position={{ lat: item.latitude, lng: item.longitude }}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                      >
                        <div className="overlayView">
                          🡴<b> {item.name}</b> ♻<p> {item.wastes_types}</p>
                        </div>
                      </OverlayView>
                    ) : null}
                  </Marker>
                </Link>
              </>
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default PointsMap;
