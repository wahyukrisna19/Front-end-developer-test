import "./Styles/productsListing.css";
import { useObserver } from "mobx-react";
import shoesStore from "../Store/ShoesStore";
import NewReleases from "../components/ProductCategory/NewReleases/NewReleases";
import Men from "../components/ProductCategory/Men/Men";
import Women from "../components/ProductCategory/Women/Women";
import Kids from "../components/ProductCategory/Kids/Kids";
import Customize from "../components/ProductCategory/Customize/Customize";

const ProductsListing = () => {
  return useObserver(() => {
    let content;
    {
      if (shoesStore.selectedMenu === "newRelease") {
        content = <NewReleases />;
      } else if (shoesStore.selectedMenu === "men") {
        content = <Men />;
      } else if (shoesStore.selectedMenu === "women") {
        content = <Women />;
      } else if (shoesStore.selectedMenu === "kids") {
        content = <Kids />;
      } else if (shoesStore.selectedMenu === "customize") {
        content = <Customize />;
      }

      return (
        <>
          <section id="shoesCategory">
            <div id="new-release-container">
              {content}
              <div className="product-container"></div>
            </div>
          </section>
        </>
      );
    }
  });
};

export default ProductsListing;
