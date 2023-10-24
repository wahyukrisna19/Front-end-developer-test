import { useEffect } from "react";
import axios from "axios";
import shoesStore from "../../../Store/ShoesStore";
import Product from "../../Product/Product";
import { useObserver } from "mobx-react-lite";

const NewReleases = () => {
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://my-json-server.typicode.com/megasuartika/fe-assignment/db"
        )
        .then((response) => {
          shoesStore.setShoesData(response.data.shoes);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  return useObserver(() => (
    <>
      <div id="new-release-container">
        <p className="new-release-highlight">New Releases</p>

        <div className="product-container">
          {shoesStore.shoesData.map((shoes, index) => (
            <Product
              shoesIndex={index}
              key={shoes.name}
              name={shoes.name}
              price={shoes.price}
              category={shoes.category}
            />
          ))}
        </div>
      </div>
    </>
  ));
};

export default NewReleases;
