const button = document.getElementById("readBtn");
const box = document.getElementById("messageBox");
const text = document.getElementById("typedText");
const music = document.getElementById("bgMusic"); // Audio element

// Cantonese message in Traditional Chinese
const message = `親愛的寶貝，我哋嘅關係又達到一個新里程碑。時間過得真係好快，因為我哋一直都喺享受彼此嘅陪伴。即使我哋有時會爭吵、會拗撬，我依然愛你——今日、聽日、直到我生命嘅最後一日。
你係一個出色嘅女仔，我唔會改變你身上任何一樣嘢。你就係我嘅唯一。
我愛你多過我生命中任何一個人。你係我嘅心跳、我嘅老婆、女朋友、最好嘅朋友、永遠支持我嘅人、我最親密嘅同伴、我嘅一切。
冇言語可以形容你對我有幾重要，我已經等唔切想見到你嗰一日。
我愛你，葉惠敏。七個月快樂！`;

let i = 0;

function typeWriter() {
  if (i < message.length) {
    text.textContent += message.charAt(i);
    i++;
    setTimeout(typeWriter, 40); // typing speed
  }
}

button.addEventListener("click", () => {
  button.style.display = "none";
  box.style.display = "block";
  music.play();  // Play music
  typeWriter();
});

// 🌸 Floating flowers effect
for (let i = 0; i < 20; i++) {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.bottom = '-30px';
  flower.style.animationDuration = (10 + Math.random() * 10) + 's';
  flower.style.animationDelay = Math.random() * 10 + 's';
  document.body.appendChild(flower);
}

