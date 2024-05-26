 
 
 // Функција за филтрирање на производите според внесениот текст
 function filterProducts() {
     var input = document.getElementById('searchInput');
     var filter = input.value.toUpperCase();
     var products = document.getElementsByClassName('product1');

     for (var i = 0; i < products.length; i++) {
         var productName = products[i].getElementsByClassName('product1_name')[0];
         if (productName) {
             var textValue = productName.textContent || productName.innerText;
             if (textValue.toUpperCase().indexOf(filter) > -1) {
                 products[i].style.display = '';
             } else {
                 products[i].style.display = 'none';
             }
         }
     }
 }
 // Додајте event listener за keyup на текст полето
 document.getElementById('searchInput').addEventListener('keyup', filterProducts);



 document.querySelectorAll('.addcart_btn').forEach(function(button) {
     button.addEventListener('click', function() {
         var addToCart = this.closest('.product1_container_info').querySelector('.add_to_cart');
         addToCart.style.display = 'flex';
         setTimeout(function() {
             addToCart.style.display = 'none';
         }, 5000); // Времето во милисекунди, во овој случај 5 секунди
     });
 });



 const products = [
     { naslov: "МОРСКА ПРЕГРАТКА", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ФАЌАЧ НА СОНИШТА", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ЖЕНСКА ГОРДОСТ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "СТАЛАЖА СО ФИОКИ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ФИЛЏАНИ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "УКРАСНИ ЧИНИИ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "СЛАТКА ЉУБОВ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ЉУБОВ КОН СЕБЕ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ЦРЕША", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "НОСТАЛГИЈА", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "КОРАЛ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "СВЕЌА ШИШАРКА", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ШПАНСКА УБАВИЦА", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ЖЕНСКА ГРАЦИОЗНОСТ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ЦВЕТНА МЕСЕЧИНА", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ТАШНИЧКА ЗА СЛУШАЛКИ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ДРВЕНА РАМКА ЗА СЛИКИ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ПОЛИЦИ ЗА УКРАСИ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ЦВЕТНА УБАВИНА", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ЕМОЦИИ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "СПОМЕНИ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "УКРАСНИ КУТИИ ЗА ПОКЛОН", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ДЕКОРАТИВНО ШИШЕ ЗА ВИНО", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "БУКЕТ ДЕКОРАТИВНИ ЦВЕТОВИ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "НЕБЕСКА СИМФОНИЈА", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ЕДНОСТАВЕН ДОПИР", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "МУЗИЧКИ ПРСТЕН", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "ЦВЕТНА ДЕКОРАЦИЈА", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "СЕНКА", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "НОВОГОДИШНИ ЕЛКИ", dostapno: Math.floor(Math.random() * 50) },
     { naslov: "БОЕН ПОРТРЕТ", dostapno: Math.floor(Math.random() * 50) }
 ];
 localStorage.setItem('Zaliha na proizvodi', JSON.stringify(products));


document.addEventListener("DOMContentLoaded", function() {
    const products_zaliha = JSON.parse(localStorage.getItem('Zaliha na proizvodi'));

    function checkAvailability($input) {
        const productName = $input.closest('.product1_container_info').querySelector('.art_name').textContent.trim();
        const product = products_zaliha.find(p => p.naslov === productName);

        if (product) {
            const count = parseInt($input.value);
            if (count > product.dostapno) {
                alert(`Нема доволно производи на залиха. Достапно: ${product.dostapno}`);
                $input.value = product.dostapno;
            }
        }
    }

    function updateStatus() {
        $('.product1_container_info').each(function() {
            const productName = $(this).find('.art_name').text().trim();
            const product = products_zaliha.find(p => p.naslov === productName);

            if (product) {
                const statusElement1 = $(this).find('.product1_status1 span');
                
                if (product.dostapno === 0) {
                    statusElement1.text('Недостапно');
                } else {
                    statusElement1.text('Достапно');
                }
            }
        }); 

        $('.product1').each(function() {
            const productName1 = $(this).find('.product1_name').text().trim();
            const product1 = products_zaliha.find(p => p.naslov === productName1);

            if (product1) {
                const statusElement2 = $(this).find('.product1_status span');
                
                if (product1.dostapno === 0) {
                    statusElement2.text('Недостапно');
                } else {
                    statusElement2.text('Достапно');
                }
            }
        }); 
    }

    document.querySelectorAll('input').forEach(inputElement => {
        inputElement.addEventListener('input', function() {
            checkAvailability(this);
        });
    });

    updateStatus();

    // Прочитај ги податоците од localStorage и ажурирај ги статусите
    const products_zaliha_data = JSON.parse(localStorage.getItem('Zaliha na proizvodi'));

    document.querySelectorAll('.product1_container_info').forEach(productElement => {
        const nameElement = productElement.querySelector('.art_name');
        const statusElement = productElement.querySelector('.product1_status1 span');

        if (nameElement && statusElement) {
            const productName = nameElement.innerText.trim();
            const product = products_zaliha_data.find(p => p.naslov === productName);

            if (product) {
                statusElement.innerText = `Достапно: ${product.dostapno}`;
            }
        }
    });
});
















