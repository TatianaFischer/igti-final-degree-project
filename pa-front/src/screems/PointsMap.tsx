import 'leaflet/dist/leaflet.css';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  Circle,
} from '@react-google-maps/api';

import '../styles/pages/pointsMap.scss';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -30.1087957,
  lng: -51.3172272,
};

const markersData = [
  {
    position: {
      lat: -30.0229454,
      lng: -51.1793927,
    },

    title: 'Casa',
  },
  {
    position: {
      lat: -30.03102834,
      lng: -51.2237419,
    },
    title: 'Santa Casa',
  },
];

const googleMapsAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function PointsMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={logo} alt="Logo marcar Cyclo" />
          <p>
            Selecione no mapa o restaurante e veja quais resíduos são coletados.
          </p>
        </header>

        <ul>
          <h3>Quais residuos podem ser coletados?</h3>
          <li>Orgânicos</li>
          <li>Sólidos (papel, latas, plásticos...)</li>
          <li>Eletrônicos</li>
        </ul>
      </aside>

      <LoadScript googleMapsApiKey={`${googleMapsAPIKey}`}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <></>
          {markersData.map(marker => {
            return (
              <>
                <Marker position={marker.position} title="Porto Alegre" />{' '}
              </>
            );
          })}
        </GoogleMap>
      </LoadScript>

      <Link to="/cadastro" className="create-point">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default PointsMap;
