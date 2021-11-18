import './dropdown-date-range.scss'
import AirDatepicker from "air-datepicker";
import svgArrowBack from "src/components/calendar/img/arrow_back.svg";
import svgArrowForward from "src/components/calendar/img/arrow_forward.svg";

const dateRange=(node) => {

  const expandNode = node.querySelectorAll('[data-action="expand"]');
  const inputNodes = node.querySelectorAll('input');
  const inputNodeMin = inputNodes[0];
  const inputNodeMax = inputNodes[1];

  let dpMin, dpMax;

  let button = {
    content: 'Применить',
    onClick: (dp) => {
      dp.hide();
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
    autoClose: true,
  };

  dpMin = new AirDatepicker(inputNodeMin,{...optionsDef,
    onSelect({date}) {
        dpMax.update({
          minDate: date
        })
    }
  });

  dpMax = new AirDatepicker(inputNodeMax, {...optionsDef,
    onSelect({date}) {
      dpMin.update({
        maxDate: date
      })
    }
  });

  expandNode[0].onclick = (event) => {
    dpMax.hide();
    dpMin.show();
  };

  expandNode[1].onclick = (event) => {
    dpMin.hide();
    dpMax.show();
  }
};

(() => {
  const dateRangeNodes = document.querySelectorAll('[data-type="date-range"]');
  dateRangeNodes.forEach(((node) => dateRange(node)));
})();
