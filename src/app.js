import './scss/main.scss';
import dropdown from './pug/components/dropdown/dropdawn';
import checkBoxList from "src/pug/components/checkbox-list/checkBoxList";
import rangeSlider from "src/pug/components/range-slider/range-slider";

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
