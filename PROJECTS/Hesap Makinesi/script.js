const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";

updatedDisplay();

function updatedDisplay() {
    display.value = displayValue
}


keys.addEventListener("click", function (e) {
    const element = e.target;

    if (!element.matches("button")) return; // tıklanılan elementin button olup olmadığını kontrol ediyor

    if (element.classList.contains("operator")) {
        console.log("operator", element.value);
        return;
    }

    if (element.classList.contains("decimal")) {
        //console.log("decimal", element.value);
        inputDecimal(element.value);
        updatedDisplay();
        return;
    }

    if (element.classList.contains("clear")) {
        //console.log("clear", element.value);
        clear();
        updatedDisplay();
        return;
    }

    //console.log("number", element.value);

    inputNumber(element.value);
    updatedDisplay();
});

function inputNumber(num) {
    displayValue = displayValue=== "0" ? num : displayValue + num;
}

function inputDecimal() {
    if(!displayValue.includes(".")){
        displayValue += ".";
    }
}

function clear() {
    displayValue= "0";
}