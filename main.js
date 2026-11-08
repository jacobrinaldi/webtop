//get document items

const credits = document.getElementById("credits");
const creditsRemove = document.getElementById("creditsRemove");
const panel = document.querySelector(".creditsToggle");
const aiIcon = document.getElementById("iconAi");
const aiFolder = document.querySelector(".aiFolder");
const aiRemove = document.getElementById("aiRemove");

//functions

function toggleCredits() {
  panel.classList.toggle("hidden");
}

function toggleAiFolder () {
  aiFolder.classList.toggle("hidden")
}

//toggles
//credits toggle

credits.addEventListener("click", toggleCredits);
creditsRemove.addEventListener("click", toggleCredits);

//ai folder toggle

aiIcon.addEventListener("click", toggleAiFolder)
aiRemove.addEventListener("click", toggleAiFolder)