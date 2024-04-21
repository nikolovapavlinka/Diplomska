
/* ВОА МИ ТРЕБА
document.addEventListener("DOMContentLoaded", function() {
    var addToCartBtns = document.querySelectorAll(".addcart_btn");
    var productList = document.getElementById("productList");
    console.log(addToCartBtns);
    addToCartBtns.forEach(function(addToCartBtn) {
        addToCartBtn.addEventListener("click", function() {
            var productName = this.parentNode.parentNode.parentNode.querySelector('.art_name').textContent;
            var productPrice = this.parentNode.parentNode.querySelector('.product1_price1 span').textContent;
            console.log(productName, productPrice);
            addProductToList(productName, productPrice);
        });
    });

    function addProductToList(productName, productPrice) {
        var listItem = document.createElement("li");
        listItem.textContent = productName + " - " + productPrice;
        productList.appendChild(listItem);
    }
});
*/


// Клик на копчето "Додади во кошничка"
document.addEventListener("DOMContentLoaded", function() {
    var addToCartBtns = document.querySelectorAll(".addcart_btn");
    addToCartBtns.forEach(function(addToCartBtn) {
        addToCartBtn.addEventListener("click", function() {
            var productName = this.parentNode.parentNode.parentNode.querySelector('.art_name').textContent;
            var productPrice = this.parentNode.parentNode.querySelector('.product1_price1 span').textContent;
            addToCart(productName, productPrice);
            //window.location.href = "kosnicka.html"; // Префрлете на страницата за кошничка
        });
    });

    // Зачувајте информации во localStorage
    function addToCart(productName, productPrice) {
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        var storedData_Registracija = JSON.parse(localStorage.getItem("Registracija")) || [];
        var user = storedData_Registracija[storedData_Registracija.length - 1];
        cartItems.push({productName: productName, productPrice: productPrice, user: user});
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
});

document.addEventListener("DOMContentLoaded", function() {
    displayCart(); // Прикажете ги производите во кошничката при вчитување на страницата

    function displayCart() {
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        var productList_Name = document.getElementById("productList_Name");
        var productList_Price = document.getElementById("productList_Price");
        cartItems.forEach(function(item) {
            var listItem_Name = document.createElement("li");
            var listItem_Price = document.createElement("li");
            listItem_Name.textContent = item.productName;
            productList_Name.appendChild(listItem_Name);
            listItem_Price.textContent = item.productPrice;
            productList_Price.appendChild(listItem_Price);
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var logoutBtn = document.querySelector(".option:last-child"); // Селектор за последното копче "Одјави се"
    logoutBtn.addEventListener("click", function() {
        var cartItems = JSON.parse(localStorage.getItem("cartItems"));
        cartItems = [];
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });
  });
  






