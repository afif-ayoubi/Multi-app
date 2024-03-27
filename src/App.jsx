import "./styles/colors.css";
import "./styles/utilities.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";
import Notes from "./pages/Notes";
import Weather from "./pages/Weather";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
