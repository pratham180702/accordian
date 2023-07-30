for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
  let ans = document.querySelectorAll(".initial-content")[i];
  let quesHeading = document.querySelectorAll(".content-items h3")[i];
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var btnContent = this.innerHTML;

    this.classList.add("active");

    setTimeout(() => {
      if (btnContent === "+") {
        this.textContent = "‒";
        ans.classList.add("ans");
        quesHeading.classList.add("h3-active");
      } else if (btnContent === "‒") {
        this.textContent = "+";
        ans.classList.remove("ans");
        quesHeading.classList.remove("h3-active");
      }

      this.classList.remove("active");
    }, 500);
  });
}
