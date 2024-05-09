import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import store from "./components/store/store";
import { Provider } from "react-redux";

import Main from "./components/Main/Main";
import Cars from "./components/Cars/Cars";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/cars" element={<Cars />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
