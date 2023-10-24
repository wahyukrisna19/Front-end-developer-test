import shoesStore from "../../Store/ShoesStore";
import { useObserver } from "mobx-react";
import Notification from "../Notification/Notification";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Store/constant";

const NavBar = () => {
  const navigate = useNavigate();
  const underline = {
    borderBottom: "1px solid #000",
  };

  const handleClickMenu = (category) => {
    shoesStore.setSelectedMenu(category);
  };

  const handleChangeMenu = (menu) => {
    shoesStore.setSelectedMenu(menu.target.value);
    navigate("/");
  };

  return useObserver(() => (
    <>
      <div className="shoes-menu-container">
        <div
          className="nike-logo"
          onClick={() => handleClickMenu("newRelease")}
        >
          <Link to={"/"}>
            <img
              src={`.${BASE_URL}/assets/icons/Logo_NIKE 1.png`}
              alt="Logo_NIKE 1.png"
            />
          </Link>
        </div>
        <div className="shoes-category">
          <div
            onClick={() => {
              handleClickMenu("newRelease");
            }}
            style={shoesStore.selectedMenu === "newRelease" ? underline : null}
          >
            <Link to={"/"}>New Release</Link>
          </div>
          <div
            onClick={() => {
              handleClickMenu("men");
            }}
            style={shoesStore.selectedMenu === "men" ? underline : null}
          >
            <Link to={"/"}>Men</Link>
          </div>
          <div
            onClick={() => {
              handleClickMenu("women");
            }}
            style={shoesStore.selectedMenu === "women" ? underline : null}
          >
            <Link to={"/"}>Women</Link>
          </div>
          <div
            onClick={() => {
              handleClickMenu("kids");
            }}
            style={shoesStore.selectedMenu === "kids" ? underline : null}
          >
            <Link to={"/"}>Kids</Link>
          </div>
          <div
            onClick={() => {
              handleClickMenu("customize");
            }}
            style={shoesStore.selectedMenu === "customize" ? underline : null}
          >
            <Link to={"/"}>Customize</Link>
          </div>
        </div>
        <div className="shoes-category second">
          <select name="" id="" onChange={handleChangeMenu}>
            <option value={"newRelease"}>New Release</option>
            <option value={"men"}>Men</option>
            <option value={"women"}>Women</option>
            <option value={"kids"}>Kids</option>
            <option value={"customize"}>Customize</option>
          </select>
        </div>
        <div className="menu">
          <div className="shopping-bag">
            <Link to="/bag">
              <img
                src={`.${BASE_URL}/assets/icons/shopping-bag-line-1.png`}
                alt="shopping-bag-line 1"
              />
              <Notification />
            </Link>
          </div>

          <div className="account-circle">
            <img
              src={`.${BASE_URL}/assets/icons/account-circle-line-1.png`}
              alt="account-circle-line 1.png"
            />
          </div>
        </div>
      </div>
    </>
  ));
};

export default NavBar;
