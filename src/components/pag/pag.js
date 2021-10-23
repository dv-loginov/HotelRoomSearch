import 'paginationjs/dist/pagination.css';
import './pag.scss';
import forwardSvg from './img/arrow_forward.svg';
import backSvg from './img/arrow_back.svg';

const pag = (node) => {
  const containerPag = node.querySelector('.pagination-container');
  const containerData = node.querySelector('.data-container');

  const pageSize = isNaN(parseInt(containerData.dataset.pageSize))
    ? 1
    : parseInt(containerData.dataset.pageSize);

  $(containerPag).pagination({
    dataSource: function (done) {
      let result = [];
      for (let i = 1; i < 220; i++) {
        result.push(i);
      }
      done(result);
    },
    pageSize: pageSize,
    pageRange: 1,
    prevText: backSvg,
    nextText: forwardSvg,
    showPrevious: true,
    showNext: true,
    autoHidePrevious: true,
    autoHideNext: true,
    // callback: function (data, pag) {
    //   const html = `<span>${data}<\span>`;
    //   $(containerData).html(html);
    // },
    footer: function (currentPage, totalPage, totalNumber, pag) {
      const pageSize = Math.round(totalNumber / totalPage);

      const start = (currentPage * pageSize - pageSize) + 1;
      const end = currentPage * pageSize > totalNumber
        ? totalNumber
        : currentPage * pageSize;

      return (`
          <div class="paginationjs__footer">
              <span>${start}</span>
              <span>-</span>
              <span>${end}</span>
              <span> из ${totalNumber > 100 ? '100+' : totalNumber} выриантов</span>
          </div>
        `);
    },
  });
};

(() => {
  const paginationNodes = document.querySelectorAll('[data-type="pagination"]');
  paginationNodes.forEach(((paginationNode) => pag(paginationNode)));
})();
