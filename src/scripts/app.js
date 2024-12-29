// This file contains the JavaScript code for the QR code generator functionality.
// It includes functions to handle user input, generate the QR code, and update the webpage with the generated QR code.

document.addEventListener('DOMContentLoaded', () => {
    const qrCodeForm = document.getElementById('qr-code-form');
    const qrCodeInput = document.getElementById('qr-code-input');
    const qrCodeDisplay = document.getElementById('qr-code-display');

    qrCodeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputValue = qrCodeInput.value.trim();
        if (inputValue) {
            generateQRCode(inputValue);
        }
    });

    function generateQRCode(text) {
        const qrCode = new QRCode(qrCodeDisplay, {
            text: text,
            width: 128,
            height: 128,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H,
        });
    }
});