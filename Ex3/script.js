function checkAge() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const result = document.getElementById('result');

    if (age >= 18) {
        result.textContent = `${name} é maior de idade.`;
    } else {
        result.textContent = `${name} é menor de idade.`;
    }
}