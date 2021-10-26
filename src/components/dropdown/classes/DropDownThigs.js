import {DropDown} from "./DropDown";

export class DropDownThings extends DropDown {
  constructor(node) {
    super(node);
    this.name = 'DropDownThings';
    console.log(this.name)
  }

  setInputValue() {
    console.log('вывод в инпут DropDownThings');
  }
}
