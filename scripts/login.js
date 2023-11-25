var userList = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
];

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
        
        // Display a success message (remove this line when done testing)
        document.getElementById('success').innerText = 'Form submitted successfully!';
    } else {
        alert('Invalid username or password');
    }
}