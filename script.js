const generateBtn = document.getElementById("generate");
const qrText = document.getElementById("qr-text");
const qrContainer = document.getElementById("qrcode");
const downloadBtn = document.getElementById("download");

generateBtn.addEventListener("click", () => {
  qrContainer.innerHTML = "";
  if (qrText.value.trim() === "") {
    alert("Digite um texto ou link!");
    return;
  }
  QRCode.toCanvas(qrText.value, { width: 200 }, function (err, canvas) {
    if (err) console.error(err);
    qrContainer.appendChild(canvas);
    downloadBtn.classList.remove("hidden");
  });
});

downloadBtn.addEventListener("click", () => {
  const canvas = qrContainer.querySelector("canvas");
  const link = document.createElement("a");
  link.download = "qrcode.png";
  link.href = canvas.toDataURL();
  link.click();
});