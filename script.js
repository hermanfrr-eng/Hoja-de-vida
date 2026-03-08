const toggleButton = document.getElementById('dark-mode-toggle');
const bodyElement = document.documentElement; // Seleccionamos el <html>

toggleButton.addEventListener('click', () => {
    // Comprobamos si ya tiene el modo oscuro
    if (bodyElement.getAttribute('data-theme') === 'dark') {
        bodyElement.removeAttribute('data-theme');
        toggleButton.textContent = '🌙 Modo Oscuro';
    } else {
        bodyElement.setAttribute('data-theme', 'dark');
        toggleButton.textContent = '☀️ Modo Claro';
    }
});
