import { makeAutoObservable } from "mobx";

class ShoesStore {
  selectedMenu = "newRelease";
  shoesData = [];
  selectedShoes = {};
  bag = [];
  total = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedMenu(selectedMenu) {
    this.selectedMenu = selectedMenu;
  }

  setShoesData(shoesData) {
    this.shoesData = shoesData;
  }

  setSelectedShoes(newShoes) {
    this.selectedShoes = newShoes;
  }

  addBag(newShoes) {
    this.bag.push(newShoes);
    this.setTotal();
  }

  removeBag(removedShoes) {
    removedShoes >= 0 && this.bag.splice(removedShoes, 1);
    this.setTotal();
  }

  setQuantity(index, qty) {
    this.bag[index].quantity = qty;
    this.setTotal();
  }

  setTotal() {
    this.total = this.bag.reduce((total, bagItem) => {
      return total + bagItem.price * bagItem.quantity;
    }, 0);
  }
}

const shoesStore = new ShoesStore();
export default shoesStore;
