import './scss/main.scss';
import dropdown from './pug/components/dropdown/dropdawn';
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


