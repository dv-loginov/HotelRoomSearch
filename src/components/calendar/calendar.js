import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './calendar.scss';
import svgArrowBack from './img/arrow_back.svg';
import svgArrowForward from './img/arrow_forward.svg';

const calendar = (node, opt = {range:true}) => {

  let button = {
    content: 'Применить',
    onClick: (dp) => {
      dp.onHide;
    }
  };

  const optionsDef = {
    prevHtml: svgArrowBack,
    nextHtml: svgArrowForward,
    navTitles: {
      days: 'MMMM yyyy',
    },
    onRenderCell({date, cellType, datepicker}) {
      let isDay = datepicker.currentView === 'days';
      let _date = date.getDate();
      return {
        html: isDay ? `<span>${_date}</span>` : false,
      }
    },
    buttons: ['clear', button],
  };

  let options={...optionsDef, ...opt};

  new AirDatepicker(node, options);
};

export {calendar}

(() => {
  const dropdownNodes = document.querySelectorAll('[data-type="calendar"]');
  dropdownNodes.forEach(((node) => calendar(node)));
})();
