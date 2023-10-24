import { useObserver } from "mobx-react-lite";

const Customize = () => {
  return useObserver(() => (
    <>
      <div id="new-release-container">
        <p className="new-release-highlight">Customize</p>

        <div className="product-container">
          <p>Feature release soon</p>
        </div>
      </div>
    </>
  ));
};

export default Customize;
