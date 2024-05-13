import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./MainContent.scss";

import pros_1 from "../../img/pros-1.png";
import pros_2 from "../../img/pros-2.png";
import pros_3 from "../../img/pros-3.png";
import pros_4 from "../../img/pros-4.png";
import work_1 from "../../img/work-1.png";
import work_2 from "../../img/work-2.png";
import work_3 from "../../img/work-3.png";
import important_1 from "../../img/important-1.png";
import important_2 from "../../img/important-2.png";
import important_3 from "../../img/important-3.png";
import important_4 from "../../img/important-4.png";

import slider_1 from "../../img/slider-1.png";
import slider_2 from "../../img/slider-2.jpg";
import slider_3 from "../../img/slider-3.jpg";

const MainContent = () => {
  const settings = {
    dots: true,
    infinite: true,
    swipe: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "120px",
          height: "5px",
          border: "1px transparent solid",
        }}
      ></div>
    ),
  };
  return (
    <div className="main">
      {/* slider text and butoon */}
      <div className="main__slider-content">
        <h1 className="main__slider-header">Leasing From D&M</h1>
        <Link to="/cars" className="header__menu-link">
          <button className="main__slider-button">FIND A CAR</button>
        </Link>
      </div>
      {/* slider */}
      <div className="main__slider">
        <Slider {...settings}>
          <div className="main__slide">
            <img src={slider_1} alt="car img" className="main__slide-img" />
          </div>
          <div className="main__slide">
            <img src={slider_2} alt="car img" className="main__slide-img" />
          </div>
          <div className="main__slide">
            <img src={slider_3} alt="car img" className="main__slide-img" />
          </div>
        </Slider>
      </div>
      {/* main content */}
      <div className="main__content">
        {/* pros */}
        <div className="main__pros">
          <h2 className="main__header">Why Lease with D&M?</h2>
          <ul className="main__pros-list">
            <li className="main__pros-item">
              <img src={pros_1} alt="car img" className="main__pros-img" />
              <h3 className="main__text-bold">Top Dealers</h3>
              <p className="main__text">
                TrueCar Certified Dealers compete for your business by providing
                discounted pricing on in-stock inventory.
              </p>
            </li>
            <li className="main__pros-item">
              <img src={pros_2} alt="% img" className="main__pros-img" />
              <h3 className="main__text-bold">Discounted Pricing</h3>
              <p className="main__text">
                View local inventory from the comfort of home and get access to
                guaranteed savings on the car of your choice.
              </p>
            </li>
            <li className="main__pros-item">
              <img src={pros_3} alt="card img" className="main__pros-img" />
              <h3 className="main__text-bold">Lower Payments</h3>
              <p className="main__text">
                Get discounted pricing when you shop for a car or truck using
                TrueCar and save on your lease payment.
              </p>
            </li>
            <li className="main__pros-item">
              <img src={pros_4} alt="arrow up img" className="main__pros-img" />
              <h3 className="main__text-bold">Easy Upgrade</h3>
              <p className="main__text">
                Easy to upgrade to the newest vehicle model every few years if
                you would like to be modern and comfortable
              </p>
            </li>
          </ul>
        </div>
        {/* work */}
        <div className="main__work">
          <h2 className="main__header">How Does Leasing Work?</h2>
          <p className="main__text">
            Leasing a vehicle is essentially entering into a long term rental
            agreement for that vehicle. Unlike a traditional car purchase, you
            don’t actually own the vehicle. Instead, a leasing company purchases
            the vehicle from the dealer on your behalf and then you make monthly
            payments to the leasing company for the duration of your lease. Some
            leases however, do provide the option to purchase the vehicle at the
            end of the lease.
          </p>
          <h3 className="main__text-bold">
            Similar to a short term car rental, there are rules that define:
          </h3>
          <ul className="main__work-list">
            <li className="main__work-item">
              <img src={work_1} alt="" className="main__work-img" />
              <p className="main__text main__work-text">
                How much you can drive, stated as annual miles (excess miles are
                charged at a specified rate)
              </p>
            </li>
            <li className="main__work-item">
              <img src={work_2} alt="" className="main__work-img" />
              <p className="main__text main__work-text">
                Types of damage that you may be liable for at the end of your
                lease
              </p>
            </li>
            <li className="main__work-item">
              <img src={work_3} alt="" className="main__work-img" />
              <p className="main__text main__work-text">
                The procedures and costs when you return the vehicle at the end
                of your lease
              </p>
            </li>
          </ul>
          <p className="main__text">
            Lease contracts are a commitment and ending them early can be
            difficult and expensive so it is important to consider your
            circumstances carefully before you decide.
          </p>
        </div>
        {/* welcome */}
        <div className="main__welcome">
          <h2 className="main__header">WELCOME TO D&M LEASING</h2>
          <h3 className="main__welcome-header main__text-bold">
            Find out how easy it is to lease from D&M
          </h3>
          <div className="main__video-container">
            <iframe
              width="1000"
              height="500"
              src="https://www.youtube.com/embed/5rsPLnlQT3g"
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* consider */}
        <div className="main__consider">
          <h2 className="main__header">Important Things to Consider</h2>
          <p className="main__text main__consider-text">
            Depending on your circumstances and what is important to you, a
            lease could be a great option for your next vehicle. Below are some
            important factors that may influence your decision.
          </p>
          <ul className="main__consider-list">
            <li className="main__consider-item">
              <img
                src={important_1}
                alt="car img"
                className="main__consider-img"
              />
              <p className="main__text">
                Monthly payments on leases are generally 20% - 30% cheaper than
                loans
              </p>
            </li>
            <li className="main__consider-item">
              <img
                src={important_2}
                alt="car img"
                className="main__consider-img"
              />
              <p className="main__text">
                You may be eligible for a tax break if you use the leased
                vehicle for business purposes
              </p>
            </li>
            <li className="main__consider-item">
              <img
                src={important_3}
                alt="car img"
                className="main__consider-img"
              />
              <p className="main__text">
                Easy to upgrade to the newest vehicle model every few years
              </p>
            </li>
            <li className="main__consider-item">
              <img
                src={important_4}
                alt="car img"
                className="main__consider-img"
              />
              <p className="main__text">
                There are often fees charged if you drive more than your lease's
                mileage allowance
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
