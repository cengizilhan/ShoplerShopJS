
function notifyBar() {
    if (!$('.alert-box').length) {

        $('<div class="alert-box success" ><div>Ürün sepete eklendi! <a href="/basket.html">Sepete gitmek için tıklayın.</a></div></div>').prependTo('body').delay(3000).fadeOut(1000, function () {
            $('.alert-box').remove();
        });
    };
}


function PriceSum() {
    var storedNames = JSON.parse(localStorage.getItem("products"));
    var price = 0;

    for (x = 0; x < storedNames.length; x++) {
        price += storedNames[x].basket_piece * storedNames[x].price;
    }

    var data=ReadLocalStorage(); 
      
   
    
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

    }
    else if (operation == "remove") {
        storedNames.splice(i, 1);
        localStorage.setItem("products", JSON.stringify(storedNames));
        var storedNames = JSON.parse(localStorage.getItem("products"));

    }
    else if (operation == "-") {
        /* burda kaldık. eksilirken 1'den 0a geçiyor. 1'de tutup silmeklazım.*/



        if (storedNames[i].basket_piece == 1) {
            storedNames.splice(i, 1);
            localStorage.setItem("products", JSON.stringify(storedNames));
            var storedNames = JSON.parse(localStorage.getItem("products"));

        } else {
            storedNames[i].basket_piece--;
            localStorage.setItem("products", JSON.stringify(storedNames));
            var storedNames = JSON.parse(localStorage.getItem("products"));

        }

    }


}

function AddBasket(pushItem) {
    if ("products" in localStorage) {

console.log(pushItem);
        var storedNames = JSON.parse(localStorage.getItem("products"));
        console.log("localstorage");
        console.log(storedNames);
        var flag = 0;
        for (i = 0; i < storedNames.length; i++) {
            if (storedNames[i].title == pushItem.title) {
                //storedNames.push(pushItem);
                storedNames[i].basket_piece++;
                localStorage.setItem("products", JSON.stringify(storedNames));
                var storedNames = JSON.parse(localStorage.getItem("products"));
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            var storedNames = JSON.parse(localStorage.getItem("products"));
            storedNames.push(pushItem);
            localStorage.setItem("products", JSON.stringify(storedNames));
            storedNames = JSON.parse(localStorage.getItem("products"));

        }
    }
    else {

        localStorage.setItem("products", JSON.stringify([pushItem]));
        var storedNames = JSON.parse(localStorage.getItem("products"));


    }

}

/* emre göl öneri
function setToStorage(itemKey,json){
    localStorage.setItem(itemKey,JSON.stringfy(json));
    }
    
    function getFromStorage(itemKey){
    JSON.parse( localStorage.getItem(itemKey));
    }
*/
function ReadLocalStorage() {
    var storedNames = JSON.parse(localStorage.getItem("products"));
    return storedNames;
}

/*var products =
    [
        {
            "id": 1,
            "title": "Fjallraven Backpack",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category_id": 9,
            "image": "imgs/products/bagg.jpg"
        },
        {
            "id": 2,
            "title": "Iphone 12",
            "price": 1300,
            "description": "Commodo id sit ad adipisicing nostrud incididunt eu enim non consectetur duis incididunt deserunt laborum.",
            "category_id": 5,
            "image": "imgs/products/iphone12-red.png"
        }
        ,
        {
            "id": 3,
            "title": "Iphone 11",
            "price": 1250,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category_id": 5,
            "image": "imgs/products/iphone11-green.png"
        }

    ]
*/