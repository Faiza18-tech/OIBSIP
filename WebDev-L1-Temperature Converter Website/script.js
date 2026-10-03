const form = document.getElementById("temperatureForm");

const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");

const message = document.getElementById("message");
const results = document.getElementById("results");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    const inputValue = temperatureInput.value.trim();
    const unit = unitSelect.value;

    // Reset previous message
    message.textContent = "";
    message.className = "message";

    // Hide old results
    results.classList.remove("show");

    // Check empty input
    if (inputValue === "") {
        showError("Please enter a temperature value.");
        return;
    }

    const temperature = Number(inputValue);

    // Check whether input is a valid number
    if (!Number.isFinite(temperature)) {
        showError("Please enter a valid numeric temperature.");
        return;
    }

    // Convert input to Celsius first
    let celsius;

    if (unit === "celsius") {

        celsius = temperature;

    } else if (unit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;

    } else if (unit === "kelvin") {

        celsius = temperature - 273.15;
    }

    // Absolute zero validation
    if (celsius < -273.15) {
        showError(
            "Invalid temperature. Temperature cannot be below absolute zero (-273.15 °C)."
        );
        return;
    }

    // Convert Celsius to other units
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    // Display results
    celsiusResult.textContent = `${formatNumber(celsius)} °C`;
    fahrenheitResult.textContent = `${formatNumber(fahrenheit)} °F`;
    kelvinResult.textContent = `${formatNumber(kelvin)} K`;

    // Show success message
    message.textContent = "Temperature converted successfully.";
    message.className = "message success";

    // Show results
    results.classList.add("show");
});


function formatNumber(number) {

    return Number(number.toFixed(2));
}


function showError(text) {

    message.textContent = text;
    message.className = "message error";
}