import { Route, BrowserRouter, Routes } from "react-router-dom";

// ROUTES
import Details from "../Postcode/Details";
import Postcode from "../Postcode/Postcode";


function ReactRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Postcode />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouter;
