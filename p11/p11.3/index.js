document.addEventListener('DOMContentLoaded', function() {
    const cardTextInput = document.getElementById('cardText');
    const cardColorSelect = document.getElementById('cardColor');
    const cardDisplay = document.getElementById('card');

    cardTextInput.addEventListener('input', function() {
        cardDisplay.textContent = cardTextInput.value || 'Ваш текст на карте';
    });

    cardTextInput.addEventListener('focus', function() {
        cardTextInput.style.border = '2px solid #007BFF';
        cardTextInput.style.backgroundColor = '#e7f3ff';
    });

    cardTextInput.addEventListener('blur', function() {
        cardTextInput.style.border = '';
        cardTextInput.style.backgroundColor = '';
    });

    cardColorSelect.addEventListener('change', function() {
        cardDisplay.style.backgroundColor = cardColorSelect.value;
    });
});
