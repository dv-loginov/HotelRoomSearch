import './dropdown.scss';
import {DropDownThings} from "./classes/DropDownThigs";
import {DropDownPeople} from "./classes/DropDownPeople";

const dropdown = (node) => {
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
  const dropdownNodes = document.querySelectorAll('.dropdown-with-options[data-type="dropdown"]');
  dropdownNodes.forEach(((node) => dropdown(node)));
})();
