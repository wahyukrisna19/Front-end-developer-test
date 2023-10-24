import { useState } from "react";
import shoesStore from "../Store/ShoesStore";
import "./Styles/productDetail.css";
import { BASE_URL } from "../Store/constant";
import { useNavigate } from "react-router-dom";
import { useObserver } from "mobx-react-lite";

const ProductsDetail = () => {
  const initialValue = {
    ...shoesStore.selectedShoes,
    quantity: 1,
  };
  const [selectShoes, setSelectShoes] = useState(initialValue);
  const sizeStyle = { backgroundColor: "#000", color: "#fff" };
  const colorStyle = "5px solid #000";
  const navigate = useNavigate();

  const navigateToBag = () => {
    shoesStore.addBag(selectShoes);
    navigate("/bag");
  };
  console.log(initialValue);
  return useObserver(() => (
    <>
      <section id="shoes-detail">
        <div className="shoes-detail-container">
          <div className="detail-img">
            <div className="main-img">
              <img
                src={`.${BASE_URL}/assets/shoes-pict/${shoesStore.selectedShoes.name}.png`}
                alt={`${shoesStore.selectedShoes.name}.png`}
              />
            </div>

            <div className="desc-img">
              <img
                src={`.${BASE_URL}/assets/shoes-pict/${shoesStore.selectedShoes.name}-1.png`}
                alt={`${shoesStore.selectedShoes.name}-1.png`}
              ></img>
              <img
                src={`.${BASE_URL}/assets/shoes-pict/${shoesStore.selectedShoes.name}-2.png`}
                alt={`${shoesStore.selectedShoes.name}-2.png`}
              ></img>
              <img
                src={`.${BASE_URL}/assets/shoes-pict/${shoesStore.selectedShoes.name}-3.png`}
                alt={`${shoesStore.selectedShoes.name}-3.png`}
              ></img>
              <img
                src={`.${BASE_URL}/assets/shoes-pict/${shoesStore.selectedShoes.name}-4.png`}
                alt={`${shoesStore.selectedShoes.name}-4.png`}
              ></img>
            </div>
          </div>

          <div className="detail-information">
            <div className="description">
              <p>{shoesStore.selectedShoes.category}</p>
              <p>{shoesStore.selectedShoes.name}</p>
              <p>{shoesStore.selectedShoes.description}</p>
            </div>

            <div className="video-container">
              <a
                href={`${shoesStore.selectedShoes.video}`}
                className="play-video-button"
              >
                <img
                  src={`.${BASE_URL}/assets/icons/Group 20.png`}
                  alt="play-video-button"
                />
              </a>
              <p>PLAY VIDEO</p>
            </div>

            <div className="size">
              <p>SELECT SIZE(US)</p>
              <div className="size-container">
                {shoesStore.selectedShoes.sizes.map((size, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectShoes({ ...selectShoes, sizes: size });
                    }}
                    style={selectShoes.sizes === size ? sizeStyle : null}
                    className="size-box"
                  >
                    <p>{size}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="color">
              <p>SELECT COLOR</p>
              <div className="color-container">
                {shoesStore.selectedShoes.colors.map((color) => (
                  <div
                    onClick={() =>
                      setSelectShoes({ ...selectShoes, colors: color })
                    }
                    key={color.name}
                    style={{
                      backgroundColor: `${color.color_hash}`,

                      border:
                        selectShoes.colors.color_hash === color.color_hash
                          ? colorStyle
                          : null,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="checkout">
        <div className="group8">
          <div className="free-delivery">
            <img
              src={`.${BASE_URL}/assets/icons/free-delivery.png`}
              alt="free-delivery.png"
            />
          </div>
          <p>FREE SHIPPING OVER $100 PURCHASE</p>
        </div>
        <div>
          <button
            className="checkout-button"
            disabled={
              selectShoes.sizes === initialValue.sizes ||
              selectShoes.colors === initialValue.colors
                ? true
                : false
            }
            onClick={navigateToBag}
            style={
              selectShoes.sizes === initialValue.sizes ||
              selectShoes.colors === initialValue.colors
                ? { opacity: "50%" }
                : null
            }
          >
            <p>ADD TO BAG — {`$${shoesStore.selectedShoes.price}`} </p>
            <div className="arrow-icon">
              <img
                src={`.${BASE_URL}/assets/icons/small_long_right.png`}
                alt="right-arrow.png"
              />
            </div>
          </button>
        </div>
      </section>
    </>
  ));
};

export default ProductsDetail;
