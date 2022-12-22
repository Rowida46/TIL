

window.onload = function() {
    console.log(localStorage)
    document.getElementById('welcome').innerText = "Hello, " + localStorage.username ;
};