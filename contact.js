// offer bar closing //
const closeBtn = document.getElementById("closeBtn");
const offerBar = document.getElementById("offerBar");

closeBtn.addEventListener("click", () => {
    offerBar.style.display = "none";
});