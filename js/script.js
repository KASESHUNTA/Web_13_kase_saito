"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("button[type='submit']");

  btn.addEventListener("click", function (event) {
    event.preventDefault();

    const userConfirmed = confirm("回答を送信しますか??");

    if (userConfirmed) {
      alert("回答を送信しました！！");

      window.location.href = "../page2/index.html";
    }
  });
});
/*---page2*/
document.addEventListener("DOMContentLoaded", function () {


  const btn = document.querySelector("button[type='situmonsubmit']");

  btn.addEventListener("click", function (event) {
    event.preventDefault();

    const userConfirmed = confirm("質問を送信しますか??");

    if (userConfirmed) {
      alert("質問を送信しました！！");
      window.location.href = "../page2/index.html";
    }
  });
});

/*もっとみる*/


const btn = document.querySelector('.more-btn');
const moreHidden = document.querySelectorAll('li.hidden');

btn.addEventListener('click', function() {
  moreHidden.forEach(function(item) {
    item.classList.remove('hidden');
  });
  btn.style.display = 'none';
});






