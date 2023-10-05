let result = document.getElementById("result");

const multiplyNumbers = () => {
    let num1 = document.getElementById("num_1").value;
    let num2 = document.getElementById("num_2").value;
    result.innerText = parseInt(num1) * parseInt(num2);
};

const divideNumbers = () => {
    let num1 = document.getElementById("num_1").value;
    let num2 = document.getElementById("num_2").value;
    result.innerText = parseInt(num1) / parseInt(num2);
};

const addNumbers = () => {
    let num1 = document.getElementById("num_1").value;
    let num2 = document.getElementById("num_2").value;
    result.innerText = parseInt(num1) + parseInt(num2);
};

const subtractNumbers = () => {
    let num1 = document.getElementById("num_1").value;
    let num2 = document.getElementById("num_2").value;
    result.innerText = parseInt(num1) - parseInt(num2);
};

const clearNumbers = () => {
    document.getElementById("num_1").value = "";
    document.getElementById("num_2").value = "";
    result.innerText = "0";
};
