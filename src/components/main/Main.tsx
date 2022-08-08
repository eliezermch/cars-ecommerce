import { useEffect, useState } from "react";

// ------------- Components -------------//
import { Car } from "../car/Car";
import { Filter } from "../filter/Filter";

// ------------- Custom Hook -------------//
import { useGlobatState } from "../../context/context";

// ------------- Call API -------------//
import { getCars } from "../../service/egoapi";

// ------------- Interface Model -------------//
import { CarsType } from "../../model/carModel";

// ------------- Styles -------------//
import "./main.css";

function Main() {
  const [state, dispatch] = useGlobatState();
  const [showFilter, setShowFilter] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  useEffect(() => {
    (async () => {
      if (!state.cars.length) {
        const data: CarsType[] = await getCars();
        dispatch({ cars: data });
      }
    })();
  }, []);

  // ------------- Sort Logic -------------//

  // ------- Original State -------//
  const originalState = () => {
    dispatch(state?.cars?.sort((a: CarsType, b: CarsType) => a.id - b.id));
    setShowOrder(!setShowOrder);
  };

  // ------- Sorted By Price - to + -------//
  const sortedByPriceM = () => {
    dispatch(
      state?.cars?.sort((a: CarsType, b: CarsType) => a.price - b.price)
    );
    setShowOrder(!setShowOrder);
  };

  // ------- Sorted By Price + to - -------//
  const sortedByPriceP = () => {
    dispatch(
      state?.cars?.sort((a: CarsType, b: CarsType) => b.price - a.price)
    );
    setShowOrder(!setShowOrder);
  };

  // ------- Sorted By Year - to + -------//
  const sortedByYearM = () => {
    dispatch(state?.cars?.sort((a: CarsType, b: CarsType) => a.year - b.year));
    setShowOrder(!setShowOrder);
  };

  // ------- Sorted By Year + to - -------//
  const sortedByYearP = () => {
    dispatch(state?.cars?.sort((a: CarsType, b: CarsType) => b.year - a.year));
    setShowOrder(!setShowOrder);
  };

  return (
    <main className="main-container">
      <div className="main-filter-container">
        <Filter
          filterMode="filter"
          showFilter={showFilter}
          setShowFilter={setShowFilter}
        />
        <Filter
          filterMode="order"
          showFilter={showOrder}
          setShowFilter={setShowOrder}
          originalState={originalState}
          sortedByPriceM={sortedByPriceM}
          sortedByPriceP={sortedByPriceP}
          sortedByYearM={sortedByYearM}
          sortedByYearP={sortedByYearP}
        />
      </div>

      <div className="main-car-container">
        {state.cars?.map((car: CarsType) => (
          <Car
            key={car.id}
            id={car.id}
            name={car.name}
            year={car.year}
            price={car.price}
            photo={car.photo}
          />
        ))}
      </div>
    </main>
  );
}

export { Main };
