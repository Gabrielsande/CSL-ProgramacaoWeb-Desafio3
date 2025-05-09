function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsiusInput').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('result').textContent = `Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById('result').textContent = 'Por favor, insira um número válido.';
    }
}
