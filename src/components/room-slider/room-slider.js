import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './room-slider.scss';

const roomSlider = (node) => {

  Swiper.use([Navigation, Pagination]);

  new Swiper(node, {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // modifierClass: 'room-'
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

(() => {
  const roomSliders =document.querySelectorAll('[data-type="room-slider"]');
  roomSliders.forEach(((node) => roomSlider(node)));
})();
