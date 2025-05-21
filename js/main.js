// Seleccionar elementos
const loginBtn = document.querySelector('header nav a[href="#"]:first-child');
const modal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close-modal');

// Abrir modal al hacer clic en "Iniciar sesión"
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

// Cerrar modal al hacer clic en la X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});