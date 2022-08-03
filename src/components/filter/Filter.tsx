import { useState } from "react";

// ------------- Styles -------------//
import "./filter.css";

// ------------- Icons -------------//
import downArrow from "../../assets/icon/down-arrow.png";
import upArrow from "../../assets/icon/up-arrow.png";

// ------------- InterfaceProps -------------//
interface FilterProps {
  filterMode: string;
  originalState: () => void;
  sortedByPriceM: () => void;
  sortedByPriceP: () => void;
  sortedByYearM: () => void;
  sortedByYearP: () => void;
}

function Filter({
  filterMode,
  originalState,
  sortedByPriceM,
  sortedByPriceP,
  sortedByYearM,
  sortedByYearP,
}: FilterProps) {
  const [showFilter, setShowFilter] = useState(false);

  const arrow = showFilter === false ? downArrow : upArrow;

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div
      className={
        filterMode === "filter" ? "filter-container" : "filter-container-order"
      }
    >
      <div
        className={
          filterMode === "filter" ? "filter-content" : "filter-content-order"
        }
      >
        <span className="filter-content__title">
          {filterMode === "filter" ? "Filtrar por" : "Ordenar por"}
        </span>
        <button
          className={
            filterMode === "filter"
              ? "filter-content__button"
              : "filter-content__button-order"
          }
          onClick={toggleFilter}
        >
          <img src={arrow} alt="" />
        </button>
        {filterMode === "filter" && (
          <ul className="filter-list-content__row">
            <li className="filter-list__item">
              <button>Todos</button>
            </li>
            <li className="filter-list__item">
              <button>Autos</button>
            </li>
            <li className="filter-list__item">
              <button>Pickups y Comerciales</button>
            </li>
            <li className="filter-list__item">
              <button>SUVs y Crossovers</button>
            </li>
          </ul>
        )}
      </div>
      {filterMode === "filter" && showFilter && (
        <div className="filter-list-container">
          <ul className="filter-list-content">
            <li className="filter-list__item">
              <button>Todos</button>
            </li>
            <li className="filter-list__item">
              <button>Autos</button>
            </li>
            <li className="filter-list__item">
              <button>Pickups y Comerciales</button>
            </li>
            <li className="filter-list__item">
              <button>SUVs y Crossovers</button>
            </li>
          </ul>
        </div>
      )}
      {filterMode === "order" && showFilter && (
        <div className="filter-list-container-order">
          <ul className="filter-list-content">
            <li className="filter-list__item">
              <button onClick={originalState}>Nada</button>
            </li>
            <li className="filter-list__item">
              <button onClick={sortedByPriceM}>
                De <strong>menor</strong> a <strong>mayor</strong> precio
              </button>
            </li>
            <li className="filter-list__item">
              <button onClick={sortedByPriceP}>
                De <strong>mayor</strong> a <strong>menor</strong> precio
              </button>
            </li>
            <li className="filter-list__item">
              <button onClick={sortedByYearP}>
                Más <strong>nuevos</strong> primero
              </button>
            </li>
            <li className="filter-list__item">
              <button onClick={sortedByYearM}>
                Más <strong>viejos</strong> primero
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export { Filter };
