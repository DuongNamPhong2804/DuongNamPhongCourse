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
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = storedUsers.find(u => u.username === username);

    if (existingUser) {
        document.getElementById('signupMessage').textContent = 'Tên người dùng đã tồn tại.';
    } else {
        const newUser = { username, password };
        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));
        document.getElementById('signupMessage').textContent = 'Đăng ký thành công!';
    }
});