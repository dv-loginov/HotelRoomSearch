import pagination from './paginationPlugin'

const pag = () => {
  console.log('run pag');

  const container = $('#pag-container');

  container.pagination({
    dataSource: function (done) {
      var result = [];
      for (var i = 1; i < 220; i++) {
        result.push(i);
      }
      done(result);
    },
    pageSize: 12,
    pageRange: 1,
    prevText: '<span class="material-icons" style="transform: rotate(180deg)">arrow_forward</span>',
    nextText: '<span class="material-icons">arrow_forward</span>',
    showPrevious: true,
    showNext: true,
    autoHidePrevious: true,
    autoHideNext: true,
    callback: function (data, pagination) {
      // console.log('data',data);
      //  console.log('pagination', pagination);
      // const html = `<span>${data}<\span>`;
      // $('#data-container').html(html);
    },
    footer:function(currentPage, totalPage, totalNumber,pagination){
      const pageSize= Math.round(totalNumber/totalPage);

      const start = (currentPage*pageSize-pageSize)+1;
      const end = currentPage*pageSize > totalNumber
                  ?totalNumber
                  :currentPage*pageSize;

      return(`      
        <div class="paginationjs__footer">
            <span>${start}</span>
            <span>-</span>
            <span>${end}</span>
            <span> из ${totalNumber} выриантов</span>
        </div>
      `);
    },
  });

  container.addHook('afterRender', function () {
    // function body

  });

};

export default pag;
