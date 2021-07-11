import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import logo from './images/logo.svg';
import mainImg from './images/landing.svg';

function App() {
  return (

    <div id="page-landing">
        <main id="page-landing-main">
            <section className="content">
                <button>
                    <a href="" className="search-btn">
                      <h2>BUSQUE PONTO -{'>'} </h2>
                      
                    </a>
                </button>
              <p>Encontre estabelecimentos que<br/> fazem parte da economia circular e <br/>são pontos de coleta de resíduos <br/>sólidos.</p>
            </section>
            <section className="content">
              <button>
                  <a href="" className="register-btn">
                    <h2>CADASTRE PONTO -{'>'} </h2>
                    
                  </a>                
              </button>
              <p>Seja um ponto de coleta de <br/>residuos sólidos e faça sua parte <br/>na gestão de resíduos sólidos da <br/>cidade.</p>
            </section>
        </main>
        <div id="page-landing-logo">
          <section>
            <img src={logo} alt="Logo da marca Cyclo"/>
            <h1>Restaurantes <br/> amigos da <br/> terra</h1>
          </section>
          <section>
            <img src={mainImg} alt="Planeta terra com uma lata de lixo"/>
          </section>      
        </div>
    </div>
  );
}

export default App;
