const music = document.getElementById("bgMusic");

function showPage(num) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });
  document.getElementById("page" + num).classList.add("active");

  // เล่นเพลงเฉพาะหน้า รูปภาพ (page1)
  if (num === 1) {
    music.play();
  } else {
    music.pause();
    music.currentTime = 0;
  }
}


/* PASSWORD */
function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "141267") {
    showPage(1);
  } else {
    alert("Wrong password 😢");
  }
}

const images = [
  "S__27459612_0.jpg",
  "S__27459613_0.jpg",
  "S__27459615_0.jpg",
  "S__27459616_0.jpg",
  "S__27459617_0.jpg",
  "S__27459618_0.jpg",
  "S__27459619_0.jpg",
  "S__27459620_0.jpg",
  "S__27459621_0.jpg",
  "S__27459623_0.jpg",
  "S__27459624_0.jpg",
  "S__27459625_0.jpg",
  "S__27459626_0.jpg",
  "S__27459627_0.jpg",
  "S__27459628_0.jpg",
  "S__27459629_0.jpg",
  "S__27459630_0.jpg",
  "S__27459631_0.jpg",
  "S__27459632_0.jpg",
  "S__27459634_0.jpg",
  "S__27459635_0.jpg"
];

let index = 0;

function updateImage() {
  document.getElementById("slide").src = images[index];
}

function nextImage() {
  index++;
  if (index >= images.length) index = 0;
  updateImage();
}

function prevImage() {
  index--;
  if (index < 0) index = images.length - 1;
  updateImage();
}
