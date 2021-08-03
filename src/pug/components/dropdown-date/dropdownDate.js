import datepicker from 'air-datepicker';

const dropdownDate=(state)=>{
  console.log('start dropdownDate');
  const nodeDropdownDate=document.querySelector(`#${state.id}`);

  let dataInput =$(`#${state.id}`).find('[data-action="input-date"]');
  if(dataInput.length===0) dataInput=dataInput.prevObject;
  console.log(dataInput);

  let expand=false;

  dataInput.datepicker({
    inline: state.inline,
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
    range: state.range,
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
    // dateFormat: 'yyyy-mm-dd',
    // firstDay: 0,
    /*toggleSelected: false,
    range: true,
    timepicker: true,
    minHours: 9,
    maxHours: 17,
    minutesStep: 5,*/
    // view: 'months',
    clearButton: true,
    todayButton: true,
    // onSelect(formattedDate, date, inst) {
    //   inst.hide();
    //   // alert(date);
    // },
    // altField: $('#alt'),
    // altFieldDateFormat: 'yyyy-mm-dd'
    // position: 'bottom left'
  });

  nodeDropdownDate.addEventListener("click", headerClick);

  function headerClick(events){
    if (events.target.dataset.action==='expand'){
      expand=!expand;
      expand
        ?dataInput.datepicker().data('datepicker').show()
        :dataInput.datepicker().data('datepicker').hide();
    }
  }
};
export default dropdownDate;
