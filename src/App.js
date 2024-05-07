import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div style={{ backgroundColor: "white", height: "100px" }}></div>
      <Footer />
    </div>
  );
};

export default App;
