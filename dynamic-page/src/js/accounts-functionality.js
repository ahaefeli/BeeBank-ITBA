export default function accountsFunctions() {
  const logButtons = document.querySelectorAll('.log-on');

  for (let i = 0; i < logButtons.length; i++) {
    const element = logButtons[i];

    element.addEventListener('click', () => {
      window.location.href = '/home'
    })

  }
}