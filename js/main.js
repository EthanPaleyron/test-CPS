const previousPart = document.querySelector("#previousPart");
const bestScore = document.querySelector("#bestScore");
const sec = document.querySelector("#sec");
const ms = document.querySelector("#ms");

// Counteur
const counteur = document.querySelector(".testCPS");
let timer = "";
counteur.addEventListener("click", () => {
  select.disabled = "true";
  counteur.innerText++;

  // Timer
  if (timer === "") {
    timer = "start";
    setInterval((e) => {
      if (sec.innerText > -1) {
        ms.innerText--;
        if (ms.innerText < 0) {
          sec.innerText--;
          ms.innerText = 99;
        }
      } else {
        // End of timer
        clearInterval(e);
        counteur.disabled = "true";
        // Your record
        previousPart.innerText = counteur.innerText;
        valueSec.innerText = select.value;
        document.querySelector(".timer").innerText = "Finish";
        document.querySelector("#blurring").classList.add("blurring");
        document.querySelector(".p_section").style.display = "flex";
        // Best record
        if (bestScore.innerText < counteur.innerText) {
          bestScore.innerText = counteur.innerText;
          console.log(bestScore);
          saveBestScore();
        }
        savePreviousPart();
      }
    }, 10);
  }
});

// Select Sec
const select = document.querySelector("select");
sec.innerText = select.value;
select.addEventListener("change", () => {
  sec.innerText = select.value;
});

// reboot
document
  .querySelector(".restart")
  .addEventListener("click", () => location.reload());
document
  .querySelector(".replay")
  .addEventListener("click", () => location.reload());
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".p_section").style.display = "none";
  document.querySelector("#blurring").classList.remove("blurring");
});

// LocalStorage
function savePreviousPart() {
  localStorage.setItem("previousPart", counteur.innerText);
}
function saveBestScore() {
  localStorage.setItem("bestScore", bestScore.innerText);
}

function showData() {
  previousPart.innerText = localStorage.getItem("previousPart");
  bestScore.innerText = localStorage.getItem("bestScore");
}
showData();
