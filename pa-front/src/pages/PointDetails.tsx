import React, { useEffect, useState } from 'react';
import logo from '../images/logo.svg';
import { FiClock, FiHome, FiArrowLeft } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/pages/pointDetails.scss';
import api from '../services/api';

interface PointDetails {
  about: string;
  name: string;
  wastes_types: string;
  images: Array<{
    url: string;
    id: number;
  }>;
  instructions: string;
  latitude: number;
  longitude: number;
  opening_hours: string;
  others_actions: string;
}

interface PointParams {
  id: string;
}

export default function PointDetails() {
  const params = useParams() as PointParams;
  const { goBack } = useHistory();
  const [pointDetails, setPointDetails] = useState<PointDetails>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`points/${params.id}`).then(res => {
      const response: any = res.data;

      setPointDetails(response);
    });
  }, [params.id]);

  if (!pointDetails) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="page-point-details">
      <aside className="menuAside">
        <button type="button" onClick={goBack} className="icon-menu">
          <FiArrowLeft size={28} color="#FFF" />
          <span>Voltar</span>
        </button>

        <Link to="/" className="icon-menu">
          <FiHome size={28} color="#fff" />
          <span>Início</span>
        </Link>
      </aside>

      <aside className="logoDescriptionAside">
        <header>
          <img src={logo} alt="Logo marcar Cyclo" />
          <p>
            Saiba mais sobre o restaurante escolhido. Veja os resíduos coletados
            por eles e o horário de funcionamento.
          </p>
        </header>
      </aside>

      <main>
        <div className="point-details">
          <img
            src={pointDetails.images[activeImageIndex].url}
            alt={pointDetails.name}
          />

          <div className="images">
            {pointDetails.images.map((image, index) => {
              return (
                <button
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  key={image.id}
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img
                    src={image.url}
                    alt={`Foto do estabelecimento ${pointDetails.name}`}
                  />
                </button>
              );
            })}
          </div>

          <div className="point-details-content">
            <h1>{pointDetails.name}</h1>
            <p>{pointDetails.wastes_types}</p>

            <h2>Instruções</h2>
            <p>{pointDetails.instructions}</p>

            <h2>Sobre o Estabelecimento</h2>
            <p>{pointDetails.about}</p>

            <h2>Outras ações sustentáveis</h2>
            <p>{pointDetails.others_actions}.</p>
            <h2>Horário de funcionamento</h2>
            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                {pointDetails.opening_hours}
              </div>
            </div>
            <div className="address">
              <h2>Endereço</h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/maps/dir/?api=1&destination=${pointDetails.latitude}, ${pointDetails.longitude}`}
              >
                Ver rotas no mapa
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
