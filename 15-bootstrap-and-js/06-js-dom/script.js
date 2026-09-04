// مرحله ۱: عنصر را با id پیدا کن
let box = document.getElementById("welcome");

// مرحله ۲: عوضش کن
box.textContent = "سلام! این متن را جاوااسکریپت نوشت";
box.style.backgroundColor = "#2f4f4f";
box.style.color = "#ffffff";


// همین کار برای جعبه دوم - نمایش تاریخ امروز
let today = document.getElementById("today");
today.textContent = "امروز: " + new Date().toLocaleDateString("fa-IR");


// جعبه سوم - یک محاسبه ساده
let students = 24;
let teachers = 3;

let counter = document.getElementById("counter");
counter.textContent = "این کلاس " + students + " دانش‌آموز و " + teachers + " دبیر دارد";
counter.style.color = "#ff6347";
