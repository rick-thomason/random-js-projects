const button = document.getElementById('btn')
const nav = document.getElementById('nav')

button.addEventListener('click', () => {
  nav.classList.toggle('active')
  btn.classList.toggle('active')
})
