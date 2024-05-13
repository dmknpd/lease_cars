import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CarsList from "./CarsList";
import News from "../News/News";

const Cars = () => {
  return (
    <div className="cars-page">
      <Header />
      <CarsList />
      <News />
      <Footer />
    </div>
  );
};

export default Cars;
