const previousPart = document.querySelector("#previousPart");
const bestScore = document.querySelector("#bestScore");
const sec = document.querySelector("#sec");
const ms = document.querySelector("#ms");

// Select Sec
const select = document.querySelector("select");
sec.innerText = select.value;
select.addEventListener("change", () => {
  sec.innerText = select.value;
});

// Counteur
const counteur = document.querySelector("#testCPS");
let timerActif = "";
counteur.addEventListener("click", () => {
  counteur.innerText++;
  // Timer
  if (timerActif !== "GO") {
    setInterval((e) => {
      if (sec.innerText > 0) {
        ms.innerText--;
        if (ms.innerText < 0) {
          sec.innerText--;
          ms.innerText = 99;
        }
      } else {
        // End of timer
        counteur.style.display = "none";
        ms.style.display = "none";
        sec.style.display = "none";
        document.querySelector(".time").innerText = "Finish";
        previousPart.innerText = counteur.innerText;
        savePreviousPart();
        if (bestScore.innerText < counteur.innerText) {
          bestScore.innerText = counteur.innerText;
          saveBestScore();
        }
        clearInterval(e);
      }
    }, 10);
  }
  if (timerActif === "") {
    timerActif = "GO";
  }
});

// location.reload();

// reboot
document.querySelector("#restart").addEventListener("click", () => {
  location.reload();
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
