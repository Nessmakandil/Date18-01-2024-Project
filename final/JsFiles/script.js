
var x= [11,15,19];
 

function get(){
    let x=5
    console.log(x);
}

function getUserName(){
    console.log(x)
}
function test(){
    let y = 2 ;
    
    if(true){
        var x=15;
        console.log("Good");
        console.log('y = '+ y);
        document.getElementById('mo').innerText ='Mo';

    }
    y = "sohila";
    console.log('x = '+ x);
    console.log('y = '+ y);
}


function calc( op ){
    let x = 10, y = 20;

    switch(op){
        case '+':
            document.getElementById('result').innerText= x+y;
            break;
        case '-':
            document.getElementById('result').innerText= y-x;
            break;
        case '*':
            document.getElementById('result').innerText= x*y;
            break;
        case '/':
            document.getElementById('result').innerText= y/x;
            break;
        default:
            document.getElementById('result').innerText= "Undefined";
            
   
    }
}
///************/*/////* */


function add(){
    console.log("sum = "+ (10+20));
}
function sub(x,y){
    console.log("sub = "+ (x-y));
}
function mult(x,y){
    return(x*y);
}
function div(){
    return( 20/10);
}
add();
sub(20,10);
console.log("mult = "+mult(10,20));
var x = div();
console.log("div = "+ x);

// window.alert("See This!")




function changeBackColor(){

    if(true){
        document.getElementById('back1').innerHTML="Hello!";
        document.write('<p class="wow">what a <span>Website<span></p>');
        document.body.style.backgroundColor ="#333"; 
        document.body.style.color ="#fff"; 

    }

    console.log(true+1)
    y = true;
    z = 1;
    if(z==y){
        console.log("True Value Only");
    }
    if(z===y){
        console.log("True Value and Data Type");
    }
    x = new Number(500);
    y = new Number(500);
    if(x == y )
        document.write(true)
    else
        document.write(false)
     

}




changeBackColor();

function showDate(){

    document.getElementById("date").innerHTML ="Today Date is "+Date()
}