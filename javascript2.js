// //Stavanje prozivodite vo localStorage, koj user na koj prozivod kliknal na kopceto "Dodadi vo kosnicka"
// var addToCartBtns = document.querySelectorAll(".addcart_btn");
// var userData_Naracki = JSON.parse(localStorage.getItem("Naracki")) || [];
// var storedData_Registracija = JSON.parse(localStorage.getItem("Registracija")) || [];

// addToCartBtns.forEach(function(btn) {
//     btn.addEventListener("click", function() {
//         var productContainer = this.closest('.product1_container_info');
//         var productNameElement = productContainer.querySelector('.art_name');
//         var productPriceElement = productContainer.querySelector('.product1_price1 span');
//         var user = storedData_Registracija[storedData_Registracija.length - 1];
        
//         if (productNameElement && productPriceElement) {
//             var productName = productNameElement.innerText;
//             var productPrice = productPriceElement.innerText;

//             var user = { user: user, product_name: productName, product_price: productPrice }; 

//             userData_Naracki.push(user); 
//             localStorage.setItem("Naracki", JSON.stringify(userData_Naracki)); 
//         } else {
//             console.error("Could not find product name or price element.");
//         }
//     });
// });


//Koga ke se klikne na bilo koja umetnicka slika vo kategorijata umetnici sliki da se otvore prozorec
document.addEventListener('DOMContentLoaded', function () {
    var product = document.getElementById('product1');
    const product1_container = document.getElementById('product1_container');
    
    if (product && product1_container) { // Проверка дали елементите се пронајдени
      product.addEventListener('click', function () {
        product1_container.style.display = 'block';
          document.getElementById('page_mask').style.display = 'block';
      });
  
    document.getElementById('page_mask').addEventListener('click', function () {
      product1_container.style.display = 'none';
        document.getElementById('page_mask').style.display = 'none';
    }); 
  
  } else {
    console.error("Element not found!");
    }
  });

//Koga ke se klikne na bilo koja umetnicka slika vo kategorijata umetnici sliki da se otvore prozorec
document.addEventListener('DOMContentLoaded', function () {
    var product2 = document.getElementById('product2');
    const product2_container = document.getElementById('product2_container');
    
    if (product2 && product2_container) { // Проверка дали елементите се пронајдени
      product2.addEventListener('click', function () {
        product2_container.style.display = 'block';
          document.getElementById('page_mask').style.display = 'block';
      });
  
    document.getElementById('page_mask').addEventListener('click', function () {
      product2_container.style.display = 'none';
        document.getElementById('page_mask').style.display = 'none';
    }); 
  
  } else {
    console.error("Element not found!");
    }
  });


//Koga ke se klikne na bilo koja umetnicka slika vo kategorijata umetnici sliki da se otvore prozorec
document.addEventListener('DOMContentLoaded', function () {
    var product3 = document.getElementById('product3');
    const product3_container = document.getElementById('product3_container');
    
    if (product3 && product3_container) { // Проверка дали елементите се пронајдени
      product3.addEventListener('click', function () {
        product3_container.style.display = 'block';
          document.getElementById('page_mask').style.display = 'block';
      });
  
    document.getElementById('page_mask').addEventListener('click', function () {
      product3_container.style.display = 'none';
        document.getElementById('page_mask').style.display = 'none';
    }); 
  
  } else {
    console.error("Element not found!");
    }
  });


//Koga ke se klikne na bilo koja umetnicka slika vo kategorijata umetnici sliki da se otvore prozorec
document.addEventListener('DOMContentLoaded', function () {
    var product4 = document.getElementById('product4');
    const product4_container = document.getElementById('product4_container');
    
    if (product4 && product4_container) { // Проверка дали елементите се пронајдени
      product4.addEventListener('click', function () {
        product4_container.style.display = 'block';
          document.getElementById('page_mask').style.display = 'block';
      });
  
    document.getElementById('page_mask').addEventListener('click', function () {
      product4_container.style.display = 'none';
        document.getElementById('page_mask').style.display = 'none';
    }); 
  
  } else {
    console.error("Element not found!");
    }
});      


//Koga ke se klikne na bilo koja umetnicka slika vo kategorijata umetnici sliki da se otvore prozorec
document.addEventListener('DOMContentLoaded', function () {
    var product5 = document.getElementById('product5');
    const product5_container = document.getElementById('product5_container');
    
    if (product5 && product5_container) { // Проверка дали елементите се пронајдени
      product5.addEventListener('click', function () {
        product5_container.style.display = 'block';
          document.getElementById('page_mask').style.display = 'block';
      });
  
    document.getElementById('page_mask').addEventListener('click', function () {
      product5_container.style.display = 'none';
        document.getElementById('page_mask').style.display = 'none';
    }); 
  
  } else {
    console.error("Element not found!");
    }
}); 


//Koga ke se klikne na bilo koja umetnicka slika vo kategorijata umetnici sliki da se otvore prozorec
document.addEventListener('DOMContentLoaded', function () {
    var product6 = document.getElementById('product6');
    const product6_container = document.getElementById('product6_container');
    
    if (product6 && product6_container) { // Проверка дали елементите се пронајдени
      product6.addEventListener('click', function () {
        product6_container.style.display = 'block';
          document.getElementById('page_mask').style.display = 'block';
      });
  
    document.getElementById('page_mask').addEventListener('click', function () {
      product6_container.style.display = 'none';
        document.getElementById('page_mask').style.display = 'none';
    }); 
  
  } else {
    console.error("Element not found!");
    }
}); 

//Koga ke se klikne na bilo koja umetnicka slika vo kategorijata umetnici sliki da se otvore prozorec
document.addEventListener('DOMContentLoaded', function () {
  var product7 = document.getElementById('product7');
  const product7_container = document.getElementById('product7_container');
  
  if (product7 && product7_container) { // Проверка дали елементите се пронајдени
    product7.addEventListener('click', function () {
      product7_container.style.display = 'block';
        document.getElementById('page_mask').style.display = 'block';
    });

  document.getElementById('page_mask').addEventListener('click', function () {
    product7_container.style.display = 'none';
      document.getElementById('page_mask').style.display = 'none';
  }); 

} else {
  console.error("Element not found!");
  }
}); 

//Koga ke se klikne na bilo koja umetnicka slika vo kategorijata umetnici sliki da se otvore prozorec
document.addEventListener('DOMContentLoaded', function () {
  var product8 = document.getElementById('product8');
  const product8_container = document.getElementById('product8_container');
  
  if (product8 && product8_container) { // Проверка дали елементите се пронајдени
    product8.addEventListener('click', function () {
      product8_container.style.display = 'block';
        document.getElementById('page_mask').style.display = 'block';
    });

  document.getElementById('page_mask').addEventListener('click', function () {
    product8_container.style.display = 'none';
      document.getElementById('page_mask').style.display = 'none';
  }); 

} else {
  console.error("Element not found!");
  }
});

//Koga ke se klikne na bilo koja umetnicka slika vo kategorijata umetnici sliki da se otvore prozorec
document.addEventListener('DOMContentLoaded', function () {
  var product9 = document.getElementById('product9');
  const product9_container = document.getElementById('product9_container');
  
  if (product9 && product9_container) { // Проверка дали елементите се пронајдени
    product9.addEventListener('click', function () {
      product9_container.style.display = 'block';
        document.getElementById('page_mask').style.display = 'block';
    });

  document.getElementById('page_mask').addEventListener('click', function () {
    product9_container.style.display = 'none';
      document.getElementById('page_mask').style.display = 'none';
  }); 

} else {
  console.error("Element not found!");
  }
});

//Koga ke se klikne na bilo koja umetnicka slika vo kategorijata umetnici sliki da se otvore prozorec
document.addEventListener('DOMContentLoaded', function () {
  var product10 = document.getElementById('product10');
  const product10_container = document.getElementById('product10_container');
  
  if (product10 && product10_container) { // Проверка дали елементите се пронајдени
    product10.addEventListener('click', function () {
      product10_container.style.display = 'block';
        document.getElementById('page_mask').style.display = 'block';
    });

  document.getElementById('page_mask').addEventListener('click', function () {
    product10_container.style.display = 'none';
      document.getElementById('page_mask').style.display = 'none';
  }); 

} else {
  console.error("Element not found!");
  }
});

//Koga ke se klikne na bilo koja umetnicka slika vo kategorijata umetnici sliki da se otvore prozorec
document.addEventListener('DOMContentLoaded', function () {
  var product11 = document.getElementById('product11');
  const product11_container = document.getElementById('product11_container');
  
  if (product11 && product11_container) { // Проверка дали елементите се пронајдени
    product11.addEventListener('click', function () {
      product11_container.style.display = 'block';
        document.getElementById('page_mask').style.display = 'block';
    });

  document.getElementById('page_mask').addEventListener('click', function () {
    product11_container.style.display = 'none';
      document.getElementById('page_mask').style.display = 'none';
  }); 

} else {
  console.error("Element not found!");
  }
});

//Koga ke se klikne na bilo koja umetnicka slika vo kategorijata umetnici sliki da se otvore prozorec
document.addEventListener('DOMContentLoaded', function () {
  var product12 = document.getElementById('product12');
  const product12_container = document.getElementById('product12_container');
  
  if (product12 && product12_container) { // Проверка дали елементите се пронајдени
    product12.addEventListener('click', function () {
      product12_container.style.display = 'block';
        document.getElementById('page_mask').style.display = 'block';
    });

  document.getElementById('page_mask').addEventListener('click', function () {
    product12_container.style.display = 'none';
      document.getElementById('page_mask').style.display = 'none';
  }); 

} else {
  console.error("Element not found!");
  }
});




