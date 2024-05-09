import { Link } from "react-router-dom";

import car from "../../img/carlisitem.png";

const CarsListItem = () => {
  return (
    <li className="cars__item">
      <img src={car} alt="" className="cars__img" />
      <h3 className="cars__name">Toyota Crown 2023</h3>
      <p className="cars__price">starting from $ 39900</p>
      <h3 className="cars__month">$ 650/mo</h3>
      <div className="cars__link-container">
        <Link to={`/${1}`} href="#" className="cars__link">
          see details
        </Link>
      </div>
    </li>
  );
};

export default CarsListItem;
