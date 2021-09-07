import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { FiPlus, FiHome, FiArrowLeft } from 'react-icons/fi';

import '../styles/pages/register.scss';

export default function Register() {
  const { goBack } = useHistory();

  return (
    <div id="page-register">
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
            Preencha o formulário com as informações do estabelecimento e dos
            ponto de coleta de resíduos.
          </p>
        </header>
      </aside>

      <main>
        <form className="register-form">
          <fieldset>
            <legend>Dados do restaurante</legend>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" type="name" />
            </div>
            <div className="input-block">
              <label htmlFor="address">Endereço</label>
              <input id="address" placeholder="Ex.:Rua Encantado, 1111, 2" />
            </div>

            <div className="input-block">
              <label htmlFor="type">Tipos de resíduos</label>
              <input
                id="type"
                type="text"
                maxLength={100}
                placeholder="Ex.:Pilhas, lâmpadas, óleo de cozinha, tampinhas, papel, composteira orgânica, orgânicos etc."
              />
            </div>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                maxLength={300}
                placeholder="Ex.:Traga seus resíduos orgânicos dentro de um potinho, temos uma composteira grande."
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre o Estabelecimento</label>
              <textarea
                id="about"
                maxLength={300}
                placeholder="Ex.: Servimos comida de verdade caseiras  e orgânicas. Nos siga no Instagram @comidasaudavel"
              />
            </div>

            <div className="input-block">
              <label htmlFor="acctions">Outras ações sustentáveis</label>
              <textarea
                id="acctions"
                maxLength={100}
                placeholder="Ex.: Não usamos plásticos e comidas 100% orgânicas."
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>
              <div className="uploaded-image"></div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Horário de funcionamento</legend>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário</label>
              <input
                id="opening_hours"
                type="text"
                placeholder="ex.: das 10h às 18h de terça a sábado"
              />
            </div>
          </fieldset>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="confirm-button" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
