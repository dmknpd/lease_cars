import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainContent from "./MainContent";

const Main = () => {
  return (
    <div className="main-page">
      <Header main={true} />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Main;
