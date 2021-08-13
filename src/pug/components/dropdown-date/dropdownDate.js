import datepicker from 'air-datepicker';

const dropdownDate=(props)=>{
  console.log('start dropdownDate');
  const nodeDropdownDate=document.querySelector(`#${props.id}`);

  let dataInput =$(`#${props.id}`).find('[data-action="input-date"]');
  if(dataInput.length===0) dataInput=dataInput.prevObject;

  let expand=false;

  const dateFormat = props.dateFormat
    ? props.dateFormat
    :'';

  dataInput.datepicker({
    inline: props.inline,
    autoClose:true,
    navTitles: {
      days: 'MM yyyy',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2'
    },
    classes: 'datepicker-metalamp',
    prevHtml:`
        <span 
            class="material-icons md-24" 
            style="transform: rotate(180deg)"
            >arrow_forward
        </span>`,
    nextHtml:`
        <span 
            class="material-icons md-24" 
            >arrow_forward
        </span>`,
    range: props.range,
    onRenderCell: function(date, cellType) {
      return {
          html: `<span>${date.getDate()}</span>`,
          classes: '',
          disabled: false
        }
      },
      // offset: 30,
    // multipleDates: 2,
    // multipleDatesSeparator: ' - ',
    // minDate: new Date(),
    // language: 'ru',
    dateFormat: dateFormat,
    // firstDay: 0,
    /*toggleSelected: false,
    range: true,
    timepicker: true,
    minHours: 9,
    maxHours: 17,
    minutesStep: 5,*/
    // view: 'months',
    clearButton: true,
    multipleDatesSeparator: ' - ',
    // todayButton: true,
    // onSelect(formattedDate, date, inst) {
    //   inst.hide();
    //   // alert(date);
    // },
    // altField: $('#alt'),
    // altFieldDateFormat: 'yyyy-mm-dd'
    // position: 'bottom left'
  });

  addButtonAplly();

  nodeDropdownDate.addEventListener("click", headerClick);

  function headerClick(events){
    if (events.target.dataset.action==='expand'){
      expand=!expand;
      expand
        ?dataInput.datepicker().data('datepicker').show()
        :dataInput.datepicker().data('datepicker').hide();
    }

    if (events.target.dataset.action==='apply') {
      console.log("кнопка применить");
    }
    console.log(events.target.dataset);
  }

  function addButtonAplly(){
    const buttons=$('.datepicker--buttons');
    buttons.each((index)=>{
      const col=$(buttons[index]).find('.datepicker--button_apply').length;
      if (col===0) {
        $(buttons[index]).append('<span class="datepicker--button_apply" data-action="apply">Применить</span>')
        $(buttons[index]).click(headerClick);
      }
    });
  }


};
export default dropdownDate;

//<span class="datepicker--button" data-action="clear">Очистить</span>
