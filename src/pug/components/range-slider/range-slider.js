import noUiSlider from 'nouislider';

const rangeSlider = (state) => {
  const range = state.range;
  const id = state.id;
  const step = state.step;
  let start = state.start;

  const inputMin = document.getElementById("range-slider--min");
  const inputMax = document.getElementById("range-slider--max");

  const viewMin = document.querySelector('[data-range-slider-value=min]');
  const viewMax = document.querySelector('[data-range-slider-value=max]');

  const slider = document.getElementById(id);

  inputMin.value = start[0];
  inputMax.value = start[1];
  viewMin.innerText = start[0];
  viewMax.innerText = start[1];

  noUiSlider.create(slider, {
    start,
    step: step,
    connect: true,
    range,
  });

  slider.noUiSlider.on('update', (values, handle) => {
    if (handle) {
      inputMax.value = Math.trunc( values[handle] );
      viewMax.innerText = Math.trunc( values[handle] ) ;
    } else {
      inputMin.value = Math.trunc( values[handle] );
      viewMin.innerText = Math.trunc( values[handle] );
    }
  });
};

export default rangeSlider;
