function showWelcomeMessage() {
    const userName = document.getElementById('userName').value;
    const welcomeMessage = `Olá, ${userName}! Seja bem-vindo(a)!`;
    document.getElementById('welcomeMessage').textContent = welcomeMessage;
}