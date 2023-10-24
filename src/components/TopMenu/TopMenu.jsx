import "./TopMenu.css";
import { BASE_URL } from "../../Store/constant";

export default function TopMenu() {
  return (
    <div className="top-menu-container">
      <div className="language">
        <select name="" id="">
          <option value="English">English</option>
          <option value="Indonesia">Indonesia</option>
        </select>
      </div>
      <div className="group8">
        <div className="free-delivery">
          <img
            src={`.${BASE_URL}/assets/icons/free-delivery.png`}
            alt="free-delivery.png"
          />
        </div>
        <p>FREE SHIPPING OVER $100 PURCHASE</p>
      </div>
      <div className="group7 first">
        <a href="">Shipping</a>
        <a href="">FAQ</a>
        <a href="">Contact</a>
      </div>
      <div className="group7 second">
        <select name="" id="">
          <option>Shipping</option>
          <option>FAQ</option>
          <option>Contact</option>
        </select>
      </div>
    </div>
  );
}
