import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCars, selectAll } from "../Cars/CarsSlice";

import "./CarsList.scss";

import footer_img_1 from "../../img/cars-footer-1.png";
import footer_img_2 from "../../img/cars-footer-2.png";
import CarsListItem from "./CarsListItem";

const CarsList = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectAll);
  const carsLoadingStatus = useSelector(
    (state) => state.cars.carsLoadingStatus
  );

  const renderCarsList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="cars__header">Героев пока нет</h5>;
    }

    return arr.map(({ id, ...props }) => {
      return <CarsListItem key={id} {...props} />;
    });
  };

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const carsList = renderCarsList(cars);

  return (
    <div className="cars">
      <div className="cars__container">
        {/* header */}
        <div className="cars__header-container">
          <h2 className="cars__header">Choose your car</h2>
          {/* filters */}
          <div className="cars__filters-container">
            <ul className="cars__filters">
              <li className="cars__filter">Car and Minivan</li>
              <li className="cars__filter">Trucks</li>
              <li className="cars__filter">Crossovers & SUVs</li>
              <li className="cars__filter">Electrified</li>
            </ul>
          </div>
        </div>
        {/* list */}
        <div className="cars__list-container">
          <ul className="cars__list">
            {/* items */}
            {carsList}
          </ul>
          <button className="cars__button">SHOW MORE</button>
        </div>
        {/* footer */}
        <div className="cars__footer-container">
          <div className="cars__footer-content">
            <div className="cars__footer-item">
              <img src={footer_img_1} alt="" className="cars__footer-img" />
              <div className="cars__footer-text">
                <h3 className="cars__footer-title">
                  An easier way to buy your next Toyota
                </h3>
                <button className="cars__footer-link">more</button>
              </div>
            </div>
            <div className="cars__footer-item">
              <img src={footer_img_2} alt="" className="cars__footer-img" />
              <div className="cars__footer-text">
                <h3 className="cars__footer-title">
                  A Guide to Road-Tripping With Pets
                </h3>
                <button className="cars__footer-link">more</button>
              </div>
            </div>
          </div>
          <button className="cars__button">SHOW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default CarsList;
