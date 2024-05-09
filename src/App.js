import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./components/Main/Main";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
