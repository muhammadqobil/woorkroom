"use strict"
if (localStorage.getItem('user')) {
    window.location.href = 'pages/dashboard.html';
}

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.querySelector('.email').value;
    const password = form.querySelector('.password').value;

    if (email === 'admin@example.com' && password === '123') {
        localStorage.setItem('user', JSON.stringify({ email }));
        window.location.href = 'pages/dashboard.html';
    }else {
        alert('Invalid email or password');
    }
})