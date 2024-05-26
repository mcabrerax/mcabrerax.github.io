<!-- Enlace que abre el modal de inicio de sesión -->
<li><a href="javascript:void(0)" onclick="openModal('loginModal')">Inicio Sesión</a></li>

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

* Función para cerrar un modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

* Evento que cierra los modales al hacer clic fuera de ellos
window.onclick = function(event) {
    const modals = ['loginModal', 'registerModal', 'forgotPasswordModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}
