import './scss/main.scss';
import dropdown from './pug/components/dropdown/dropdawn';
import checkBoxList from './pug/components/checkbox-list/checkBoxList';
import rangeSlider from './pug/components/range-slider/range-slider';
import pag from './pug/components/pag/pag';
import dropdownDate from './pug/components/dropdown-date/dropdownDate';
import roomSlider from "./pug/components/room-slider/room-slider";


console.log('start run');

dropdown({
  id: 'dropdown-furniture',
  initValue: [
    {itemName: 'спальни', value: 2},
    {itemName: 'кровати', value: 2},
    {itemName: 'ванные комнаты', value: 0}
  ],
  isExpand: false,
});

dropdown({
  id: 'dropdown-guests-noinit',
  initValue: [
    {itemName: 'взрослые', value: 0},
    {itemName: 'дети', value: 0},
    {itemName: 'младенцы', value: 0}
  ],
  isExpand: false,
  needButtons: true
});

dropdown({
  id: 'form-search-guests',
  initValue: [
    {itemName: 'взрослые', value: 0},
    {itemName: 'дети', value: 0},
    {itemName: 'младенцы', value: 0}
  ],
  isExpand: false,
  needButtons: true
});

dropdown({
  id: 'dropdown-guests-init',
  initValue: [
    {itemName: 'взрослые', value: 2},
    {itemName: 'дети', value: 1},
    {itemName: 'младенцы', value: 0}
  ],
  isExpand: false,
  needButtons: true
});

checkBoxList({
  id:"checkbox-list",
  // isExpand: true,
});

rangeSlider({
  id:'range-slider',
  step: 500,
  range:{
    'min':0,
    'max':20000,
  },
  start:[4000, 10000]
});

pag();

dropdownDate({id:'dropdown-date-1'});
dropdownDate({id:'dropdown-date-2'});
dropdownDate({
  id:'calendar',
  inline:true,
  range: true,
});
dropdownDate({
  id:'dropdown-date-filter',
  range: true,
  dateFormat: 'd M',
});

dropdownDate({id:'form-search-start'});
dropdownDate({id:'form-search-end'});
dropdownDate({id:'date-of-birth'});

dropdownDate({id:'form-booking-start'});
dropdownDate({id:'form-booking-end'});

dropdown({
  id: 'form-booking-guests',
  initValue: [
    {itemName: 'взрослые', value: 2},
    {itemName: 'дети', value: 1},
    {itemName: 'младенцы', value: 0}
  ],
  isExpand: false,
  needButtons: true
});

roomSlider();
