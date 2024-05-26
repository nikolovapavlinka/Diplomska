/*
document.addEventListener("DOMContentLoaded", function() {
    const addCommentBtn = document.getElementById("add_comment");

    addCommentBtn.addEventListener("click", function() {
        const username = document.getElementById("najaven_korisnik").textContent;
        const commentText = document.getElementById("komentar").value;
        const rating = document.getElementById("ocenka").value;

        if (username && commentText && rating) {
            addComment(username, commentText, rating);
        }
    });

    function addComment(username, commentText, rating) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        const newComment = {
            username: username,
            commentText: commentText,
            rating: rating,
            artPiece: "МОРСКА ПРЕГРАТКА" // или променете го ова ако имате различни уметнички дела
        };

        comments.push(newComment);
        localStorage.setItem("comments", JSON.stringify(comments));

        displayComments();
    }

    function displayComments() {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        const siteKomentari1 = document.querySelector(".site_komentari1");
        const siteKomentari2 = document.querySelector(".site_komentari2");

        //siteKomentari1.innerHTML = '';
        //siteKomentari2.innerHTML = '';

        comments.forEach(function(comment) {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("komentar");

            const commentHTML = `
                <div class="komentar_slika"><img src="icons/user_white.png" alt=""></div>
                <div class="komentar_profil">
                    <div class="korisnik">${comment.username}</div>
                    <div class="korisnik_komentar">${comment.commentText}</div>
                </div>
                <div class="komentar_ocenka">
                    <div class="ocenka_naslov">Оценка:<br> ${comment.rating}</div>
                </div>
            `;

            commentDiv.innerHTML = commentHTML;

            if (comment.artPiece === "МОРСКА ПРЕГРАТКА") {
                siteKomentari1.appendChild(commentDiv);
            } else if (comment.artPiece === "ЉУБОВ КОН СЕБЕ") {
                siteKomentari2.appendChild(commentDiv);
            }

            const lineDiv = document.createElement("div");
            lineDiv.classList.add("line");

            if (comment.artPiece === "МОРСКА ПРЕГРАТКА") {
                siteKomentari1.appendChild(lineDiv);
            } else if (comment.artPiece === "ЉУБОВ КОН СЕБЕ") {
                siteKomentari2.appendChild(lineDiv);
            }
        });
    }

    displayComments(); // Display comments on page load
});
*/

/*
document.addEventListener("DOMContentLoaded", function() {
    const addCommentBtn = document.getElementById("add_comment");

    addCommentBtn.addEventListener("click", function() {
        const artId = document.querySelector(".ostavi_komentar").getAttribute("data-art-id");
        const username = document.getElementById("najaven_korisnik").textContent;
        const commentText = document.getElementById("komentar").value;
        const rating = document.getElementById("ocenka").value;

        if (username && commentText && rating) {
            addComment(artId, username, commentText, rating);
        }
    });

    function addComment(artId, username, commentText, rating) {
        const comments = JSON.parse(localStorage.getItem(`comments_${artId}`)) || [];
        const newComment = {
            username: username,
            commentText: commentText,
            rating: rating
        };

        comments.push(newComment);
        localStorage.setItem(`comments_${artId}`, JSON.stringify(comments));

        displayComments(artId);
    }

    function displayComments(artId) {
        const comments = JSON.parse(localStorage.getItem(`comments_${artId}`)) || [];
        const siteKomentari = document.getElementById(`site_komentari_${artId}`);

        siteKomentari.innerHTML = '';

        comments.forEach(function(comment) {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("komентар");

            const commentHTML = `
                <div class="komентар_slika"><img src="icons/user_white.png" alt=""></div>
                <div class="komентар_profil">
                    <div class="korisnik">${comment.username}</div>
                    <div class="korисник_komентар">${comment.commentText}</div>
                </div>
                <div class="komентар_ocенка">
                    <div class="ocенка_nasлов">Оценка:<br> ${comment.rating}</div>
                </div>
            `;

            commentDiv.innerHTML = commentHTML;
            siteKomentari.appendChild(commentDiv);

            const lineDiv = document.createElement("div");
            lineDiv.classList.add("line");
            siteKomentari.appendChild(lineDiv);
        });
    }

    function displayAllComments() {
        for (let i = 1; i <= 31; i++) {
            displayComments(i);
        }
    }

    displayAllComments(); // Display comments for all sections on page load
});
*/



// document.addEventListener("DOMContentLoaded", function() {
//     const payButton = document.querySelector(".kosnicka_pay_btn");
    
//     payButton.addEventListener("click", function() {
//         const totalAmount = document.getElementById("totalAmount").textContent;
        
//         // Зачувај ја вкупната цена во localStorage
//         localStorage.setItem("totalAmount", totalAmount);

//         // Пренасочи кон страницата Нарачки (доколку е потребно)
//         window.location.href = "naracki.html"; // променете го ова со вистинскиот URL на вашата страница "Нарачки"
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const vkupnaCenaList = document.getElementById("vkupna_cena_list");
//     const totalAmount = localStorage.getItem("totalAmount");

//     if (totalAmount) {
//         const li = document.createElement("li");
//         li.textContent = `Вкупна цена: ${totalAmount} МКД`;
//         vkupnaCenaList.appendChild(li);

//         // По додавањето на вкупната цена, можете да ја избришете од localStorage ако не сакате да се зачувува подолго време
//         // localStorage.removeItem("totalAmount");
//     }
// });






