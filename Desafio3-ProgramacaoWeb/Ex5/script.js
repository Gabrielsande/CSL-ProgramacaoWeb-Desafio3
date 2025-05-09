function checkParity() {
        const number = parseInt(document.getElementById('numberInput').value);
        const resultElement = document.getElementById('result');
        if (isNaN(number)) {
            resultElement.textContent = "Por favor, insira um número válido.";
        } else if (number % 2 === 0) {
            resultElement.textContent = `O número ${number} é par.`;
        } else {
            resultElement.textContent = `O número ${number} é ímpar.`;
        }
    }