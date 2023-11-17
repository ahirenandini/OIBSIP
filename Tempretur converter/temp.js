function convertTemperature() {
    // Get user input
    var temperatureInput = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;

    // Validate input
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    // Convert temperature
    var convertedTemperature;
    var resultUnit;

    switch (unit) {
        case "celsius":
            convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
            resultUnit = "Fahrenheit";
            break;
        case "fahrenheit":
            convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
            resultUnit = "Celsius";
            break;
        case "kelvin":
            convertedTemperature = parseFloat(temperatureInput) + 273.15;
            resultUnit = "Kelvin";
            break;
        default:
            alert("Invalid unit selected.");
            return;
    }

    // Display result
    document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
