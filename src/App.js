import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./Pages/Home";
import AboutComponent from "./Pages/About";
import MenuComponent from "./components/Menu";

function App() {
  return (
    <div className="App">
      <div>
        <MenuComponent />
      </div>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
      </Routes>
    </div>
  );
}

export default App;
