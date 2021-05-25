const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const popupContainer = document.getElementById('container')

openBtn.addEventListener('click', () => {
  popupContainer.classList.add('active')
})

closeBtn.addEventListener('click', () => {
  popupContainer.classList.remove('active')
})
