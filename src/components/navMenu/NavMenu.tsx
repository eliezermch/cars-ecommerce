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
            <a href="">Modelos</a>
          </li>
          <li>
            <a href="">Servicios y Accesorios</a>
          </li>
          <li>
            <a href="">Financiación</a>
          </li>
          <li>
            <a href="">Reviews y Comunidad</a>
          </li>
        </ul>
      </div>
      <div className="navmenu-container-list">
        <ul className="navmenu-content__links">
          <li>
            <a href="">Toyota Mobility Service</a>
          </li>
          <li>
            <a href="">Toyota Gazoo Racing</a>
          </li>
          <li>
            <a href="">Toyota Híbridos</a>
          </li>
        </ul>
      </div>
      <div className="navmenu-container-list">
        <ul className="navmenu-content__links">
          <li>
            <a href="">Concesionarios</a>
          </li>
          <li>
            <a href="">Test Drive</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </div>
      <div className="navmenu-container-list navmenu-container-list__end">
        <ul className="navmenu-content__links">
          <li>
            <a href="">Actividades</a>
          </li>
          <li>
            <a href="">Servicios al Cliente</a>
          </li>
          <li>
            <a href="">Ventas Especiales</a>
          </li>
          <li>
            <a href="">Innovación</a>
          </li>
          <li>
            <a href="">Prensa</a>
          </li>
          <li>
            <a href="">Acerca de...</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { NavMenu };
