document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === 'rush' && password === 'pagli') {
        window.location.href = 'success.html';
    } else {
        window.location.href = 'error.html';
    }
});
