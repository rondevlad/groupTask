function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var checkPassword = document.getElementById('checkPassword').value;
    
    var form = document.getElementById('signupForm');
    var accountMade = document.getElementById('accountMade');
    
    if (username == '' || password == '' || email == '' || checkPassword == ''){
        alert("Please fill in all fields");
    }
    else if (!(password == checkPassword)){
        alert("Both passwords must be the same");
    }
    else{
        form.style.display = "none";
        accountMade.innerHTML = "Account Successfully Made";
    }
}