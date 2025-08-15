const servicesContainer = document.querySelectorAll('.services-container')

const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    })
}, {threshold: 0.1});

servicesContainer.forEach(service =>{
    observer.observe(service)
})

