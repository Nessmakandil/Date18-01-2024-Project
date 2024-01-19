var flage = false;
function popUp(){
   //popUp Appeers
   let pop = document.getElementById("popUp");
//    let check = document.getElementById('check');
//    if(check.checked){
   pop.style.display = "block"; 
}
function toggle(){
    let button = document.getElementById('submit');
    if (button.disabled){
        button.disabled = false;

    }
    else
    button.disabled = true;

}
function vali(){
  
    let x = document.getElementById('pass').value;
    let y = document.getElementById('Cpass').value;

    if (x == y){
        document.getElementById('val').innerText = "Password Matched";
        flage = true;
        
    }else{
        document.getElementById('val').innerText = "Password Not Matched";
        flage=false;
        
    }
}

function signUp() {
    
    if (flage) {
        alert('signed up');
        window.open  ("home.html", "_blank");
    
    
    
    } else {
        alert('Password Must Be Matched.');
    }
}
