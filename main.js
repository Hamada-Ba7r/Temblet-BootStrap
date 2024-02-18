document.querySelector(".moon").onclick = function () {
  document.querySelector(".moon").style.display = "none";
  document.querySelector(".sun").style.display = "block";
  document.querySelector("body").classList.add("dark");
};
document.querySelector(".sun").onclick = function () {
  document.querySelector(".moon").style.display = "block";
  document.querySelector(".sun").style.display = "none";
  document.querySelector("body").classList.remove("dark");
};
