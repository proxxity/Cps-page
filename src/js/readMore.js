const showMoreBtn = document.getElementById('show-more-btn')
const hideBtn = document.getElementById('hide-more-btn')
const hiddenSlides = document.querySelectorAll('.brand-slide.hidden')

const showMoreRepair = document.getElementById('repair__show-more')
const hide = document.getElementById('repair__show-hide')
const hiddenSlide = document.querySelectorAll('.slide-brand.hidden')
showMoreBtn.addEventListener('click', function () {
  hiddenSlides.forEach(function (slide) {
    slide.classList.remove('hidden')
  })
  showMoreBtn.style.display = 'none'
  hideBtn.style.display = 'inline-block'
})

hideBtn.addEventListener('click', function () {
  hiddenSlides.forEach(function (slide) {
    slide.classList.add('hidden')
  })
  showMoreBtn.style.display = 'inline-block'
  hideBtn.style.display = 'none'
})

showMoreRepair.addEventListener('click', function () {
  hiddenSlide.forEach(function (slide) {
    slide.classList.remove('hidden')
  })
  showMoreRepair.style.display = 'none'
  hide.style.display = 'inline-block'
})

hide.addEventListener('click', function () {
  hiddenSlide.forEach(function (slide) {
    slide.classList.add('hidden')
  })
  showMoreRepair.style.display = 'inline-block'
  hide.style.display = 'none'
})
