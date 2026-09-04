// دو عنصری که با آنها کار داریم
let btn  = document.getElementById("menu-btn");
let menu = document.getElementById("main-nav");

// با هر کلیک، کلاس open را بگذار یا بردار
btn.onclick = function () {
    menu.classList.toggle("open");

    // شکل دکمه هم عوض شود: باز = ✕ ، بسته = ☰
    if (menu.classList.contains("open")) {
        btn.textContent = "✕";
    } else {
        btn.textContent = "☰";
    }
};


// وقتی روی یکی از لینک‌های منو کلیک شد، منو بسته شود
let links = document.querySelectorAll(".main-nav a");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        menu.classList.remove("open");
        btn.textContent = "☰";
    };
}
