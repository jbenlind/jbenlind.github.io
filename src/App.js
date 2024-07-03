import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
