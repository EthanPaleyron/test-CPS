const previousPart = document.querySelector("#previousPart");
const bestScore = document.querySelector("#bestScore");
const sec = document.querySelector("#sec");
const clickSec = document.querySelector("#clickSec");

// Counteur
let clickInterval;
const clicks = document.querySelector(".testCPS");
let isActive = false;
let tmp = 0;
clicks.addEventListener("click", stake);
function stake() {
  select.disabled = true;
  clicks.textContent++;
  tmp++;
  if (isActive == false) {
    isActive = true;
    clickInterval = setInterval(() => {
      sec.textContent--;
      clickSec.textContent = tmp;
      tmp = 0;
      if (sec.textContent <= 0) {
        clearInterval(clickInterval);
        document.querySelector("#blurring").classList.add("blurring");
        document.querySelector("#previousPart").textContent =
          clicks.textContent;
        document.querySelector(".p_section").style.display = "flex";
        clicks.removeEventListener("click", stake);
      }
    }, 1000);
  }
}

function updateCPS() {
  let currentTime = new Date();
  let timeDiff = (currentTime - startTime) / 1000; // en secondes
  let cps = clicks / timeDiff;
  console.log("CPS actuels : " + cps);
}

// Select Sec
const select = document.querySelector("select");
sec.textContent = select.value;
select.addEventListener("change", () => {
  sec.textContent = select.value;
});

// reboot
document
  .querySelector(".restart")
  .addEventListener("click", () => location.reload());
document
  .querySelector(".replay")
  .addEventListener("click", () => location.reload());
