//NAV-BAR-MOBILE
const navButton = document.getElementById("nav-button")
const sideBar = document.querySelector(".nav-content")
const closeButton = document.getElementById("close-button")

navButton.addEventListener("click", () =>{
    sideBar.classList.add('nav-active');
});

closeButton.addEventListener("click", () =>{
    sideBar.classList.remove('nav-active');
})


//ACORDEÃO
const accordionItems = document.querySelectorAll(".accordion-item")
const services = document.getElementById('services')

accordionItems.forEach(item => {
    const toggleButton = item.querySelector(".accordion-header")


    toggleButton.addEventListener("click", (event) =>{
        event.stopPropagation();

        accordionItems.forEach(i => {
            if (i !== item){
                i.classList.remove('active')
        }
    });
    item.classList.toggle('active')

    const anyActive = Array.from(accordionItems).some(i => i.classList.contains('active'));
        if (anyActive) {
            services.classList.add('active');
        } else {
            services.classList.remove('active');
        }
    }); 
})