import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu/TopMenu";
import NavBar from "./components/NavBar/NavBar";
import ProductsListing from "./pages/ProductsListing";
import ProductDetail from "./pages/ProductDetail";
import Bag from "./pages/Bag";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopMenu />
        <NavBar />
        <Routes>
          <Route
            index
            path="/Front-end-developer-test/"
            element={<ProductsListing />}
          />
          <Route
            path="/Front-end-developer-test/productdetail"
            element={<ProductDetail />}
          ></Route>
          <Route path="/Front-end-developer-test/bag" element={<Bag />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
