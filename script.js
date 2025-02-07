document.getElementById("yes").addEventListener("click", function() {
  document.getElementById("response").textContent = "Yay! I can't wait! 🥰";
  document.getElementById("response").classList.remove("hidden");
});

document.getElementById("no").addEventListener("click", function() {
  let noButton = document.getElementById("no");
  noButton.style.position = "absolute";
  noButton.style.left = `${Math.random() * window.innerWidth}px`;
  noButton.style.top = `${Math.random() * window.innerHeight}px`;
});
