for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var btnContent = this.innerHTML;

    this.classList.add("active");

    setTimeout(() => {
      if (btnContent === "+") {
        this.textContent = "‒";
      } else if (btnContent === "‒") {
        this.textContent = "+";
        // var ans = document.querySelectorAll(".ans")[i];
        // ans.style.maxHeight = "0";
        // ans.style.padding = "0";
      }

      this.classList.remove("active");
    }, 500);
  });
}
