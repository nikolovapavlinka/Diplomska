// document.addEventListener('DOMContentLoaded', function () {
//     var storedData_Naracki = JSON.parse(localStorage.getItem("Naracki")) || [];
//     var productListContainer = document.getElementById("productList_container");

//     if (storedData_Naracki.length > 0) {
//         storedData_Naracki.forEach(function(product) {
//             var productSpan = document.createElement("span");
//             productSpan.textContent = product.product_name + " - " + product.product_price;
//             productListContainer.appendChild(productSpan);
//         });
        
//     } else {
//         console.log('Нема зачуван регистриран корисник во localStorage.');
//     }
// });

// document.getElementById("addcart_btn").addEventListener("click", function() {
//     var product_name = document.querySelector('.art_name').textContent;
//     var product_price = document.querySelector('.product1_price').textContent;
//     var email = document.getElementById('email').value;
//     var name = document.getElementById('name').value;

//     var user = { name: name, email: email, product_name: product_name, product_price: product_price }; 

//     var productListContainer = document.getElementById("productList_container");
//     var productSpan = document.createElement("span");
//     productSpan.textContent = user.product_name + " - " + user.product_price;
//     productListContainer.appendChild(productSpan);

//     var storedData_Naracki = JSON.parse(localStorage.getItem("Naracki")) || [];
//     storedData_Naracki.push(user); 
//     localStorage.setItem("Naracki", JSON.stringify(storedData_Naracki)); 
// });



/*
document.addEventListener('DOMContentLoaded', function () {
    var storedData_Naracki = JSON.parse(localStorage.getItem("Naracki")) || [];
    var productList = document.getElementById("productList");

    if (storedData_Naracki.length > 0) {
        storedData_Naracki.forEach(function(product) {
            addProductToList(product.product_name, product.product_price);
        });
        console.log('Тука');
    } else {
        console.log('Нема зачуван регистриран корисник во localStorage.');
    }
});

// document.getElementById("addcart_btn").addEventListener("click", function() {
//     var product_name = document.querySelector('.art_name').textContent;
//     var product_price = document.querySelector('.product1_price').textContent;
//     var email = document.getElementById('email').value;
//     var name = document.getElementById('name').value;

//     var user = { name: name, email: email, product_name: product_name, product_price: product_price }; 

//     addProductToList(user.product_name, user.product_price);

//     var storedData_Naracki = JSON.parse(localStorage.getItem("Naracki")) || [];
//     storedData_Naracki.push(user); 
//     localStorage.setItem("Naracki", JSON.stringify(storedData_Naracki)); 
// });

function addProductToList(productName, productPrice) {
    var productList = document.getElementById("productList");
    var listItem = document.createElement("li");
    listItem.textContent = productName + " - " + productPrice;
    productList.appendChild(listItem);
}



document.getElementById("addcart_btn").addEventListener("click", function() {
    var productName = document.querySelector('.art_name').textContent;
    var productPrice = document.querySelector('.product1_price1 span').textContent;

    addProductToList(productName, productPrice);
});


function addProductToList(productName, productPrice) {
    var productList = document.getElementById("productList");
    var listItem = document.createElement("li");
    listItem.textContent = productName + " - " + productPrice;
    productList.appendChild(listItem);
}
*/

document.addEventListener("DOMContentLoaded", function() {
    var addToCartBtn = document.getElementById("addcart_btn");
    var productList = document.getElementById("productList");
    console.log(addToCartBtn);
    addToCartBtn.addEventListener("click", function() {
        var productName = document.querySelector('.art_name').textContent;
        var productPrice = document.querySelector('.product1_price1 span').textContent;

        addProductToList(productName, productPrice);
    });

    function addProductToList(productName, productPrice) {
        var listItem = document.createElement("li");
        listItem.textContent = productName + " - " + productPrice;
        productList.appendChild(listItem);
    }
});

