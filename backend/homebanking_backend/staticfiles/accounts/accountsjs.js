document.addEventListener("DOMContentLoaded", function () {
    const logButtons = document.querySelectorAll('.log-on');
    const cbus = document.querySelectorAll('.account-cbu');
    var clipboardIcons = document.querySelectorAll('.bi-clipboard');
    for (let i = 0; i < cbus.length; i++) {
        const cbu = cbus[i];

        // Copy the element and change the icon
        cbu.addEventListener("click", () => {
            
            cbuText = cbu.textContent;
            navigator.clipboard.writeText(cbuText);

            function changeIcon(){
                if (clipboardIcons[i].classList.contains('bi-clipboard')){
                    clipboardIcons[i].classList.remove('bi-clipboard');
                    clipboardIcons[i].classList.add('bi-clipboard-check');
                } else {
                    clipboardIcons[i].classList.remove('bi-clipboard-check');
                    clipboardIcons[i].classList.add('bi-clipboard');
                }
            };
            changeIcon();
            setTimeout(changeIcon, 1500);
        });
    };

    for (let i = 0; i < logButtons.length; i++) {
        const element = logButtons[i];
        
        element.addEventListener('click', ()=>{
            window.location.href='l-home.html'
        })
        
    }
});

