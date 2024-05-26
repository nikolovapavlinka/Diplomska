document.addEventListener("DOMContentLoaded", function() {
     const payButton = document.querySelector(".kosnicka_pay_btn");
  
     payButton.addEventListener("click", function() {
        const totalAmount = document.getElementById("totalAmount").textContent;
        const orderId = Math.floor(Math.random() * 1000) + 1;
        
         // Зачувај ја вкупната цена во localStorage
         localStorage.setItem("totalAmount", totalAmount);
         localStorage.setItem("orderId", orderId);

         const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
                if (cartItems.length > 0) {
                    const user = cartItems[0].user; // Претпоставуваме дека сите ставки имаат ист корисник
                    localStorage.setItem("userName", user.name); // Претпоставуваме дека корисникот има својство 'username'
                }

         // Пренасочи кон страницата Нарачки (доколку е потребно)
         window.location.href = "naracki.html"; // променете го ова со вистинскиот URL на вашата страница "Нарачки"
     });
 });

 document.addEventListener("DOMContentLoaded", function() {
     const vkupnaCenaList = document.getElementById("vkupna_cena_list");
     const idList = document.getElementById("id_naracka_list");
     const narackaKorisnikList = document.getElementById("naracka_korisnik_list");

     const totalAmount = localStorage.getItem("totalAmount");
     const orderId = localStorage.getItem("orderId");
     const userName = localStorage.getItem("userName");

     if (totalAmount) {
         const li = document.createElement("li");
         li.textContent = `${totalAmount} МКД`;
         vkupnaCenaList.appendChild(li);
     }

     if (orderId) {
        const li = document.createElement("li");
        li.textContent = `${orderId}`;
        idList.appendChild(li);
     }

     if (userName) {
        const li = document.createElement("li");
        li.textContent = `${userName}`;
        narackaKorisnikList.appendChild(li);
    }
 });






