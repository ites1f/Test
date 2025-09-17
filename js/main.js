// A simple button interaction
const btn = document.getElementById("magicBtn");

btn.addEventListener("click", () => {
  alert("You clicked the magic button ✨!");
  document.body.style.backgroundColor = "#d0f0c0"; // light green
});
