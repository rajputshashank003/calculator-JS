const display = document.getElementsByClassName("display-text");


let a = "" ;
let b = "" ;
let all_clear = document.querySelector(".all-clear");
all_clear.addEventListener("click", function() {
    display[0].innerText = "";
    a = "";
    b = "";
});

let one = document.querySelector(".one");
one.addEventListener("click", function() {
    display[0].innerText +=  "1";
    a += "1";
    console.log(a);
});

let two = document.querySelector(".two");
two.addEventListener("click", function() {
    display[0].innerText +=  "2";
    a += "2";
    console.log(a);
});

let three = document.querySelector(".three");
three.addEventListener("click", function() {
    a += "3";
    console.log(a);
    display[0].innerText +=  "3";
});

let four = document.querySelector(".four");
four.addEventListener("click", function() {
    display[0].innerText +=  "4";
    a += "4";
    console.log(a);

});

let five = document.querySelector(".five");
five.addEventListener("click", function() {
    display[0].innerText +=  "5";
    a += "5";
    console.log(a);
});

let six = document.querySelector(".six");
six.addEventListener("click", function() {
    display[0].innerText +=  "6";
    a += "6";
    console.log(a);
});

let seven = document.querySelector(".seven");
seven.addEventListener("click", function() {
    display[0].innerText +=  "7";
    a += "7";
    console.log(a);
});

let eight = document.querySelector(".eight");
eight.addEventListener("click", function() {
    display[0].innerText +=  "8";
    a += "8";
    console.log(a);
});


let nine = document.querySelector(".nine");
nine.addEventListener("click", function() {
    display[0].innerText +=  "9";
    console.log(a);
    a += "9";
    console.log(a);
});

let zero = document.querySelector(".zero");
zero.addEventListener("click", function() {
    display[0].innerText +=  "0";
    a += "0";
    console.log(a);
});

let operator = "";

let divide = document.querySelector(".divide");
divide.addEventListener("click", function() {
    display[0].innerText +=  "/ ";
    operator = "/";
    b = a;
    a = "";
});

let add = document.querySelector(".add");
add.addEventListener("click", function() {
    display[0].innerText +=  "+ ";
    operator = "+";
    b = a;
    a = "";
}); 

let minus = document.querySelector(".minus");
minus.addEventListener("click", function() {
    if(a == ""){
        a += "-";
        display[0].innerText =  "-";
        console.log("a = " ,a);
    } else {
        display[0].innerText +=  "-";
        operator = "-";
        b = a;
        a = "";
    }
});

let mul = document.querySelector(".mul");
mul.addEventListener("click", function() {
    display[0].innerText +=  "X ";
    operator = "X";
    b = a;
    a = "";
});

let percent = document.querySelector(".percent");
percent.addEventListener("click", function() {
    let val1 = parseInt(a);
    display[0].innerText = (1/100)*a;
    a="";
    b="";
});

let backspace = document.querySelector(".backspace");
backspace.addEventListener("click", function () {
    a = a.slice(0,-1);
    console.log(a);
    display[0].innerText = operator + a;
});

let equals = document.querySelector(".equals");
equals.addEventListener("click", function() {
    if(operator == "/"){
        display[0].innerText += "=" +(b/a) ;
    } else if(operator == "+"){
        let val1 = parseInt(a);
        let val2 = parseInt(b);
        display[0].innerText +=  "=" +( val1 + val2) ;
    } else if(operator == "-"){
        let val1 = parseInt(b);
        let val2 = parseInt(a);
        display[0].innerText += "-" + (val1 - val2) ;
    } else if(operator == "X"){
        let val1 = parseInt(b);
        let val2 = parseInt(a);
        display[0].innerText += "X" + (val1 * val2) ;
    }
    a="";
    b="";
});
