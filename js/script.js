const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const toggleColors = document.getElementById("toggle-colors");
const rootStyles = document.documentElement.style;

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (!toggleIcon.src.includes("moon.svg")) {
        toggleIcon.src = "icons/moon.svg";
        toggleText.textContent = "Dark Mode";
    } else {
        toggleIcon.src = "img/sun-512.png";
        toggleText.textContent = "Light Mode";
    }
});

toggleColors.addEventListener("click", (e) => {
    if (e.target.dataset.color) {
        rootStyles.setProperty("--primary-color", e.target.dataset.color);
    }
});
