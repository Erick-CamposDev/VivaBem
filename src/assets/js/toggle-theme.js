const toggleButton = document.getElementById("toggleButton");
const toggleIcon = document.querySelector('.toggleIcon');
const lightModeImage = 'src/assets/imgs/icons/sun.svg';
const darkModeImage = 'src/assets/imgs/icons/moon.svg';
const dataTheme = document.documentElement;
const themeIcons = document.querySelectorAll('img[data-icon]');

toggleButton.addEventListener("click", () => {
    const currentTheme = dataTheme.getAttribute('data-theme');

    if (currentTheme === 'light'){
        dataTheme.setAttribute('data-theme', 'dark');
        toggleIcon.src = darkModeImage;
    } else{
        dataTheme.setAttribute('data-theme', 'light');
        toggleIcon.src = lightModeImage;
    }
});