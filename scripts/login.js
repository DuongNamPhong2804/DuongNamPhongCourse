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
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const user = storedUsers.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById('loginMessage').textContent = 'Đăng nhập thành công!';
    } else {
        document.getElementById('loginMessage').textContent = 'Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập.';
    }
});