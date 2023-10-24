import { useEffect } from "react";
import axios from "axios";
import shoesStore from "../../../Store/ShoesStore";
import Product from "../../Product/Product";
import { useObserver } from "mobx-react-lite";

const Men = () => {
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://my-json-server.typicode.com/megasuartika/fe-assignment/db"
        )
        .then((response) => {
          const shoesData = response.data.shoes;
          const menShoes = shoesData.filter((shoes) => {
            return shoes.category === "Men Shoes";
          });
          shoesStore.setShoesData(menShoes);
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
        <p className="new-release-highlight">Men</p>

        <div className="product-container">
          {shoesStore.shoesData.length > 0 ? (
            shoesStore.shoesData.map((shoes, index) => (
              <Product
                shoesIndex={index}
                key={shoes.name}
                name={shoes.name}
                price={shoes.price}
                category={shoes.category}
              />
            ))
          ) : (
            <p>Products are not available</p>
          )}
        </div>
      </div>
    </>
  ));
};

export default Men;
