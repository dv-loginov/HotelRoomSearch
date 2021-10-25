import Swiper, {Navigation, Pagination} from 'swiper';

const roomSlider = () => {
  console.log('run roomSlider');

  Swiper.use([Navigation, Pagination]);

  const slider = new Swiper('.swiper-room', {
    loop: true,
    pagination: {
      el: ".swiper-pag",
      clickable: true,
      modifierClass: 'room-'
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   });


};

export default roomSlider;
