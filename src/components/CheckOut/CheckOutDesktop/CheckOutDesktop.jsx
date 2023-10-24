import { useObserver } from "mobx-react-lite";
import shoesStore from "../../../Store/ShoesStore";
import { BASE_URL } from "../../../Store/constant";

const CheckOutDesktop = () => {
  return useObserver(() => (
    <>
      {shoesStore.bag.map((shoes, index) => {
        return (
          <tr key={index}>
            <td>
              <div onClick={() => shoesStore.removeBag(index)}>
                <img src={`.${BASE_URL}/assets/icons/off_close.png`} alt="" />
              </div>
            </td>
            <td>
              <div className="checkout-product">
                <div className="checkout-product-img">
                  <img
                    src={`.${BASE_URL}/assets/shoes-pict/${shoes.name}.png`}
                    alt={`${shoes.name}.png`}
                  />
                </div>
                <div className="checkout-product-desc">
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
                </div>
              </div>
            </td>
            <td>
              <p>${shoes.price}</p>
            </td>
            <td>
              <input
                type="number"
                placeholder="0"
                value={shoes.quantity}
                onChange={(event) => {
                  shoesStore.setQuantity(index, event.target.value);
                }}
              />
            </td>
            <td>
              <p>${shoes.price * shoes.quantity}</p>
            </td>
          </tr>
        );
      })}
    </>
  ));
};

export default CheckOutDesktop;
