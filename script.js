document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
        } else {
            alert('Invalid username or password.');
        }
    });
});