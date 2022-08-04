import { useState } from "react";
import { Link } from "react-router-dom";

// ------------- Components -------------//
import { NavMenu } from "../navMenu/NavMenu";

// ------------- Styles -------------//
import "./header.css";

// ------------- Icons -------------//
import egoLogo from "../../assets/icon/ego-logo.png";
import menuIcon from "../../assets/icon/icon-menu.png";

// ------------- InterfaceProps -------------//
interface HeaderProps {
  page: string;
}

function Header({ page }: HeaderProps) {
  const [showNavMenu, setShowNavMenu] = useState(false);

  // --------- ToggleNavMenu ---------//
  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-button-container-left">
          <Link to={"/"}>
            <button className="header-button">
              <img className="header-button-img-ego" src={egoLogo} alt="" />
            </button>
          </Link>

          <div className="header-buttons-content_left">
            <div className="buttons-container_left">
              <Link to={"/"}>
                <button
                  className={
                    page === "home" ? "buttons_left-red" : "buttons_left-white"
                  }
                >
                  <p>Modelos</p>
                </button>
              </Link>
            </div>
            <div>
              <button
                className={
                  page === "home" ? "buttons_left-white" : "buttons_left-red"
                }
              >
                <p>Ficha de modelo</p>
              </button>
            </div>
          </div>
        </div>
        <div className="header-button-container-rigth">
          <button className="header-button" onClick={toggleNavMenu}>
            <p>Menú</p>
            <img className="header-button-img-menu" src={menuIcon} alt="" />
          </button>
        </div>
      </div>
      {page !== "details" && (
        <div className="header-content-title">
          <h1>Descubrí todos los modelos</h1>
        </div>
      )}

      {showNavMenu && <NavMenu toggleNavMenu={toggleNavMenu} />}
    </header>
  );
}

export { Header };
