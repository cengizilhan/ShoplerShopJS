function AddLocalStorageyedek(pushItem) {
    if ("products" in localStorage) {

        var storedNames = JSON.parse(localStorage.getItem("products"));
        var flag=0;
        for (i = 0; i < storedNames.length; i++) {
            if (storedNames[i].title == pushItem.title) {
                //storedNames.push(pushItem);
                storedNames[i].basket_piece++;
                localStorage.setItem("products", JSON.stringify(storedNames));
                var storedNames = JSON.parse(localStorage.getItem("products"));
                flag=1;
                console.log(storedNames);
                break;
            }}
        if (flag==0){
        var storedNames = JSON.parse(localStorage.getItem("products"));
        storedNames.push(pushItem);
        localStorage.setItem("products", JSON.stringify(storedNames));
        storedNames = JSON.parse(localStorage.getItem("products"));
        console.log(storedNames);
    }
    }
    else {

        localStorage.setItem("products", JSON.stringify([pushItem]));
        var storedNames = JSON.parse(localStorage.getItem("products"));
        console.log(storedNames);
       
    }

}