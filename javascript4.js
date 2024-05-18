// document.addEventListener('DOMContentLoaded', function() {
//     const questions = document.querySelectorAll('.prashanje');

//     questions.forEach(function(question) {
//         question.addEventListener('click', function() {
//             // Пронајди го одговорот за прашањето
//             const answer = question.querySelector('.odgovor1');

//             // Ако е скриен, прикажи го; во спротивно, скриј го
//             if (answer.style.display === 'none' || !answer.style.display) {
//                 answer.style.display = 'flex';
//             } else {
//                 answer.style.display = 'none';
//             }
//         });
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const questions = document.querySelectorAll('.prashanje');

//     questions.forEach(function(question) {
//         question.addEventListener('click', function() {
//             // Пронајди го одговорот за прашањето
//             const answer = question.nextElementSibling; // Претходниот одговор

//             // Провери дали одговорот е видлив
//             const isVisible = window.getComputedStyle(answer).display !== 'none';

//             // Скриј го сите одговори пред да го прикажеш тековниот
//             questions.forEach(function(q) {
//                 q.nextElementSibling.style.display = 'none';
//             });

//             // Ако одговорот е скриен, прикажи го; во спротивно, скриј го
//             if (!isVisible) {
//                 answer.style.display = 'flex';
//             } else {
//                 answer.style.display = 'none';
//             }
//         });
//     });
// });


