function toProducts() {
  window.location.href = "proizvodi.html"
}  

function toArtists() {
  window.location.href = "umetnici.html"
}

function toHome() {
  window.location.href = "doma.html"
}

function toAboutUs() {
  window.location.href = "zanas.html"
}

function toOrders() {
  window.location.href = "naracki.html"
}

function toComments() {
  window.location.href = "komentari.html"
}

function toQuestions() {
  window.location.href = "prasanja.html"
}

function toShoppingCart() {
  window.location.href = "kosnicka.html"
}

function toProfile() {
  window.location.href = "profil.html"
}

function toCoverPage() {
  window.location.href = "index.html"
}

function toCategory_Umetnicki_sliki() {
  window.location.href = "kategorija_umetnicki_sliki.html"
}

function toCategory_Skulpturi() {
  window.location.href = "kategorija_skulpturi.html"
}

function toCategory_Racno_Izraboteni_Predmeti() {
  window.location.href = "kategorija_racno_izraboteni_predmeti.html"
}

function toCategory_Unikaten_nakit() {
  window.location.href = "kategorija_unikaten_nakit.html"
}

function toCategory_Dekoracii() {
  window.location.href = "kategorija_dekoracii.html"
}

function toCategory_Predmeti_izraboteni_od_drvo() {
  window.location.href = "kategorija_predmeti_izraboteni_od_drvo.html"
}

//Brojac na plus se zgolemuva na - se namaluva 
$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

//Koga ke kliknam na ikonata za user da mi se otvore prozorce kade ke ima Profil i Odjavi se,
//se zatvara i otvara koga ke kliknis na ikonata i koga ke kliknis nekade na strana
document.addEventListener('DOMContentLoaded', function () {
  var menuIcon = document.getElementById('user_profile');
  var menu = document.getElementById('optionsSelect');

  // Отворање на мени кога се кликне на иконата
  menuIcon.addEventListener('click', function () {
      menu.classList.toggle('show'); // Додај или отстрани класа за прикажување на менито
  });

  // Затворање на мени кога се кликне надвор од него
  document.addEventListener('click', function (event) {
      var isClickInsideMenu = menu.contains(event.target);
      var isClickOnMenuIcon = menuIcon.contains(event.target);

      if (!isClickInsideMenu && !isClickOnMenuIcon) {
          menu.classList.remove('show'); // Скрие мени кога корисникот кликне надвор од него
      }
  });
});



//Od profile.html se vnesuvaat podatoci, ostanatite dopolnitelni informacii
var userData_Informacii = JSON.parse(localStorage.getItem("Informacii")) || [];
var potvrdiBtn = document.getElementById("potvrdi_btn");
potvrdiBtn.addEventListener("click", function() {
  var gender = document.getElementById('gender').value;
  var mobile_phone = document.getElementById('mobile_phone').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;

  var user = { gender: gender, mobile_phone: mobile_phone, address: address, city: city }; 

  userData_Informacii.push(user); 
  localStorage.setItem("Informacii", JSON.stringify(userData_Informacii)); 
});



//Imeto od registracijata se dodava na stranata profile.html od levata strana
document.addEventListener('DOMContentLoaded', function () {
  // Кодот за читање на последниот регистриран корисник и додавање на неговото име во спан елементот
  var storedData_Registracija = JSON.parse(localStorage.getItem("Registracija")) || [];
  var userNameElement = document.getElementById("last_registered_user_name");

  if (storedData_Registracija.length > 0) {
      var lastRegisteredUser = storedData_Registracija[storedData_Registracija.length - 1];
      userNameElement.textContent = lastRegisteredUser.name;
  } else {
      console.log('Нема зачуван регистриран корисник во localStorage.');
  }
});



//Emailot od registracijata se dodava na stranata profile.html od desnata strana
document.addEventListener('DOMContentLoaded', function () {
  // Кодот за читање на последниот регистриран корисник и додавање на неговото име во спан елементот
  var storedData_Registracija = JSON.parse(localStorage.getItem("Registracija")) || [];
  var userEmailElement = document.getElementById("email_storage");

  if (storedData_Registracija.length > 0) {
      var lastEmailUser = storedData_Registracija[storedData_Registracija.length - 1];
      userEmailElement.textContent = lastEmailUser.email;
  } else {
      console.log('Нема зачуван регистриран корисник во localStorage.');
  }
});

//Lozinkata od registracijata se dodava na stranata profile.html od desnata strana
document.addEventListener('DOMContentLoaded', function () {
  // Кодот за читање на последниот регистриран корисник и додавање на неговото име во спан елементот
  var storedData_Registracija = JSON.parse(localStorage.getItem("Registracija")) || [];
  var userPasswordElement = document.getElementById("password_storage");

  if (storedData_Registracija.length > 0) {
      var lastPasswrodUser = storedData_Registracija[storedData_Registracija.length - 1];
      userPasswordElement.textContent = lastPasswrodUser.password;
  } else {
      console.log('Нема зачуван регистриран корисник во localStorage.');
  }
});


//Koga ke kliknam na ikonata za user da mi se otvore prozorce kade ke ima Profil i Odjavi se,
//se zatvara i otvara koga ke kliknis na ikonata i koga ke kliknis nekade na strana
document.addEventListener('DOMContentLoaded', function () {
  var menuIcon = document.getElementById('user_profile');
  var menu = document.getElementById('optionsSelect');

  // Отворање на мени кога се кликне на иконата
  menuIcon.addEventListener('click', function () {
      menu.classList.toggle('show'); // Додај или отстрани класа за прикажување на менито
  });

  // Затворање на мени кога се кликне надвор од него
  document.addEventListener('click', function (event) {
      var isClickInsideMenu = menu.contains(event.target);
      var isClickOnMenuIcon = menuIcon.contains(event.target);

      if (!isClickInsideMenu && !isClickOnMenuIcon) {
          menu.classList.remove('show'); // Скрие мени кога корисникот кликне надвор од него
      }
  });
});



var potvrdiBtn = document.getElementById("potvrdi_btn");
var potvrdiDiv = document.getElementById("potvrdiDiv");

potvrdiBtn.addEventListener("click", function() {
  potvrdiDiv.style.display = "flex";
  setTimeout(function() {
    potvrdiDiv.style.display = "none";
  }, 10000);
});




//Vnesuvanje informacii vo localStorage od najava i registracija
//localStorage.clear();
var userData_Najava = JSON.parse(localStorage.getItem("Najava")) || [];
var userData_Registracija = JSON.parse(localStorage.getItem("Registracija")) || [];

najava.addEventListener("click", function() {
    var email_najava = document.getElementById('email_najava').value;
    var password_najava = document.getElementById('password_najava').value;

    var user = { email: email_najava, password: password_najava }; 
 
    userData_Najava.push(user); 
    localStorage.setItem("Najava", JSON.stringify(userData_Najava)); 
});

registracija.addEventListener("click", function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;

    var user = { email: email, password: password, name: name }; 

    userData_Registracija.push(user); 
    localStorage.setItem("Registracija", JSON.stringify(userData_Registracija)); 
});




  
  $(".logo").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
  });

 
  
  
  



