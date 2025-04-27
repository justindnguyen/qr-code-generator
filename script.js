let qr;

function generateQRCode() {
  let container = document.getElementById('qrcode');
  let text = document.getElementById('text').value.trim();
  let downloadLink = document.getElementById('download');
  
  if (!text) {
    alert("Please enter text or URL!");
    return;
  }
  
  container.innerHTML = "";
  
  qr = new QRCode(container, {
    text: text,
    width: 200,
    height: 200
  });

  setTimeout(() => {
    let qrCanvas = container.querySelector('canvas');
    if (qrCanvas) {
      downloadLink.href = qrCanvas.toDataURL();
      downloadLink.style.display = "inline-block";
    }
  }, 300);
}
