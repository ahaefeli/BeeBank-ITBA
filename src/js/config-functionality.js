export default function configFuncionality()
{

    const accordions = document.querySelectorAll('.accordion');
    const accordionsTitles = document.querySelectorAll('.accordion-title');

    console.log(accordions)
    console.log(accordionsTitles)
    
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
    
}

