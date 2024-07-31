function sendMessage(product) {
    const phoneNumber = '521234567890'; // Reemplaza con el número de WhatsApp del restaurante
    const message = `Hola, me gustaría pedir el siguiente producto: ${product}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
