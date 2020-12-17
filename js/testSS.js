function AddBasket(pushItem) {
  if ("products" in localStorage) {
    var storedNames = getBasket();

    if (storedNames !== null) {
      var item = storedNames.find((c) => c.title == pushItem.title);
      if (item !== null) {
        item.basket_piece++;
        storedNames = storedNames.filter((c) => c.title !== item.title);
        storedNames.push(item);
      }
    } else {
      storedNames.push(pushItem);
    }
    saveBasket(storedNames);
  } else {
    saveBasket([pushItem]);
  }
}
