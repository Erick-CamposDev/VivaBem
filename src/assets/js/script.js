const accordionItems = document.querySelectorAll(".accordion-item")
const services = document.getElementById('services')

accordionItems.forEach(item => {
    const toggleButton = item.querySelector(".accordion-toggle")


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