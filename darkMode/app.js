const btn = document.querySelector('button')
const container = document.querySelector('.container')

function darkMode() {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btn.classList.toggle('white-background')
    container.classList.toggle('dark')
  })
}

darkMode()
