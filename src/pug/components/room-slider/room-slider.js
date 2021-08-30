import sliderRoom from "swiper";

const roomSlider = () => {
  console.log('run roomSlider');

  const slider = new sliderRoom('.swiper-room', {
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    observer: true,
    observeParents: true,

  });


};

export default roomSlider;
