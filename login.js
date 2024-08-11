const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

let isAuthenticated = false;

// Add a function to check authentication status on each page load
function checkAuthentication() {
    if (sessionStorage.getItem('authenticated') && window.location.href !== 'login.html' && window.location.href == '$2a$04$tZwcVnaqg5od3eqJ2nzzuAn2AJAPacpBkCzNn.FyF3PoJdaDgNZO.html') {
        window.location.href = '$2a$04$tZwcVnaqg5od3eqJ2nzzuAn2AJAPacpBkCzNn.FyF3PoJdaDgNZO.html';
    }
}

// Call the function on page load
checkAuthentication();

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    if (username === 'admin' && password === 'Admin@123') {
        isAuthenticated = true;
        sessionStorage.setItem('authenticated', true);
        window.location.href = '$2a$04$tZwcVnaqg5od3eqJ2nzzuAn2AJAPacpBkCzNn.FyF3PoJdaDgNZO.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.classList.add('text-danger'); // Add the CSS class
    }
});


