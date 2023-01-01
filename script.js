(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

const arrow = document.querySelector(".btn-con img")
const themeBtn = document.querySelector(".theme-btn"),
    themeIcon = document.querySelector(".theme-btn img"),
    wallPic = document.querySelector("header .wall");
function darkMode() {
    themeBtn.addEventListener("click", () => {
        if (document.body.classList.contains("light-mode")) {
            themeIcon.src = "./img/darktheme.svg";
            arrow.src = "./img/bluearrow.png"
            themeBtn.title = "Nox!"
            wallPic.src = "./img/wallblue.png"
        } else {
            themeIcon.src = "./img/sunCrop.png";
            arrow.src = "./img/yellowarow.png"
            wallPic.src = "./img/wallorange.png"
        }
    })
}
darkMode();


// Add preloader
const loader = document.querySelector("#preloader");

window.addEventListener("load", () => {
    loader.style.display = "none"
});
