const readmoreBtn = document.querySelectorAll('.read-more')
const readmoreText = document.querySelector('.read-more__text')
readmoreBtn.forEach((elem) =>
  elem.addEventListener('click', function () {
    if (window.innerWidth < 768) {
      document
        .querySelectorAll('.text__add')
        .forEach((elem) => elem.classList.toggle('text--unactive'))
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      document
        .querySelectorAll('.text__dop')
        .forEach((elem) => elem.classList.toggle('text__dop--unactive'))
    }
    if (readmoreText.innerText == 'Читать далее') {
      readmoreText.innerText = 'Скрыть'
    } else if (readmoreText.innerText == 'Скрыть') {
      readmoreText.innerText = 'Читать далее'
    }
  })
)
