const burger = document.querySelector(".burger")
const navigation = document.querySelector(".navigation")
const closeBtn = document.querySelector(".navigation__close")
const mute = document.querySelector(".mute__checkbox")
const audio = new Audio("audio/waterTower.mp3")

burger.addEventListener("click", () => {
  navigation.classList.add("navigation_active")
})
closeBtn.addEventListener("click", () => {
  navigation.classList.remove("navigation_active")
})

try {
  const checkMute = () => {
  if (mute.checked) {
    audio.play().catch(() => {
      mute.checked = false
    })
  } else {
    audio.pause()
  }
}
if (mute) {
  setTimeout(checkMute, 2000)
}

mute.addEventListener("change", checkMute)
} catch {
  console.log("На странице с видео нет музыки")
}

try {
  const sliderThumbs = new Swiper(".slider-thumbs", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  centeredSlides: true,
  loopedSlides: 7
})

sliderThumbs.on("click", (swiper) => {
  swiper.slideTo(swiper.clickedIndex)
})

const sliderMain = new Swiper(".slider-main", {
  loop: true,
  loopedSlides: 7,
  spaceBetween: 10
})

sliderThumbs.controller.control = sliderMain
sliderMain.controller.control = sliderThumbs

const videos = document.querySelectorAll("video")

sliderMain.on("slideChange", () => {
  for (let i = 0; i < videos.length; i++) {
    videos[i].pause()
  }
})

const pagination = document.querySelector(".pagination")
const paginationBtn = document.querySelector(".pagination__arrow")

paginationBtn.addEventListener("click", () => {
  pagination.classList.toggle("pagination_active")
})
} catch {
  console.log("На этой странице нет слайдера")
}