import './menu.scss';

const menu = (node) => {

  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  if (isMobile.any()) {
    document.body.classList.add('_touch');

    const menuArrowsNodes = node.querySelectorAll("svg");
   console.log(menuArrowsNodes);
    menuArrowsNodes.forEach((menuArrow) => {
      menuArrow.onclick = (event) => {
        console.log('click');
        menuArrow.parentElement.classList.toggle('_active');
      }
    });

  } else {
    document.body.classList.add('_pc');
  }


  const iconMenuNode = node.querySelector('.menu__icon');
  const menuBodyNode = node.querySelector('.menu__body');

  if (iconMenuNode) {
    iconMenuNode.onclick = () => {
      document.body.classList.toggle('_lock');
      iconMenuNode.classList.toggle('_active');
      menuBodyNode.classList.toggle('_active');
    }
  }
};

(() => {
  const menuNodes = document.querySelectorAll('[data-type="menu"]');
  menuNodes.forEach(((node) => menu(node)));
})();
