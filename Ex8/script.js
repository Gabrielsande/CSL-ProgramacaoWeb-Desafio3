  function countCharacters() {
            const textInput = document.getElementById('textInput').value;
            const charCount = textInput.length;
            document.getElementById('result').textContent = `Você digitou ${charCount} caracteres.`;
        }