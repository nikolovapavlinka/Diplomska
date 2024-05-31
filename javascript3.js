// Клик на копчето "Додади во кошничка"
document.addEventListener("DOMContentLoaded", function() {
    var addToCartBtns = document.querySelectorAll(".addcart_btn");
    addToCartBtns.forEach(function(addToCartBtn) {
        addToCartBtn.addEventListener("click", function() {
            var productName = this.parentNode.parentNode.parentNode.querySelector('.art_name').textContent;
            var productPrice = this.parentNode.parentNode.querySelector('.product1_price1 span').textContent;
            var productQuantity = this.parentNode.querySelector('.number input').value;
            addToCart(productName, productPrice, productQuantity);
            //window.location.href = "kosnicka.html"; // Префрлете на страницата за кошничка
        });
    });

    // Зачувајте информации во localStorage
    function addToCart(productName, productPrice, productQuantity) {
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        var storedData_Registracija = JSON.parse(localStorage.getItem("Registracija")) || [];
        var user = storedData_Registracija[storedData_Registracija.length - 1];
        cartItems.push({productName: productName, productPrice: productPrice, productQuantity: productQuantity, user: user});
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        displayCart();
    }


    function displayCart() {
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        var productList_Name = document.getElementById("productList_Name");
        var productList_Price = document.getElementById("productList_Price");
        var productList_Quantity = document.getElementById("productList_Quantity");
        var productList_Remove = document.getElementById("productList_Remove");
        var totalAmount = document.getElementById("totalAmount");

        productList_Name.innerHTML = '';
        productList_Price.innerHTML = '';
        productList_Quantity.innerHTML = '';
        productList_Remove.innerHTML = '';
        totalAmount.textContent = '0';

        var total = 0;

        cartItems.forEach(function(item, index) {
            var listItem_Name = document.createElement("li");
            var listItem_Price = document.createElement("li");
            var listItem_Quantity = document.createElement("li");
            var listItem_Remove = document.createElement("li");
            var deleteBtn = document.createElement("button");

            listItem_Name.textContent = item.productName;
            listItem_Price.textContent = item.productPrice;
            listItem_Quantity.textContent = item.productQuantity;
            deleteBtn.textContent = "X";
            deleteBtn.setAttribute('data-index', index);
            deleteBtn.addEventListener('click', function() {
                removeFromCart(index);
            });

            productList_Name.appendChild(listItem_Name);
            productList_Price.appendChild(listItem_Price);
            productList_Quantity.appendChild(listItem_Quantity);
            listItem_Remove.appendChild(deleteBtn);
            productList_Remove.appendChild(listItem_Remove);

            total += item.productPrice * item.productQuantity;
        });

        totalAmount.textContent = total.toFixed(2);
    }

    function removeFromCart(index) {
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.splice(index, 1); // Remove the item at the given index
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        displayCart(); // Refresh the displayed cart items
    }

    displayCart(); // Display cart items on page load
});



document.addEventListener("DOMContentLoaded", function() {
    var logoutBtn = document.querySelector(".option:last-child"); // Селектор за последното копче "Одјави се"
    logoutBtn.addEventListener("click", function() {
        var cartItems = JSON.parse(localStorage.getItem("cartItems"));
        cartItems = [];
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });
  });



function showRoles1() {
    var commentsProducts1 = document.querySelector('.comments_products1');
    if (commentsProducts1.style.display === "none") {
        commentsProducts1.style.display = "flex";
    } else {
        commentsProducts1.style.display = "none";
    }
}


function showRoles2() {
    var commentsProducts2 = document.querySelector('.comments_products2');
    if (commentsProducts2.style.display === "none") {
        commentsProducts2.style.display = "flex";
    } else {
        commentsProducts2.style.display = "none";
    }
}

function showRoles3() {
    var commentsProducts3 = document.querySelector('.comments_products3');
    if (commentsProducts3.style.display === "none") {
        commentsProducts3.style.display = "flex";
    } else {
        commentsProducts3.style.display = "none";
    }
}

function showRoles4() {
    var commentsProducts4 = document.querySelector('.comments_products4');
    if (commentsProducts4.style.display === "none") {
        commentsProducts4.style.display = "flex";
    } else {
        commentsProducts4.style.display = "none";
    }
}

function showRoles5() {
    var commentsProducts5 = document.querySelector('.comments_products5');
    if (commentsProducts5.style.display === "none") {
        commentsProducts5.style.display = "flex";
    } else {
        commentsProducts5.style.display = "none";
    }
}

function showRoles6() {
    var commentsProducts6 = document.querySelector('.comments_products6');
    if (commentsProducts6.style.display === "none") {
        commentsProducts6.style.display = "flex";
    } else {
        commentsProducts6.style.display = "none";
    }
}


//Imeto od registracijata se dodava na stranata profile.html od levata strana
document.addEventListener('DOMContentLoaded', function () {
    // Кодот за читање на последниот регистриран корисник и додавање на неговото име во спан елементот
    var storedData_Registracija = JSON.parse(localStorage.getItem("Registracija")) || [];
    var userNameElement = document.getElementById("najaven_korisnik");
  
    if (storedData_Registracija.length > 0) {
        var lastRegisteredUser = storedData_Registracija[storedData_Registracija.length - 1];
        userNameElement.textContent = lastRegisteredUser.name;
    } else {
        console.log('Нема зачуван регистриран корисник во localStorage.');
    }
  });



// Da se dodade komentar od desnata strana na stranata komentari.html
$(document).ready(function() {
    // Читање на последниот регистриран корисник и поставување на неговото име
    var storedData_Registracija = JSON.parse(localStorage.getItem("Registracija")) || [];
    var userName = "";

    if (storedData_Registracija.length > 0) {
        var lastRegisteredUser = storedData_Registracija[storedData_Registracija.length - 1];
        userName = lastRegisteredUser.name;
    } else {
        console.log('Нема зачуван регистриран корисник во localStorage.');
    }

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari1').prepend(newComment);
    });
    
    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari2').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari3').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari4').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari5').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari6').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari7').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari8').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari9').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari10').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari11').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari12').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari13').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari14').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari15').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari16').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari17').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari18').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari19').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari20').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari21').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari22').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari23').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari24').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari25').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari26').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari27').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari28').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari29').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari30').prepend(newComment);
    });

    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar my-comment"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                                <div class="komentar_ocenka"> \
                                    <div class="ocenka_naslov">Оценка:<br> ' + rating + '</div> \
                                </div> \
                            </div> \
                            <div class="line my-comment"></div>';
    
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari31').prepend(newComment);
    });
});


function showCategory1() {
    $('.site_komentari').hide();
    $('.site_komentari1').show();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();

    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').show();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory2() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').show();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();

    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').show();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory3() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').show();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();

    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').show();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory4() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').show();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentari16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();

    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').show();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory5() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').show();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentari16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();

    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').show();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory6() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').show();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentari16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();

    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').show();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory7() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').show();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentari16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();

    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').show();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory8() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').show();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentari16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();

    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').show();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory9() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').show();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentari16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();

    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').show();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory10() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').show();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentari16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();

    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').show();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory11() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').show();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentari16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();

    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').show();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory12() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').show();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentari16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();

    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').show();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory13() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').show();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentari16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').show();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory14() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').show();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').show();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory15() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').show();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').show();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory16() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentari16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').show();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}
  
function showCategory17() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').show();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').show();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory18() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').show();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory19() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').show();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').show();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory20() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').show();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').show();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory21() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').show();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory22() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').show();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').show();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory23() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').show();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory24() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').show();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').show();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory25() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').show();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').show();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory26() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').show();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory27() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').show();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory28() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').show();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory29() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').show();
    $('.site_komentari30').hide();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').show();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory30() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').show();
    $('.site_komentari31').hide();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').show();
    $('.all_comments_title31 p').hide();

    $('.my-comment').hide();
}

function showCategory31() {
    $('.site_komentari').hide();
    $('.site_komentari1').hide();
    $('.site_komentari2').hide();
    $('.site_komentari3').hide();
    $('.site_komentari4').hide();
    $('.site_komentari5').hide();
    $('.site_komentari6').hide();
    $('.site_komentari7').hide();
    $('.site_komentari8').hide();
    $('.site_komentari9').hide();
    $('.site_komentari10').hide();
    $('.site_komentari11').hide();
    $('.site_komentari12').hide();
    $('.site_komentari13').hide();
    $('.site_komentari14').hide();
    $('.site_komentari15').hide();
    $('.site_komentar16').hide();
    $('.site_komentari17').hide();
    $('.site_komentari18').hide();
    $('.site_komentari19').hide();
    $('.site_komentari20').hide();
    $('.site_komentari21').hide();
    $('.site_komentari22').hide();
    $('.site_komentari23').hide();
    $('.site_komentari24').hide();
    $('.site_komentari25').hide();
    $('.site_komentari26').hide();
    $('.site_komentari27').hide();
    $('.site_komentari28').hide();
    $('.site_komentari29').hide();
    $('.site_komentari30').hide();
    $('.site_komentari31').show();


    $('.all_comments_title p').hide();
    $('.all_comments_title1 p').hide();
    $('.all_comments_title2 p').hide();
    $('.all_comments_title3 p').hide();
    $('.all_comments_title4 p').hide();
    $('.all_comments_title5 p').hide();
    $('.all_comments_title6 p').hide();
    $('.all_comments_title7 p').hide();
    $('.all_comments_title8 p').hide();
    $('.all_comments_title9 p').hide();
    $('.all_comments_title10 p').hide();
    $('.all_comments_title11 p').hide();
    $('.all_comments_title12 p').hide();
    $('.all_comments_title13 p').hide();
    $('.all_comments_title14 p').hide();
    $('.all_comments_title15 p').hide();
    $('.all_comments_title16 p').hide();
    $('.all_comments_title17 p').hide();
    $('.all_comments_title18 p').hide();
    $('.all_comments_title19 p').hide();
    $('.all_comments_title20 p').hide();
    $('.all_comments_title21 p').hide();
    $('.all_comments_title22 p').hide();
    $('.all_comments_title23 p').hide();
    $('.all_comments_title24 p').hide();
    $('.all_comments_title25 p').hide();
    $('.all_comments_title26 p').hide();
    $('.all_comments_title27 p').hide();
    $('.all_comments_title28 p').hide();
    $('.all_comments_title29 p').hide();
    $('.all_comments_title30 p').hide();
    $('.all_comments_title31 p').show();

    $('.my-comment').hide();
}


// Da se dodade komentar od desnata strana na stranata komentari.html
$(document).ready(function() {
    // Читање на последниот регистриран корисник и поставување на неговото име
    var storedData_Registracija = JSON.parse(localStorage.getItem("Registracija")) || [];
    var userName = "";

    if (storedData_Registracija.length > 0) {
        var lastRegisteredUser = storedData_Registracija[storedData_Registracija.length - 1];
        userName = lastRegisteredUser.name;
    } else {
        console.log('Нема зачуван регистриран корисник во localStorage.');
    }


    $('#add_comment').click(function() {
        // Земи ги вредностите на коментарот, оценката и сликата
        var commentText = $('#komentar').val();
        //var rating = $('#ocenka').val();
        var userImage = $('.komentar_slika1 > img').attr('src');
        
        // Креирајте нов елемент за коментарот со корисничкото име
        var newComment = '<div class="komentar"> \
                                <div class="komentar_slika"><img src="' + userImage + '" alt=""></div> \
                                <div class="komentar_profil"> \
                                    <div class="korisnik">' + userName + '</div> \
                                    <div class="korisnik_komentar">' + commentText + '</div> \
                                </div> \
                            </div> \
                            <div class="line2"></div>';
        
        // Додадете го новиот коментар на почетокот на сите коментари
        $('.site_komentari_prashanja').prepend(newComment);
    });
});



const userInput = document.querySelector(".user_input");
const sendBtn = document.querySelector(".send_btn");
const chatbox = document.querySelector(".chat_text");

let userMessage;

const createChatLi = (message, className) => {
  
  const chatLi = document.createElement("li");

  chatLi.classList.add("msg", className);

  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p><span class="material-symbols-outlined usergen covek2">person</span>`
      : `<p>${message}</p><span class="material-symbols-outlined robot2">smart_toy</span>`;
  chatLi.innerHTML = chatContent;

  return chatLi;
};

const handleClick = () => {
  
  const userMessage = userInput.value.trim().toLowerCase();

  if (!userMessage) return;

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  console.log(userMessage);

  setTimeout(() => {
    chatbox.appendChild(createChatLi("Хммм...", "incoming"));
  }, 600);

  let found = false;

  if (userMessage.includes("цена")) {
    setTimeout(() => {
      chatbox.appendChild(createChatLi("Цените на сите прозиводи можете да ги погледнете во делот „Производи“.", "incoming"));
    }, 600);
    found = true;
  }


  if (userMessage.includes("нарачам") || userMessage.includes("нарачка") || userMessage.includes("нарачки")){
    setTimeout(() => {
      chatbox.appendChild(createChatLi("Производите можете да ги нарачате така што во делот „Производи“ ќе го најдете производот што сакате да го нарачате во соодветната категорија и ќе го додадете во кошничка. Од десната страна на менито ви се наоѓа кошничката и таму може да извршите нарачка. "));
    }, 600);
    setTimeout(() => {
        chatbox.appendChild(createChatLi("Извршените нарачки можете да ги погледнете во делот „Нарачки“"));
      }, 600);
      found = true;
  }

  if (userMessage.includes("категории") || userMessage.includes("видови")) {
    setTimeout(() => {
      chatbox.appendChild(
        createChatLi("Во делот „Производи можете да ги видете сите категории кои ние ги нудиме.")
      );
    }, 600);
    found = true;
  }

  if (userMessage.includes("држави") || userMessage.includes("места") || userMessage.includes("место")) {
    setTimeout(() => {
      chatbox.appendChild(
        createChatLi("Производи можат да се нарачуваат само на територија на Македонија")
      );
    }, 600);
    found = true;
  }

  if (userMessage.includes("помотивни") || userMessage.includes("понуди")) {
    setTimeout(() => {
      chatbox.appendChild(
        createChatLi("Во моментот нема никакви промотивни понуди!")
      );
    }, 600);
    found = true;
  }

  if (userMessage.includes("контакт") || userMessage.includes("телефон") || userMessage.includes("број")) {
    setTimeout(() => {
      chatbox.appendChild(
        createChatLi("Наш контакт и други информации може да најдете на страната „Дома“ во последниот дел од страната, во делот ИНФОРМАЦИИ.")
      );
    }, 600);
    found = true;
  }

  if (userMessage.includes("плаќање") || userMessage.includes("наплата") || userMessage.includes("платам")  || userMessage.includes("картичка")) {
    setTimeout(() => {
      chatbox.appendChild(
        createChatLi("Плаќањето може да се изврши со било која кредитна картичка која ја поседувате.")
      );
    }, 600);
    found = true;
  }

  if (!found) {
    setTimeout(() => {
        chatbox.appendChild(createChatLi("Извинете, не можам да одговорам на тоа прашање. Ве молим Вашето прашање оставете го во делот „Постави прашања“ и нашиот тим ќе Ви одговори во најбрз можен рок.", "incoming"));
    }, 600);
    
}
};

sendBtn.addEventListener("click", handleClick);



const chatbot = document.querySelector('.chatbot');
const chatSection = document.querySelector('.chat_section');
const pageMask = document.querySelector('.page_mask');

chatbot.addEventListener('click', function() {
    // Check if chatSection is currently displayed
    if (chatSection.style.display === 'block') {
        // Hide chatSection and pageMask
        chatSection.style.display = 'none';
        pageMask.style.display = 'none';
    } else {
        // Show chatSection and pageMask
        chatSection.style.display = 'block';
        pageMask.style.display = 'block';
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.prashanje');

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            // Пронајди го одговорот за прашањето
            const answer = question.nextElementSibling; // Претходниот одговор

            // Провери дали одговорот е видлив
            const isVisible = window.getComputedStyle(answer).display !== 'none';

            // Скриј го сите одговори пред да го прикажеш тековниот
            questions.forEach(function(q) {
                q.nextElementSibling.style.display = 'none';
            });

            // Ако одговорот е скриен, прикажи го; во спротивно, скриј го
            if (!isVisible) {
                answer.style.display = 'flex';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});



