function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
// Butona tıklanınca kutuları oluştur
create.addEventListener("click", () => {
  const amount = Number(input.value); // input değerini al
  createBoxes(amount);
});
destroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
}
// Kutuları oluşturma fonksiyonu
function createBoxes(amount) {
  let size = 30; // İlk kutunun boyutu

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");

    // Boyutları ayarla
    newDiv.style.width = size + "px";
    newDiv.style.height = size + "px";

    // Rastgele arka plan rengi
    newDiv.style.backgroundColor = getRandomHexColor();

    // Margin ve görsellik için opsiyonel stil
    newDiv.style.margin = "5px";

    // Boxes container içine ekle
    boxes.appendChild(newDiv);

    // Bir sonraki kutuyu büyüt
    size += 10;
  }
}
