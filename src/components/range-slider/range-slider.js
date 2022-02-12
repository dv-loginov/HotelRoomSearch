import '../../../node_modules/nouislider/dist/nouislider.css';
import './range-slider.scss'
import noUiSlider from 'nouislider';

const rangeSlider = (node) => {

  const scale=node.querySelector('[data-type="range-slider-scale"]');

  const rangeMin = initValue(node.dataset.rangeMin, 0);
  const rangeMax = initValue(node.dataset.rangeMax, 10000);
  const step = initValue(node.dataset.step,10);
  const start = initValue(node.dataset.start, rangeMin);
  const end = initValue(node.dataset.end,rangeMax);

  const inputMin = node.querySelector('[name="slider-input-min"]');
  const inputMax = node.querySelector('[name="slider-input-max"]');
  const viewMin = document.querySelector('[date-range-slider-value=min]');
  const viewMax = document.querySelector('[date-range-slider-value=max]');

  inputMin.value = start;
  inputMax.value = end;
  viewMin.innerText = start;
  viewMax.innerText = end;

  noUiSlider.create(scale, {
    start:[start,end],
    step: step,
    connect: true,
    range: {'min': rangeMin,'max': rangeMax},
  });

  scale.noUiSlider.on('update', (values, handle) => {
    if (handle) {
      inputMax.value = Math.trunc( values[handle] );
      viewMax.innerText = Math.trunc( values[handle] ) ;
    } else {
      inputMin.value = Math.trunc( values[handle] );
      viewMin.innerText = Math.trunc( values[handle] );
    }
  });
};

function initValue(value,defValue) {
  return isNaN(parseInt(value))
    ? defValue
    : parseInt(value);
}

(()=>{
  const sliderNodes=document.querySelectorAll('[data-type="range-slider"]');
  sliderNodes.forEach(((sliderNode)=>rangeSlider(sliderNode)));
})();
