//Za da moze da se naprave slejd od edna na druga strana - za popup za najava i registracija
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

if(signInButton && signUpButton) {
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
} 


//Koga ke se klikne na coveceto za najava da se pojave popup-ot
document.addEventListener('DOMContentLoaded', function () {
    var loginBtn = document.getElementById('login_btn');
    const container = document.getElementById('container');
    
    if (loginBtn && container) { // Проверка дали елементите се пронајдени
      loginBtn.addEventListener('click', function () {
          container.style.display = 'block';
          document.getElementById('page_mask').style.display = 'block';
      });

    document.getElementById('page_mask').addEventListener('click', function () {
        container.style.display = 'none';
        document.getElementById('page_mask').style.display = 'none';
    }); 

  } else {
    console.error("Element not found!");
    }
});


//Koga ke se klikne na kopcinjata za nas, doma i na logoto da se skrola do stranata na koja e kliknato
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


$("#doma").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".home_section").offset().top,
      },
      "slow"
    );
  });


//Koga ke se klikne na ikonata za najava/registracija ako e nekade dolu na stranata za nas ili doma
//da se kace gore za da moze da se najave
$("#login_btn").click(function () {
    $("html,body").animate(
      {
      scrollTop: 0,
      },
      "slow"
    );
});



//Koga ke kliknam na kopceto registriraj se koe se naogja na strana Doma(Naslovna) da se pokaze page_mask
//i da se skrola do gore kade sto ke se otvori prozorecot za najava
document.addEventListener('DOMContentLoaded', function () {
    var cartBtn = document.getElementById('cart_btn');
    const container = document.getElementById('container');
    
    cartBtn.addEventListener('click', function () {
        container.style.display = 'block';
        document.getElementById('page_mask').style.display = 'block';
    });

    document.getElementById('page_mask').addEventListener('click', function () {
        container.style.display = 'none';
        document.getElementById('page_mask').style.display = 'none';
    }); 

    $("#cart_btn").click(function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        "slow"
      );
    });
});




document.addEventListener('DOMContentLoaded', function () {
  var userData_Najava = JSON.parse(localStorage.getItem("Najava")) || [];
  var userData_Registracija = JSON.parse(localStorage.getItem("Registracija")) || [];

  document.getElementById("form-najava").addEventListener("submit", function(event) {
      event.preventDefault();
      
      var email_najava = document.getElementById('email_najava').value;
      var password_najava = document.getElementById('password_najava').value;
      var name_najava = document.getElementById('name_najava').value;

      var user = { email: email_najava, password: password_najava, name: name_najava }; 

      userData_Najava.push(user); 
      localStorage.setItem("Najava", JSON.stringify(userData_Najava)); 
      localStorage.setItem("lastAction", "najava"); // Зачувување на последната акција

      window.location.href = "doma.html"; // Пренасочи кон профил страницата
  });

  document.getElementById("form-registracija").addEventListener("submit", function(event) {
      event.preventDefault();

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var name = document.getElementById('name').value;

      var user = { email: email, password: password, name: name }; 

      userData_Registracija.push(user); 
      localStorage.setItem("Registracija", JSON.stringify(userData_Registracija)); 
      localStorage.setItem("lastAction", "registracija"); // Зачувување на последната акција

      window.location.href = "doma.html"; // Пренасочи кон профил страницата
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var lastAction = localStorage.getItem("lastAction");
  var userNameElement = document.getElementById("last_registered_user_name");
  var userEmailElement = document.getElementById("email_storage");
  var userPasswordElement = document.getElementById("password_storage");

  if (lastAction === "najava") {
      var storedData_Najava = JSON.parse(localStorage.getItem("Najava")) || [];
      if (storedData_Najava.length > 0) {
          var lastUser = storedData_Najava[storedData_Najava.length - 1];
          userNameElement.textContent = lastUser.name;
          userEmailElement.textContent = lastUser.email;
          userPasswordElement.textContent = lastUser.password;
      } else {
          console.log('Нема зачуван корисник во localStorage.');
      }
  } else if (lastAction === "registracija") {
      var storedData_Registracija = JSON.parse(localStorage.getItem("Registracija")) || [];
      if (storedData_Registracija.length > 0) {
          var lastUser = storedData_Registracija[storedData_Registracija.length - 1];
          userNameElement.textContent = lastUser.name;
          userEmailElement.textContent = lastUser.email;
          userPasswordElement.textContent = lastUser.password;
      } else {
          console.log('Нема зачуван корисник во localStorage.');
      }
  } else {
      console.log('Нема зачувана последна акција.');
  }
});









