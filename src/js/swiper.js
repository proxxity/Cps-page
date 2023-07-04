import Swiper from 'swiper'

import { Navigation, Pagination } from 'swiper'

Swiper.use([Navigation, Pagination])

function qe() {
  if (window.innerWidth <= 768) {
    showMore.style.display = 'none'
    hideMore.style.display = 'none'
  } else {
    showMore.style.display = 'flex'
  }
  if (window.innerWidth >= 768) {
    if (swiper) {
      swiper.destroy()
    }
  } else {
    if (!swiper) {
      swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  }
}
let swiper = null
let showMore = document.querySelector('.show-more')
let hideMore = document.querySelector('.hide-more')

window.addEventListener('resize', qe)
qe()
