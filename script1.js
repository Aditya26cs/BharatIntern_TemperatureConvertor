function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const unit = document.getElementById("unitSelector").value;
    let result;

    if (unit === "celsius") {
        result = (inputTemp * 9/5) + 32;
    } else {
        result = (inputTemp - 32) * 5/9;
    }

    document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)} °${unit.toUpperCase()}`;
}
