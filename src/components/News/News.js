import "./News.scss";

import footer_img_1 from "../../img/cars-footer-1.png";
import footer_img_2 from "../../img/cars-footer-2.png";

const News = () => {
  return (
    <div className="news">
      <div className="news__content">
        <div className="news__item">
          <img src={footer_img_1} alt="" className="cars__footer-img" />
          <div className="news__text">
            <h3 className="news__title">
              An easier way to buy your next Toyota
            </h3>
            <button className="news__button">more</button>
          </div>
        </div>
        <div className="news__item">
          <img src={footer_img_2} alt="" className="cars__footer-img" />
          <div className="news__text">
            <h3 className="news__title">A Guide to Road-Tripping With Pets</h3>
            <button className="news__button">more</button>
          </div>
        </div>
      </div>
      <button className="cars__button">SHOW MORE</button>
    </div>
  );
};

export default News;
