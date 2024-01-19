function validate(){
    let user = document.getElementById("name").value;
    let psw = document.getElementById("psw").value;

    if (user != "" && psw != "")
    { 
        // window.location.href = "home.html";
        window.open('home.html','_parent');
    }
}