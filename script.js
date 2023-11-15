function validateInput() {
    const temperatureInput = document.getElementById('temperature').value;

    if (!/^\d*\.?\d+$/.test(temperatureInput)) {
        showModal('Please enter a valid number for temperature.');
    }
}

function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    // const selectedUnit = document.getElementById('unit').value;
    let convertedTemperature;
    let resultUnit;

    if (isNaN(temperatureInput)) {
        showModal('Please enter a valid number for temperature.');
        return;
    }

    if (inputUnit === 'celsius') {
        convertedTemperature = convertFromCelsius(temperatureInput, outputUnit);
        resultUnit = outputUnit;
    } else if (inputUnit === 'fahrenheit') {
        convertedTemperature = convertFromFahrenheit(temperatureInput, outputUnit);
        resultUnit = outputUnit;
    } else if (inputUnit === 'kelvin') {
        convertedTemperature = convertFromKelvin(temperatureInput, outputUnit);
        resultUnit = outputUnit;
    }

    // if (selectedUnit === 'celsius') {
    //     convertedTemperature = (temperatureInput - 32) * (5 / 9);
    //     resultUnit = 'Celsius';
    // } else if (selectedUnit === 'fahrenheit') {
    //     convertedTemperature = (temperatureInput * (9 / 5)) + 32;
    //     resultUnit = 'Fahrenheit';
    // } else if (selectedUnit === 'kelvin') {
    //     convertedTemperature = temperatureInput + 273.15;
    //     resultUnit = 'Kelvin';
    // }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<div class="result-box">Converted Temperature: <br>${convertedTemperature.toFixed(2)} ${resultUnit}</div>`;
    resultElement.style.display = 'block'; 
}

function showModal(message) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function convertFromCelsius(temperature, outputUnit) {
    if (outputUnit === 'fahrenheit') {
        return (temperature * 9 / 5) + 32;
    } else if (outputUnit === 'kelvin') {
        return temperature + 273.15;
    } else {
        return temperature; // Output unit is Celsius
    }
}

function convertFromFahrenheit(temperature, outputUnit) {
    if (outputUnit === 'celsius') {
        return (temperature - 32) * 5 / 9;
    } else if (outputUnit === 'kelvin') {
        return (temperature - 32) * 5 / 9 + 273.15;
    } else {
        return temperature; // Output unit is Fahrenheit
    }
}

function convertFromKelvin(temperature, outputUnit) {
    if (outputUnit === 'celsius') {
        return temperature - 273.15;
    } else if (outputUnit === 'fahrenheit') {
        return (temperature - 273.15) * 9 / 5 + 32;
    } else {
        return temperature; // Output unit is Kelvin
    }
}
