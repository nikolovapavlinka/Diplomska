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
         window.location.href = "naplata.html"; // променете го ова со вистинскиот URL на вашата страница "Нарачки"
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





 document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');
    const paymentStatus = document.getElementById('paymentStatus');

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const cardName = document.getElementById('cardName').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        // Валидација на формата
        if (!cardName || !cardNumber || !expiryDate || !cvv) {
            paymentStatus.textContent = 'Ве молиме пополнете ги сите полиња.';
            paymentStatus.style.color = 'red';
            return;
        }

        // Симулација на процес на наплата
        paymentStatus.textContent = 'Обработување на плаќањето...';
        paymentStatus.style.color = 'blue';

        setTimeout(() => {
            paymentStatus.textContent = 'Плаќањето е успешно!';
            paymentStatus.style.color = 'green';
        }, 2000);
    });
});







