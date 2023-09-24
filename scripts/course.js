// JavaScript để xử lý sự kiện cho nút menu di động
const menuIcon = document.querySelector(".menu-icon");
const navbarItems = document.querySelector(".navbar-items");

menuIcon.addEventListener("click", () => {
    navbarItems.classList.toggle("active");
});
