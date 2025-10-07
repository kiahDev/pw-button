const pass = document.getElementById("pw");
const button = document.getElementById("btn");

button.addEventListener('click', function() {
    if (pass.type === 'password') {
        pass.type = 'text';
        button.textContent = 'Hide';
    } else {
        pass.type = 'password';
        button.textContent = 'Show';
    }
});