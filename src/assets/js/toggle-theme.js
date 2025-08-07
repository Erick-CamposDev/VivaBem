const toggleButton = document.getElementById("toggleButton");
const toggleIcon = document.querySelector('.toggleIcon');
const lightModeImage = 'src/assets/imgs/icons/sun.svg';
const darkModeImage = 'src/assets/imgs/icons/moon.svg';
const dataTheme = document.documentElement;
const themeIcons = document.querySelectorAll('img[data-icon]');


//Salvar modo ao carregar página

const savedTheme = localStorage.getItem('theme') || 'light';
dataTheme.setAttribute('data-theme', savedTheme)

if (savedTheme === 'dark'){
    toggleIcon.src = darkModeImage
    toggleIcon.alt = 'Ícone de lua, Modo Escuro'
} else{
    toggleIcon.src = lightModeImage
    toggleIcon.alt = 'Ícone de sol, Modo Claro'
}


toggleButton.addEventListener("click", () => {
    const currentTheme = dataTheme.getAttribute('data-theme');

    toggleIcon.classList.add("fade-out")
    setTimeout(() =>{

    if (currentTheme === 'light'){
        dataTheme.setAttribute('data-theme', 'dark');
        toggleIcon.src = darkModeImage;
        toggleIcon.alt = "Ícone de lua, Modo Escuro"
        localStorage.setItem('theme', 'dark');
    } else{
        dataTheme.setAttribute('data-theme', 'light');
        toggleIcon.src = lightModeImage;
        toggleIcon.alt = "Ícone de sol, Modo claro"
        localStorage.setItem('theme', 'light');
    }

    toggleIcon.classList.remove("fade-out")
    }, 300);
});