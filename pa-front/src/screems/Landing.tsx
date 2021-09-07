import { FiArrowRight } from 'react-icons/fi';
import '../styles/pages/landing.scss';

import logo from '../images/logo.svg';
import mainImg from '../images/landing.svg';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div id="page-landing">
      <main id="page-landing-main">
        <section className="content">
          <button type="button" className="btn btn-primary btn-lg">
            <Link to="/mapa">
              Busque Ponto <FiArrowRight />
            </Link>
          </button>

          <p>
            Encontre estabelecimentos que
            <br /> fazem parte da economia circular e <br />
            são pontos de coleta de resíduos <br />
            sólidos.
          </p>
        </section>

        <section className="content">
          <button type="button" className="btn btn-primary btn-lg">
            <Link to="/restaurante/cadastro">
              Cadastre Ponto <FiArrowRight />
            </Link>{' '}
          </button>
          <p>
            Seja um ponto de coleta de <br />
            residuos sólidos e faça sua parte <br />
            na gestão de resíduos sólidos da <br />
            cidade.
          </p>
        </section>
      </main>

      <div id="page-landing-logo">
        <section>
          <img src={logo} alt="Logo da marca Cyclo" />
          <h1>
            Restaurantes <br /> amigos da <br /> Terra
          </h1>
        </section>
        <section>
          <img
            id="landing-page-img"
            src={mainImg}
            alt="Planeta terra com uma lata de lixo"
          />
        </section>
      </div>
    </div>
  );
}

export default Landing;
