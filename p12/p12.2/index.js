const promocodeObj = {
    promocode: "PROM50",
    gift: "Скидка 50%"
};

function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [name, value] = item.split('=');
        acc[name] = value;
        return acc;
    }, {});
}

document.getElementById('promo-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const promoCodeInput = document.getElementById('promo-code');
    const promoMessage = document.getElementById('promo-message');
    const enteredCode = promoCodeInput.value.trim().toUpperCase();

    if (enteredCode === promocodeObj.promocode) {
        promoMessage.textContent = `Промокод успешно применён! Вы получили: ${promocodeObj.gift}`;
        promoMessage.classList.remove('hidden');

        document.cookie = `promoCode=${enteredCode}; max-age=${30 * 24 * 60 * 60}; path=/`;
    } else {
        promoMessage.textContent = "Неверный промокод. Попробуйте снова.";
        promoMessage.classList.remove('hidden');
    }

    promoCodeInput.value = ""; 
});

// Авто активация промокода при загрузке страницы
window.onload = function() {
    const cookie = getCookie();
    if (cookie.promoCode === promocodeObj.promocode) {
        const promoMessage = document.getElementById('promo-message');
        promoMessage.textContent = `Промокод успешно применён! Вы получили: ${promocodeObj.gift}`;
        promoMessage.classList.remove('hidden');
    }
};