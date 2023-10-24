import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import shoesStore from "../../Store/ShoesStore";
import { BASE_URL } from "../../Store/constant";

const Product = ({ name, price, category, shoesIndex }) => {
  const handleSelect = (index) => {
    shoesStore.setSelectedShoes(shoesStore.shoesData[index]);
  };
  return (
    <Link to="/productdetail">
      <div className="product" onClick={() => handleSelect(shoesIndex)}>
        <div className="container-img">
          <img
            src={`.${BASE_URL}assets/shoes-pict/${name}.png`}
            alt={name + ".png"}
          />
        </div>
        <div className="container-info">
          <div>
            <p>{name}</p>
            <p>{`$${price}`}</p>
          </div>
          <p>{category}</p>
        </div>
      </div>
    </Link>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  shoesIndex: PropTypes.number,
};

export default Product;
