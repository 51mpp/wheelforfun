let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
let value = 0;

const handleLand = (url) => {
  landtext = document.querySelector(".text-land");
  landtext.textContent = url.name;
  modal.style.display = "block";
  setTimeout(() => {
    window.open(`https://www.youtube.com/watch?v=${url.videoId}`, "_blank");
}, 1000);
};

var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

const segmentVideo = {
  1: { name: "เกมกระต่ายขาเดียว", videoId: "VTsMuhgBSSw" },
  2: { name: "เกมไล่จับกบ", videoId: "yu2KwjXqSh8" },
  3: { name: "การเล่นแปะแข็ง", videoId: "Qxx5WCxFaC4" },
  4: { name: "เกมลิงชิงหาง", videoId: "hejyLXjc4qU" },
};

spinBtn.addEventListener("click", () => {
  value -= Math.ceil(Math.random() * 3600 + 720);
  wheel.style.transition = "transform 5s ease-out";
  wheel.style.transform = `rotate(${value}deg)`;
  let result = Math.ceil(((value * -1) % 360) / 90);
  url = segmentVideo[result];
  wheel.addEventListener(
    "transitionend",
    () => {
        handleLand(url);
    },
    { once: true }
  );
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
