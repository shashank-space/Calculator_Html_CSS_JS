let display = document.getElementById("display");

let buttons = document.querySelectorAll(".btn");

let equalBtn = document.querySelector(".equal");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let value = button.innerText;

        if(value === "C"){
            display.value = "";
        }

        else if(value === "DEL"){
            display.value = display.value.slice(0,-1);
        }

        else{
            display.value += value;
        }

    });

});

equalBtn.addEventListener("click", function(){

    try{
        display.value = eval(display.value);
    }

    catch{
        display.value = "Error";
    }

});j