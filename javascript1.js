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
  
  
  $(".logo").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
  });

 
  
  
  



