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