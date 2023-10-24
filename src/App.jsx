import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu/TopMenu";
import NavBar from "./components/NavBar/NavBar";
import ProductsListing from "./pages/ProductsListing";
import ProductDetail from "./pages/ProductDetail";
import Bag from "./pages/Bag";
import { useObserver } from "mobx-react-lite";

function App() {
  return useObserver(() => (
    <>
      <BrowserRouter>
        <TopMenu />
        <NavBar />
        <Routes>
          <Route index path="/" element={<ProductsListing />} />
          <Route path="/productdetail" element={<ProductDetail />}></Route>
          <Route path="/bag" element={<Bag />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  ));
}

export default App;
