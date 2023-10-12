function convertTemperature(temperature, unit) {
    if (unit === 'celsius') {
        return (temperature * 9) / 5 + 32;
    } else {
        return ((temperature - 32) * 5) / 9;
    }
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the input temperature and unit.
    const temperature = document.querySelector('input[name=temperature]').value;
    const unit = document.querySelector('select[name=unit]').value;

    // Convert the temperature.
    const convertedTemperature = convertTemperature(temperature, unit);

    // Display the converted temperature on the page.
    document.querySelector('#result').innerHTML = `<span style="font-weight:bold">Converted temperature: ${convertedTemperature} ${unit === 'celsius' ? 'Fahrenheit' : 'Celsius'}</span>`;

    // Display the conversion formula based on the selected unit.
    let formulaText = '<p>Rumus konversi suhu:</p>';

    if (unit === 'celsius') {
        formulaText += 'Unit Suhu saat ini = Celcius';
        formulaText += '<ul>';
        formulaText += `<li>Celcius ke Fahrenheit = ${temperature} x (9/5) + 32 =  ${convertedTemperature} Fahrenheit</li>`;
        formulaText += '</ul>';
    } else {
        formulaText += 'Unit Suhu saat ini = Fahrenheit';
        formulaText += '<ul>';
        formulaText += `<li>Fahrenheit ke Celcius = (${temperature} - 32) x 5/9 = ${convertedTemperature} Celcius</li>`;
        formulaText += '</ul>';
    }

    document.querySelector('#formula').innerHTML = formulaText;
});
