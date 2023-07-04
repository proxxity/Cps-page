const buttonBurger = document.querySelector('.button__burger')
const burgerMenu = document.querySelector('.burger-menu')
const buttonClose = document.querySelector('.button__close')
const page = document.querySelector('.page')
const background = document.querySelector('.background')
const buttonRepair = document.querySelectorAll('.button__repair')
const feedback = document.querySelector('.feedback-page')
const feedbackClose = document.querySelector('.feedback-btn')

buttonBurger.onclick = function () {
  burgerMenu.classList.toggle('burger-menu--active')
  buttonBurger.classList.toggle('button__burger--active')
  page.classList.toggle('page--active')
  background.classList.toggle('background--active')
}

buttonClose.onclick = function () {
  burgerMenu.classList.toggle('burger-menu--active')
  buttonBurger.classList.toggle('button__burger--active')
  page.classList.toggle('page--active')
  background.classList.toggle('background--active')
}

buttonRepair.forEach(function (element) {
  element.addEventListener('click', function () {
    feedback.classList.toggle('feedback-page--active')
    buttonRepair.classList.toggle('button-repair--active')
    page.classList.toggle('page--active')
    background.classList.toggle('background--active')
  })
})

feedbackClose.onclick = function () {
  feedback.classList.toggle('feedback-page--active')
  buttonRepair.classList.toggle('button-repair--active')
  page.classList.toggle('page--active')
  background.classList.toggle('background--active')
}

const buttonCall = document.querySelectorAll('.button__call')
const call = document.querySelector('.call-page')
const callClose = document.querySelector('.call-btn')

buttonCall.forEach(function (element) {
  element.addEventListener('click', function () {
    call.classList.toggle('call-page--active')
    buttonCall.classList.toggle('button-call--active')
    page.classList.toggle('page--active')
    background.classList.toggle('background--active')
  })
})

buttonCall.onclick = function () {}
callClose.onclick = function () {
  call.classList.toggle('call-page--active')
  buttonCall.classList.toggle('button-call--active')
  page.classList.toggle('page--active')
}
