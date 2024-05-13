import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCars,
  filteredCarsSelector,
  setCarFilter,
  setCarsCount,
} from "../Cars/CarsSlice";

import "./CarsList.scss";

import footer_img_1 from "../../img/cars-footer-1.png";
import footer_img_2 from "../../img/cars-footer-2.png";
import CarsListItem from "./CarsListItem";

const CarsList = () => {
  const dispatch = useDispatch();

  const cars = useSelector(filteredCarsSelector);
  const carsLoadingStatus = useSelector(
    (state) => state.cars.carsLoadingStatus
  );
  const carsDisplayCount = useSelector((state) => state.cars.carsDisplayCount);
  const carsActiveFilter = useSelector((state) => state.cars.carsActiveFilter);

  //cars list
  const renderCarsList = (arr) => {
    return arr.map((item) => {
      return <CarsListItem key={item.id} {...item} />;
    });
  };

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const carsList = renderCarsList(cars);

  const carsDisplayHandler = useCallback(() => {
    dispatch(setCarsCount());
  }, [dispatch]);

  //active filter

  const activeFilterHandler = useCallback(
    (value) => {
      dispatch(setCarFilter(value));
    },
    [dispatch]
  );

  return (
    <div className="cars">
      <div className="cars__container">
        {/* header */}
        <div className="cars__header-container">
          <h2 className="cars__header">Choose your car</h2>
          {/* filters */}
          <div className="cars__filters-container">
            <ul className="cars__filters">
              <li
                className={`cars__filter ${
                  carsActiveFilter === "all" ? "cars__filter--active" : ""
                }`}
                onClick={() => activeFilterHandler("all")}
              >
                Car and Minivan
              </li>
              <li
                className={`cars__filter ${
                  carsActiveFilter === "truck" ? "cars__filter--active" : ""
                }`}
                onClick={() => activeFilterHandler("truck")}
              >
                Trucks
              </li>
              <li
                className={`cars__filter ${
                  carsActiveFilter === "crossover&suv"
                    ? "cars__filter--active"
                    : ""
                }`}
                onClick={() => activeFilterHandler("crossover&suv")}
              >
                Crossovers & SUVs
              </li>
              <li
                className={`cars__filter ${
                  carsActiveFilter === "electrified"
                    ? "cars__filter--active"
                    : ""
                }`}
                onClick={() => activeFilterHandler("electrified")}
              >
                Electrified
              </li>
            </ul>
          </div>
        </div>
        {/* list */}
        <div className="cars__list-container">
          {/* items */}
          {carsLoadingStatus === "idle" ? null : <div class="loader"></div>}
          {carsList.length > 0 ? (
            <ul className="cars__list">
              {" "}
              {carsList.slice(0, carsDisplayCount)}
            </ul>
          ) : (
            <h5 className="cars__header" style={{ textAlign: "center" }}>
              Таких машин нет
            </h5>
          )}

          {cars.length > carsDisplayCount ? (
            <button className="cars__button" onClick={carsDisplayHandler}>
              SHOW MORE
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CarsList;
