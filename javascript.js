document.getElementById('subscriptionForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert('¡Gracias por suscribirte! Recibirás nuestras últimas noticias.');
        document.getElementById('email').value = '';
    } else {
        alert('Por favor, ingresa un correo electrónico válido.');
    }
});

