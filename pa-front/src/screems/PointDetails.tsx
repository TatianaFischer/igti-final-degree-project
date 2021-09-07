import logo from '../images/logo.svg';
import { FiClock, FiHome, FiArrowLeft } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../styles/pages/pointDetails.scss';

export default function PointDetails() {
  const { goBack } = useHistory();

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
            src="https://images.unsplash.com/photo-1621496654772-c66c48290259?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Bendito Orgânico"
          />

          <div className="images">
            <button className="active" type="button">
              <img
                src="https://images.unsplash.com/photo-1621496654772-c66c48290259?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="Bendito Orgânico"
              />
            </button>
            <button type="button">
              <img
                src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
                alt="Bendito Orgânico"
              />
            </button>
            <button type="button">
              <img
                src="https://images.unsplash.com/photo-1552665312-09ff7932252e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"
                alt="Bendito Orgânico"
              />
            </button>
            <button type="button">
              <img
                src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
                alt="Bendito Orgânico"
              />
            </button>
            <button type="button">
              <img
                src="https://images.unsplash.com/photo-1581515286348-98549702050f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
                alt="Bendito Orgânico"
              />
            </button>
            <button type="button">
              <img
                src="https://images.unsplash.com/photo-1581515286348-98549702050f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
                alt="Bendito Orgânico"
              />
            </button>
          </div>

          <div className="point-details-content">
            <h1>Bendito Orgânico</h1>
            <p>
              Pilhas, lâmpadas, óleo de cozinha, tampinhas, papel, composteira
              orgânica, orgânicos.
            </p>

            <h2>Instruções</h2>
            <p>
              Traga seus resíduos orgânicos dentro de um potinho, temos uma
              composteira grande para todos. Além disso, traga, sempre que
              quiser suas pilhas, lâmpadas e óleo de cozinha para um correta
              destinação, temos parceria com catadores.
            </p>

            <h2>Sobre o Estabelecimento</h2>
            <p>
              Servimos comida de verdade caseiras e orgânicas. Nos siga no
              Instagram @comidasaudavel ou entre em contato 5555555555.
            </p>

            <h2>Outras ações sustentáveis</h2>
            <p>Não usamos plásticos e comidas 100% orgânicas.</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                das 10h às 18h
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
