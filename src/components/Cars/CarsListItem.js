import { Link } from "react-router-dom";

const CarsListItem = (props) => {
  const { id, name, price, month, img } = props;

  return (
    <li className="cars__item">
      <img src={img} alt="" className="cars__img" />
      <h3 className="cars__name">{name}</h3>
      <p className="cars__price">starting from $ {price}</p>
      <h3 className="cars__month">$ {month}/mo</h3>
      <div className="cars__link-container">
        <Link to={`/${id}`} href="#" className="cars__link">
          see details
        </Link>
      </div>
    </li>
  );
};

export default CarsListItem;
