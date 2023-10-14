window.onload = function () {
    var loader = document.querySelector('.loader');
    setTimeout(function () {
        loader.style.transition = "opacity 0.5s";
        loader.style.opacity = "0";
        setTimeout(function () {
            loader.style.display = "none";
        }, 500);
    }, 2000);
};
// JavaScript để xử lý sự kiện cho nút menu di động
const menuIcon = document.querySelector(".menu-icon");
const navbarItems = document.querySelector(".navbar-items");

menuIcon.addEventListener("click", () => {
    navbarItems.classList.toggle("active");
});