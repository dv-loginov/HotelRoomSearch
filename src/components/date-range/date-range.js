import './date-range.scss';
import AirDatepicker from "air-datepicker";
import svgArrowBack from "src/components/calendar/img/arrow_back.svg";
import svgArrowForward from "src/components/calendar/img/arrow_forward.svg";

const dateRange=(node) => {

  const inputNodes = node.querySelectorAll('input');
  const inputNodeMin = inputNodes[0];
  const inputNodeMax = inputNodes[1];
  const inputNodeDp = inputNodes[2];

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
    // autoClose: true,
    range: true,
    onSelect({date, formattedDate, datepicker}) {
      const opt = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      };

      const min = datepicker.selectedDates[0]
        ? datepicker.selectedDates[0].toLocaleString('ru', opt)
        : "ДД.ММ.ГГГГ";

      const max = datepicker.selectedDates[1]
        ? datepicker.selectedDates[1].toLocaleString('ru', opt)
      : "ДД.ММ.ГГГГ";

      inputNodeMin.value = min;
      inputNodeMax.value = max;
    },
  };

  let dpRange=new AirDatepicker(inputNodeDp, options);

  node.onclick=(event)=>{
    console.log("click", event.target);
    dpRange.show();
  };
};

(() => {
  const dateRangeNodes = document.querySelectorAll('[data-type="date-range"]');
  dateRangeNodes.forEach(((node) => dateRange(node)));
})();



