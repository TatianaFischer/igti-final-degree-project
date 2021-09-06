import 'leaflet/dist/leaflet.css';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { FiPlus, FiHome } from 'react-icons/fi';

import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
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
    description: 'Tampinha, pilhas, lâmpadas',
  },
  {
    position: {
      lat: -30.03102834,
      lng: -51.2237419,
    },
    title: 'Santa Casa',
    description: 'Orgânicos, papel, lata',
  },
];

const googleMapsAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const onClicktoDetails = () => {
  console.log('teste');
};
function PointsMap() {
  return (
    <div id="page-map">
      <aside className="menuAside">
        <Link to="/" className="icon-menu">
          <FiHome size={28} color="#fff" />
          <span>Início</span>
        </Link>
        <Link to="/cadastro" className="icon-menu">
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
        {/* <ul>
          <h3>Quais residuos podem ser coletados?</h3>
          <li>Orgânicos</li>
          <li>Sólidos (papel, latas, plásticos...)</li>
          <li>Eletrônicos</li>
        </ul> */}
      </aside>

      <LoadScript googleMapsApiKey={`${googleMapsAPIKey}`}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <></>
          {markersData.map(marker => {
            return (
              <>
                <Marker position={marker.position} title={marker.title}>
                  {marker.title ? (
                    <OverlayView
                      position={marker.position}
                      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                      <div className="overlayView" onClick={onClicktoDetails}>
                        🡴<b> {marker.title}</b> ♻<p> {marker.description}</p>
                      </div>
                    </OverlayView>
                  ) : null}
                </Marker>
              </>
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default PointsMap;
