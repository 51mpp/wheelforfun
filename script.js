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
  1: { name: "โยคะ", videoId: "LfbPnWSCeCU" },
  2: { name: "TABATA", videoId: "8Luxhv3WkKg" },
  3: { name: "ยืดเหยียดกล้ามเนื้อ", videoId: "-ZUdg2eimPc" },
  4: { name: "สร้างกล้ามเนื้อ", videoId: "CcJQbG3WXDM" },
};

spinBtn.addEventListener("click", () => {
  value -= Math.ceil(Math.random() * 3600 + 360);
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

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
