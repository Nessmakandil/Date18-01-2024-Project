// Simulating a user database
var userDatabase = {
    'john123': 'password123',
    'emma456': 'pass456',
    'jack789': 'qwerty'
};

// Function to validate the login credentials
function validate() {
    var username = document.getElementById('name').value;
    var password = document.getElementById('psw').value;
    console.log(username);
    console.log(password);


    if (username in userDatabase && userDatabase[username] === password) {
        alert('Login successful!');
        window.open  ("home.html", "_blank");
    
    
    
    } else {
        alert('Invalid username or password. Please try again.');
    }

    // not working
    //window.location.replace  ("https://www.semrush.com/blog/javascript-redirect/");
    //location.href="https://www.semrush.com/blog/javascript-redirect/";
    //document.location.href="https://www.semrush.com/blog/javascript-redirect/";
    //window.location.href='https://www.semrush.com/blog/javascript-redirect/';
    //window.location.assign("https://www.semrush.com/blog/javascript-redirect/");
    //top.location = "https://www.semrush.com/blog/javascript-redirect/";
    //self.location="https://www.semrush.com/blog/javascript-redirect/";
    //window.location='https://www.semrush.com/blog/javascript-redirect/';
    
    // working 
    //window.open  ("https://www.semrush.com/blog/javascript-redirect/");
    
    
}