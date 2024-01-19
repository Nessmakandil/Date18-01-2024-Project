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