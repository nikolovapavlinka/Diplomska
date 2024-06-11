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

        // Пренасочи кон страницата Наплата (доколку е потребно)
        window.location.href = "naplata.html"; // променете го ова со вистинскиот URL на вашата страница "Наплата"
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const payButton1 = document.querySelector("#pay_btnn");

    payButton1.addEventListener("click", function() {
        // Пренасочи кон страницата Нарачки (доколку е потребно)
        //window.location.href = "naracki.html"; // променете го ова со вистинскиот URL на вашата страница "Нарачки"
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


var logoutBtn = document.querySelector(".option:last-child"); // Селектор за копчето "Одјави се"
                logoutBtn.addEventListener("click", function() {
                    // Избриши ги сите ставки од листите
                    var idNarackaList = document.getElementById("id_naracka_list");
                    idNarackaList.innerHTML = ""; // Ги избриши сите ставки од листата
            
                    var narackaKorisnikList = document.getElementById("naracka_korisnik_list");
                    narackaKorisnikList.innerHTML = ""; // Ги избриши сите ставки од листата
            
                    var vkupnaCenaList = document.getElementById("vkupna_cena_list");
                    vkupnaCenaList.innerHTML = ""; // Ги избриши сите ставки од листата
            
                    // Избриши ги податоците од localStorage
                    localStorage.removeItem("totalAmount");
                    localStorage.removeItem("orderId");
                    localStorage.removeItem("userName");
                });



document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');
    const paymentStatus = document.getElementById('paymentStatus');

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const cardName = document.getElementById('cardName').value;
        const cardNumber = document.getElementById('cardNumber').value.replace(/\s+/g, '');
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        // Преземи ги елементите за прикажување на пораки за грешка
        const cardNumberError = document.getElementById('cardNumberError');
        const expiryDateError = document.getElementById('expiryDateError');
        const cvvError = document.getElementById('cvvError');

        // Променливи за следење на валидноста
        let isValid = true;

        // Ресетирај ги пораките за грешка и класите
        cardNumberError.textContent = '';
        expiryDateError.textContent = '';
        cvvError.textContent = '';
        document.getElementById('cardNumber').classList.remove('invalid');
        document.getElementById('expiryDate').classList.remove('invalid');
        document.getElementById('cvv').classList.remove('invalid');

        // Валидација на број на картичка
        if (!/^\d{16}$/.test(cardNumber)) {
            cardNumberError.textContent = 'Бројот на картичката мора да содржи 16 цифри.';
            cardNumberError.style.display = 'block';
            document.getElementById('cardNumber').classList.add('invalid');
            isValid = false;
        }

        // Валидација на датум на истекување
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
            expiryDateError.textContent = 'Датумот на истекување мора да биде во формат MM/YY.';
            expiryDateError.style.display = 'block';
            document.getElementById('expiryDate').classList.add('invalid');
            isValid = false;
        }

        // Валидација на CVV
        if (!/^\d{3}$/.test(cvv)) {
            cvvError.textContent = 'CVV мора да содржи 3 цифри.';
            cvvError.style.display = 'block';
            document.getElementById('cvv').classList.add('invalid');
            isValid = false;
        }

        // Ако сите полиња се валидни, може да се продолжи со поднесување на формуларот
        if (isValid) {
            // Симулација на процес на наплата
            paymentStatus.textContent = 'Обработување на плаќањето...';
            paymentStatus.style.color = 'blue';

            setTimeout(() => {
                paymentStatus.textContent = 'Плаќањето е успешно!';
                paymentStatus.style.color = 'green';
            }, 2000);
        }
    });
});

document.getElementById('cardNumber').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = value.match(/.{1,4}/g);
    if (formattedValue) {
        e.target.value = formattedValue.join(' ');
    }
});

document.getElementById('expiryDate').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (value.length >= 2) {
        e.target.value = value.substring(0, 2) + '/' + value.substring(2, 4);
    } else {
        e.target.value = value;
    }
});




            
             
        
            




