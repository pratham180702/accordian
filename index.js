document.querySelector(".btn").addEventListener("click", function () {
  var btnContent = this.innerHTML;

  setTimeout(() => {
    if (btnContent === "+") {
      this.innerHTML = "-";
    } else if (btnContent === "-") {
      this.innerHTML = "+";
    }
  }, 1000);
});
