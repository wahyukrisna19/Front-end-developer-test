import shoesStore from "../Store/ShoesStore";
import CheckOutDesktop from "../components/CheckOut/CheckOutDesktop/CheckOutDesktop";
import CheckOutMobile from "../components/CheckOut/CheckOutMobile/CheckOutMobile";
import "./Styles/bag.css";
import Notification from "../components/Notification/Notification";
import { useObserver } from "mobx-react-lite";
import { BASE_URL } from "../Store/constant";

const Bag = () => {
  return useObserver(() => (
    <>
      <section className="your-bag-section">
        <div className="your-bag-header">
          <p>Your Bag</p>
          <div className="shopping-bag">
            <img
              src={`.${BASE_URL}/assets/icons/shopping-bag-line-1.png`}
              alt="shopping-bag-line 1"
            />
            <Notification />
          </div>
        </div>
        <div className="checkout-container">
          <table className="checkout-table">
            <thead>
              <tr className="table-header">
                <td></td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              <tr className="space-table"></tr>
              <CheckOutDesktop />
            </tbody>
          </table>
          <ul className="checkout-list">
            <CheckOutMobile />
          </ul>
        </div>
        <div className="container-total-paynow">
          <div className="total">
            <p>Total</p>
            <p>${shoesStore.total}</p>
          </div>
          <div
            className="pay-now"
            onClick={() => {
              alert("Payment Successfull");
            }}
          >
            <p>PAY NOW</p>
            <div className="arrow-icon">
              <img
                src={`.${BASE_URL}/assets/icons/small_long_right.png`}
                alt="right-arrow.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  ));
};

export default Bag;
