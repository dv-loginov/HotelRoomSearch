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
  isExpand: true,
});

