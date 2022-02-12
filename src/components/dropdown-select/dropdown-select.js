import './dropdown-select.scss'
import {DropDownThings} from "./classes/DropDownThigs";
import {DropDownPeople} from "./classes/DropDownPeople";

const dropdownSelect = (node) => {
  const variant = node.dataset.variant;
  const buttonExpand = node.querySelector('[data-action=expand]');

  buttonExpand.onclick = () => {
    node.classList.toggle('dropdown_open');
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

