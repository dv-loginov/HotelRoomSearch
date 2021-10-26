import './dropdown.scss';
import {DropDownThings} from "./classes/DropDownThigs";
import {DropDownPeople} from "./classes/DropDownPeople";

const dropdown = (node) => {
  const variant = node.dataset.variant;
  const buttonExpand = node.querySelector('[data-action=expand]');
  const nodeOptionsWrap = node.querySelector('.dropdown__wrap-options');
  buttonExpand.onclick = (event) => {
    nodeOptionsWrap.classList.toggle('dropdown__wrap-options-open');
  };
  switch (variant) {
    case 'things':
      new DropDownThings(node);
      break;
    case 'people':
      new DropDownPeople(node);
      break;
    default:
      console.log('Ошибка: не могу найти подходяший елемент');
  }
};

//
//   init();
//
//   // test function
//   setInputValue('11111111111111');
//   setCounterValue(nodeCountersValue[0],9);
//   console.log(getCounterValue(nodeCountersValue[1]));
// // end test


// function init() {
//
//   // for (let i = 0; i < nodeCountersValue.length; i++) {
//   //   nodeCountersValue[i].textContent = initValue[i].value;
//   //   nodeCountersValue[i].dataset.counterValue = initValue[i].value;
//   // }
//   //
//   // nodeDropDown.addEventListener('click', headerClick);
//   //
//   // viewInput();
// }
//
// function setInputValue(value) {
//   nodeInput.value=value;
// }
//

// const buttonClear = nodeDropDown.querySelector('[data-action=clear]')
//   ?nodeDropDown.querySelector('[data-action=clear]')
//   :null;
//
// const buttonApply = nodeDropDown.querySelector('[data-action=apply]')
//   ?nodeDropDown.querySelector('[data-action=apply]')
//   :null;
//
// init();
//

//
// function headerClick(event) {
//
//
//   event.target.dataset.action === 'add'
//     ? addValue(nodeCountersValue[event.target.dataset.item])
//     : null;
//
//   event.target.dataset.action === 'sub'
//     ? subValue(nodeCountersValue[event.target.dataset.item])
//     : null;
//
//   event.target.dataset.action === 'apply'
//     ? toggleExpand()
//     : null;
//
//   event.target.dataset.action === 'clear'
//     ? clearValue()
//     : null;
//
// }
//
// function clearValue(){
//   for (let i = 0; i < nodeCountersValue.length; i++) {
//     initValue[i].value=0;
//     nodeCountersValue[i].textContent = 0;
//     nodeCountersValue[i].dataset.counterValue = 0;
//   }
//   viewInput();
// }
//
// function subValue(node) {
//   const value = Number(node.textContent);
//   console.log(value === 0);
//   value === 0
//     ? null
//     : node.textContent--;
//   node.dataset.counterValue = node.textContent;
//   viewInput();
// }
//
// function addValue(node) {
//   const value = Number(node.textContent);
//   console.log(value === 0);
//   value === 9
//     ? null
//     : node.textContent++;
//   node.dataset.counterValue = node.textContent;
//   viewInput();
// }
//
// function viewInput() {
//   if (needButtons) {
//     const value = getSumGuests(nodeCountersValue);
//     value===0
//       ? (
//         nodeInput.value = 'Сколько гостей',
//         buttonClear.style.visibility='hidden'
//       )
//       : (
//         nodeInput.value = `Гостей ${value}`,
//         buttonClear.style.visibility='visible'
//       )
//   } else {
//     nodeInput.value = getFurniture(nodeCountersValue);
//   }
// }
//
// function getSumGuests(node){
//   let value = 0;
//   for (let i = 0; i < node.length; i++) {
//     value += Number(node[i].dataset.counterValue);
//   }
//   return value;
// }
//
// function getFurniture(node){
//   let str = '';
//   for (let i = 0; i < node.length; i++) {
//     str += initValue[i].itemName + ' ' + node[i].dataset.counterValue + ', '
//   }
//   return str;
// }


(() => {
  const dropdownNodes = document.querySelectorAll('.dropdown-with-options[data-type="dropdown"]');
  dropdownNodes.forEach(((node) => dropdown(node)));
})();
