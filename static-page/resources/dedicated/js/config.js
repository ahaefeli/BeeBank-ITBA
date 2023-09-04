document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll('.accordion');
    const accordionsTitles = document.querySelectorAll('.accordion-title');
    for (let i = 0; i < accordions.length; i++) {
        const accordion = accordions[i];
        const title = accordionsTitles[i];
        title.addEventListener("click", ()=>{
        if (accordion.classList.contains("show-content")) {
            accordion.classList.remove('show-content')
        } else {
            accordion.classList.add('show-content')
        }
    })
    }
});

