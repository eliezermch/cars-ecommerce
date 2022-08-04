// ------------- Icons -------------//
import closeIcon from "../../assets/icon/icon-close.png";

// ------------- Styles -------------//
import "./navMenu.css";

// ------------- InterfaceProps -------------//
interface NavMenuProps {
  toggleNavMenu: () => void;
}

function NavMenu({ toggleNavMenu }: NavMenuProps) {
  return (
    <div className="navmenu-container">
      <div className="navmenu-content-button">
        <button className="navmenu-button" onClick={toggleNavMenu}>
          <span>Cerrar</span>
          <img src={closeIcon} alt="" />
        </button>
      </div>
      <div className="navmenu-container-list">
        <ul className="navmenu-content__links">
          <li>
            <a href="#Models">Modelos</a>
          </li>
          <li>
            <a href="#Services&Accessories">Servicios y Accesorios</a>
          </li>
          <li>
            <a href="#financing">Financiación</a>
          </li>
          <li>
            <a href="#Reviews&Community">Reviews y Comunidad</a>
          </li>
        </ul>
      </div>
      <div className="navmenu-container-list">
        <ul className="navmenu-content__links">
          <li>
            <a href="#ToyotaMobilityService">Toyota Mobility Service</a>
          </li>
          <li>
            <a href="#ToyotaGazooRacing">Toyota Gazoo Racing</a>
          </li>
          <li>
            <a href="#ToyotaHíbridos">Toyota Híbridos</a>
          </li>
        </ul>
      </div>
      <div className="navmenu-container-list">
        <ul className="navmenu-content__links">
          <li>
            <a href="#Concesionarios">Concesionarios</a>
          </li>
          <li>
            <a href="#TestDrive">Test Drive</a>
          </li>
          <li>
            <a href="#Contact">Contacto</a>
          </li>
        </ul>
      </div>
      <div className="navmenu-container-list navmenu-container-list__end">
        <ul className="navmenu-content__links">
          <li>
            <a href="#Activities">Actividades</a>
          </li>
          <li>
            <a href="#ClientService">Servicios al Cliente</a>
          </li>
          <li>
            <a href="#Especials">Ventas Especiales</a>
          </li>
          <li>
            <a href="#">Innovación</a>
          </li>
          <li>
            <a href="#">Prensa</a>
          </li>
          <li>
            <a href="#About">Acerca de...</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { NavMenu };
