//Za da moze da se naprave slejd od edna na druga strana - za popup za najava i registracija
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


//Koga ke se klikne na coveceto za najava da se pojave popup-ot
document.addEventListener('DOMContentLoaded', function () {
    var loginBtn = document.getElementById('login_btn');
    const container = document.getElementById('container');
    
    loginBtn.addEventListener('click', function () {
        container.style.display = 'block';
        document.getElementById('page_mask').style.display = 'block';
    });

    document.getElementById('page_mask').addEventListener('click', function () {
        container.style.display = 'none';
        document.getElementById('page_mask').style.display = 'none';
    }); 
});


//Zacuvuvanje na podatoci vo localStorage
// localStorage.clear();
var najava = document.getElementById('najava');
var registracija = document.getElementById('registracija');
var userData_Najava = []; 
var userData_Registracija = [];

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
    var user = { email: email, password: password }; 
    userData_Registracija.push(user); 
    localStorage.setItem("Registracija", JSON.stringify(userData_Registracija)); 
});


$("#logo").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
  });

$("#zanas").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".about_section").offset().top,
      },
      "slow"
    );
  });


$("#toservices").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".services_section").offset().top,
      },
      "slow"
    );
  });



