const screen = document.getElementById("screen");

function append(value){

    screen.value += value;
}

function clearScreen(){

    screen.value = "";
}

function deleteLast(){

    screen.value = screen.value.slice(0,-1);
}

function calculate(){

    try{

        screen.value = eval(screen.value);

    }

    catch{

        screen.value = "Error";
    }
}

document.addEventListener("keydown",function(event){

    const key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        key=="+" ||
        key=="-" ||
        key=="*" ||
        key=="/" ||
        key=="." ||
        key=="%"
    ){

        append(key);
    }

    else if(key==="Enter"){

        calculate();
    }

    else if(key==="Backspace"){

        deleteLast();
    }

    else if(key==="Escape"){

        clearScreen();
    }
});