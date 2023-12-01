var userList = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: '1', password: '1' }
];

var isLoggedIn = localStorage.getItem('isLoggedIn') = 'false';
window.onload = isUserLoggedIn;

function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the entered credentials are in the array
    var isValid = false;
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].username === username && userList[i].password === password) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        // If form is valid, you can submit it
        //document.getElementById('loginForm').submit();
        
        localStorage.setItem('isLoggedIn', 'true');


        document.getElementById('loginForm').style.display = "none";
        document.getElementById('loggedIn').innerHTML = "You are now logged in";
        
        window.location.href = "index.html";
    } else {
        alert('Invalid username or password');
    }
}

function isUserLoggedIn(){
    //var isLoggedIn = localStorage.getItem('isLoggedIn') === 'false';

    if (isLoggedIn){
        document.getElementById('loginForm').style.display = "none";
        document.getElementById('loggedIn').innerHTML = "You are now logged in";
    }
}