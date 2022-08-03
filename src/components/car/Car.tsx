import { Link } from "react-router-dom";

// ------------- Styles -------------//
import "./car.css";

// ------------- InterfaceProps -------------//
interface CarProps {
  id: number;
  name: string;
  year: number;
  price: number;
  photo: string;
}

function Car({ id, name, year, price, photo }: CarProps) {
  const parsePrice = (_price: number) => {
    return new Intl.NumberFormat("de-DE").format(_price);
  };

  return (
    <div key={id} className="car-container">
      <div className="car-content">
        <h2 className="car-title">{name}</h2>
        <span className="car-details">
          {year} | $ {parsePrice(price)}
        </span>
        <Link className="car-content" to={`/details/${id}`}>
          <img className="car-img" src={photo} alt="" />
          <button className="car-button">Ver Modelo</button>
        </Link>
      </div>
    </div>
  );
}

export { Car };
