import { useObserver } from "mobx-react-lite";
import shoesStore from "../../../Store/ShoesStore";
import { BASE_URL } from "../../../Store/constant";

const CheckOutMobile = () => {
  return useObserver(() => (
    <>
      {shoesStore.bag.map((shoes, index) => (
        <li key={index}>
          <div className="remove-bag">
            <img
              onClick={() => shoesStore.removeBag(index)}
              src={`.${BASE_URL}/assets/icons/off_close.png`}
              alt=""
            />
          </div>
          <div className="product-img">
            <img
              src={`.${BASE_URL}/assets/shoes-pict/${shoes.name}.png`}
              alt={`${shoes.name}.png`}
            />
          </div>
          <div className="product-desc">
            <p>{shoes.name}</p>
            <div className="product-information">
              <p>Size: {shoes.sizes}</p>
              <p>Color</p>
              <div
                className="product-info-color"
                style={{
                  backgroundColor: `${shoes.colors.color_hash}`,
                }}
              ></div>
            </div>
            <div className="price">
              <p>${shoes.price}</p>
              <input
                type="number"
                placeholder="0"
                value={shoes.quantity}
                onChange={(event) => {
                  shoesStore.setQuantity(index, event.target.value);
                }}
              />
            </div>
          </div>
          <div className="total-price">
            <p>Total:</p>
            <p>${shoes.price * shoes.quantity}</p>
          </div>
        </li>
      ))}
    </>
  ));
};

export default CheckOutMobile;
