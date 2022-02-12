import './date-filter.scss'
import svgArrowBack from "src/components/calendar/img/arrow_back.svg";
import svgArrowForward from "src/components/calendar/img/arrow_forward.svg";
import AirDatepicker from "air-datepicker";

const dateFilter = (node) =>{

  const inputNode = node.querySelector('input');

  let button = {
    content: 'Применить',
    onClick: (dp) => {
      dp.hide();
    }
  };

  const options = {
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
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'dd MMM'

  };

  new AirDatepicker(inputNode, options);
};

(() => {
  const dateFilterNodes = document.querySelectorAll('[data-type="date-filter"]');
  dateFilterNodes.forEach(((node) => dateFilter(node)));
})();
