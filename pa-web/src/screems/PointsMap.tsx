
import logo from "../images/logo.svg"
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

function PointsMap() {

  return (
    <div id="page-map">

      <aside>
        <header>
          <img src={logo} alt="Logo marcar Cyclo"/>

          <p>Selecione no mapa  o restaurante e veja quais resíduos são coletados.</p>

          <h3>Quais residuos podem ser coletados?</h3>
          <li>Orgânicos</li>
          <li>Sólidos (papel, latas, plásticos...)</li>
          <li>Eletrônicos</li>
        </header>
      </aside>
      <div></div>
      <Link to="/cadastro" className="create-point">
        <FiPlus size={32} color="#fff"/>
      </Link>

    </div>
  )
}

export default PointsMap;