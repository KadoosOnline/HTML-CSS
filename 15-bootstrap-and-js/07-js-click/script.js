/* ---------- مثال ۱: عوض کردن رنگ صفحه ---------- */

let colorBtn = document.getElementById("color-btn");

colorBtn.onclick = function () {
    document.body.style.backgroundColor = "#2f4f4f";
};

let resetBtn = document.getElementById("reset-btn");

resetBtn.onclick = function () {
    document.body.style.backgroundColor = "#f5f5f5";
};


/* ---------- مثال ۲: شمارنده ---------- */

let number = 0;                                    // شمارنده از صفر شروع می‌شود
let countBox = document.getElementById("count");
let countBtn = document.getElementById("count-btn");

countBtn.onclick = function () {
    number = number + 1;                           // یکی اضافه کن
    countBox.textContent = number;                 // و نشانش بده
};


/* ---------- مثال ۳: نشان دادن و پنهان کردن ---------- */

let secret = document.getElementById("secret");
let toggleBtn = document.getElementById("toggle-btn");

toggleBtn.onclick = function () {
    // classList.toggle یعنی: اگر این کلاس هست بردار، اگر نیست بگذار
    secret.classList.toggle("show");
};
