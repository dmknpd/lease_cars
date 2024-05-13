import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { filteredCarsSelector, fetchCars } from "../Cars/CarsSlice";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import News from "../News/News";

import "./SingleCar.scss";

const SingleCar = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const carsList = useSelector(filteredCarsSelector);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (carsList.length === 0) {
      dispatch(fetchCars());
    }
  }, [carsList]);

  let car = carsList.find((car) => car.id === id);

  if (!car) {
    return (
      <div className="car">
        <Header />
        <div className="car__container">
          <h1 className="car__header">About it</h1>
          <div className="car__content">
            <div className="loader"></div>
          </div>
        </div>
        <News />
        <Footer />
      </div>
    );
  }

  let { name, price, month, img } = car;

  return (
    <div className="car">
      <Header />
      <div className="car__container">
        <h1 className="car__header">About it</h1>
        <div className="car__content">
          <img src={img} alt="" className="car__img" />
          <div className="car__details">
            <h2 className="car__title">{name}</h2>
            <p className="car__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              natus asperiores, mollitia ullam eos, quos ipsam, aliquid sit
              excepturi ratione quisquam totam voluptatum reprehenderit
              voluptate consequuntur facere obcaecati. Quia, maiores!
            </p>
            <p className="car__price-text">
              Price: <span className="car__price"> {price}$</span>
            </p>
            <p className="car__price-text">
              Month payment:<span className="car__month"> {month}$</span>
            </p>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  );
};

export default SingleCar;
