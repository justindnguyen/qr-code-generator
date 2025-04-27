let qr;

function generateQRCode() {
  let container = document.getElementById('qrcode');
  let text = document.getElementById('text').value.trim();
  let downloadLink = document.getElementById('download');
  
  if (!text) {
    alert("Please enter text or URL!");
    return;
  }
  
  container.innerHTML = ""; // Clear previous QR
  
  qr = new QRCode(container, {
    text: text,
    width: 200,
    height: 200
  });

  setTimeout(() => {
    // Grab the QR code canvas and prepare download link
    let qrCanvas = container.querySelector('canvas');
    if (qrCanvas) {
      downloadLink.href = qrCanvas.toDataURL();
      downloadLink.style.display = "inline-block";
    }
  }, 300);
}
