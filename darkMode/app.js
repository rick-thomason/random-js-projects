const btn = document.getElementById('btn')
const container = document.querySelector('.container')

function darkMode() {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    container.classList.toggle('dark')
    btn.classList.toggle('dark')
  })
}

darkMode()
