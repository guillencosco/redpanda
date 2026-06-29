// Añadir un botón flotante para cambiar preferencias después de aceptar
const floatingBtn = document.createElement('button');
floatingBtn.innerHTML = '<img src="assets/logo.png" style="width:95%; height:95%; object-fit:contain" >';
floatingBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ffffff;
    color: white;
    border: 2px solid #dc3545;
    cursor: pointer;
    z-index: 1000;
    display: none;
    align-items: center;
    justify-content: center;

    font-size: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: transform 0.2s ease;
`;

floatingBtn.onmouseenter = () => {
    floatingBtn.style.transform = 'scale(1.1)';
};
floatingBtn.onmouseleave = () => {
    floatingBtn.style.transform = 'scale(1)';
};

floatingBtn.onclick = () => {
    if (window.cookieManager) {
        window.cookieManager.showModal();
    }
};
document.body.appendChild(floatingBtn);

// Mostrar el botón flotante después de aceptar cookies
function showFloatingButton() {
    floatingBtn.style.display = 'flex';
}

// Observar cuando se aceptan cookies
document.addEventListener('DOMContentLoaded', () => {
    // Comprobar si ya hay consentimiento
    const consent = document.cookie.split('; ').find(row => row.startsWith('cookie_consent='));
    if (consent) {
        showFloatingButton();
    }
});

