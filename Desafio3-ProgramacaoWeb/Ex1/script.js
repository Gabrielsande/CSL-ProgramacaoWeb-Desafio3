function calculateAverage() {
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);

    if (isNaN(grade1) || isNaN(grade2)) {
        document.getElementById('result').textContent = "Por favor, insira valores válidos.";
        return;
    }

    const average = (grade1 + grade2) / 2;
    const status = average >= 6 ? "Aprovado" : "Reprovado";

    document.getElementById('result').textContent = `Média: ${average.toFixed(2)} - Situação: ${status}`;
}
function resetForm() {
    document.getElementById('grade1').value = '';
    document.getElementById('grade2').value = '';
    document.getElementById('result').textContent = '';
}