import './dropdown-select.scss'

import {DropDownThings} from "../dropdown-select/classes/DropDownThigs";
import {DropDownPeople} from "../dropdown-select/classes/DropDownPeople";

const dropdownSelect = (node) => {
  const variant = node.dataset.variant;
  const buttonExpand = node.querySelector('[data-action=expand]');
  const nodeOptionsWrap = node.querySelector('.dropdown__wrap-options');
  buttonExpand.onclick = () => {
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

(() => {
  const dropdownNodes = document.querySelectorAll('[data-type="dropdown-select"]');
  dropdownNodes.forEach(((node) => dropdownSelect(node)));
})();
