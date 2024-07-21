const display=document.getElementById("display");
function icon(input){
    display.value +=input; 
}
function calc(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error"
    }
}
function clearo(){
    var value = display.value;
    display.value = value.substr(0, value.length - 1);
}

function clearAll(){
    display.value = "";
}

