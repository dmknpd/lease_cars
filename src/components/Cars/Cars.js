import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CarsList from "./CarsList";

const Cars = () => {
  return (
    <div className="cars-page">
      <Header />
      <CarsList />
      <Footer />
    </div>
  );
};

export default Cars;
