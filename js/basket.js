function notifyBar() {
  if (!$(".alert-box").length) {
    $(
      '<div class="alert-box success" ><div>Ürün sepete eklendi! <a href="./basket.html">Sepete gitmek için tıklayın.</a></div></div>'
    )
      .prependTo("body")
      .delay(3000)
      .fadeOut(1000, function () {
        $(".alert-box").remove();
      });
  }
}

function NotBarUpdater() {
  var storedNames = JSON.parse(localStorage.getItem("products"));
  var pieceSum = 0;

  for (x = 0; x < storedNames.length; x++) {
    pieceSum += storedNames[x].basket_piece;
  }

  return pieceSum;
}

function PriceSum() {
  var storedNames = JSON.parse(localStorage.getItem("products"));
  var price = 0;

  for (x = 0; x < storedNames.length; x++) {
    price += storedNames[x].basket_piece * storedNames[x].price;
  }

  var data = getFromStorage("products");

  return price.toFixed(2);
}

function CountChanger(id, operation) {
  
  var storedNames = JSON.parse(localStorage.getItem("products"));

  var i = null;
  for (x = 0; x < storedNames.length; x++) {
    if (storedNames[x].id == id) {
      i = x;
    }
  }

  if (operation == "+") {

    storedNames[i].basket_piece++;
    localStorage.setItem("products", JSON.stringify(storedNames));


    var storedNames = JSON.parse(localStorage.getItem("products"));
  } else if (operation == "remove") {
    storedNames.splice(i, 1);

    setToStorage("products", JSON.stringify(storedNames));
  } else if (operation == "-") {
    /* burda kaldık. eksilirken 1'den 0a geçiyor. 1'de tutup silmeklazım.*/

    if (storedNames[i].basket_piece == 1) {
      storedNames.splice(i, 1);

      setToStorage("products", JSON.stringify(storedNames));
    } else {
      storedNames[i].basket_piece--;

      setToStorage("products", JSON.stringify(storedNames));
    }
  }
}

  
  
 
                  
      //var beverage = (age >= 21) ? "Beer" : "Juice"; 


function AddBasket(pushItem) {
  if ("products" in localStorage) {
    var storedNames = getFromStorage("products");


    var item = storedNames.find((c) => c.title == pushItem.title);
    console.log("test");
    console.log(item);

    var flag = 0;

    for (i = 0; i < storedNames.length; i++) {
      if (storedNames[i].title == pushItem.title) {
        storedNames[i].basket_piece++;

        setToStorage("products", JSON.stringify(storedNames));
        var storedNames = getFromStorage("products");
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      var storedNames = getFromStorage("products");
      storedNames.push(pushItem);

      setToStorage("products", JSON.stringify(storedNames));
    }
  } else {
    setToStorage("products", [pushItem]);
  }
}


function setToStorage(itemKey, json) {
  try {
    localStorage.setItem(itemKey, json);
  } catch (err) {
    console.log("hata");
    console.log(err);
  }
}

function getFromStorage(itemKey) {
  var storedNames = JSON.parse(localStorage.getItem(itemKey));
  return storedNames;
}
