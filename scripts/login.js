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