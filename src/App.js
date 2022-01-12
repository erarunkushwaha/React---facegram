import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/header/Header";
import Home from "./page/home/Home";

function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
      {/* <Routes>
        <Route path='/' element={} />
      </Routes> */}
    </div>
  );
}

export default App;
