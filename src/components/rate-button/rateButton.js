import './rate-button.scss'
import StarImg from './img/star.svg';
import StarBorderImg from './img/star_border.svg';

const rateButton = (node) => {
  node.onclick = (event) => {
    const numStars = event.target.dataset.numstar;
    const starsNode = node.querySelectorAll('span');
    starsNode.forEach( (star, index) => {
      index <= numStars
        ? star.innerHTML = StarImg
        : star.innerHTML = StarBorderImg;
    });
  };
};

(()=>{
  const rateButtonsNodes=document.querySelectorAll('[data-type="rating"]');
  rateButtonsNodes.forEach(((rateButtonsNode)=>rateButton(rateButtonsNode)));
})();
