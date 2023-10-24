import { useObserver } from "mobx-react-lite";
import shoesStore from "../../Store/ShoesStore";
import "./Notification.css";

const Notification = () => {
  return useObserver(() => (
    <div className="notification">
      <div>
        <p>{shoesStore.bag.length}</p>
      </div>
    </div>
  ));
};

export default Notification;
