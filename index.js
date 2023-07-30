for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
  let ans = document.querySelectorAll(".ans")[i];
  let contentItems = document.querySelectorAll(".content-items")[i];
  let quesHeading = document.querySelectorAll(".content-items h3")[i];
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var btnContent = this.innerHTML;

    this.classList.add("active");

    setTimeout(() => {
      if (btnContent === "+") {
        this.textContent = "‒";
        ans.style.maxHeight = "200px";
        ans.style.padding = "10px";
        quesHeading.classList.add("h3-active");
      } else if (btnContent === "‒") {
        this.textContent = "+";
        ans.style.maxHeight = "0";
        ans.style.padding = "0";
        quesHeading.classList.remove("h3-active");
      }

      this.classList.remove("active");
    }, 500);
  });
}
