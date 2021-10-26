import {DropDown} from "./DropDown";

export class DropDownPeople extends DropDown {
  constructor(node) {
    super(node);
    this.name = 'DropDownPeople';
    console.log(this.name)
  }

  setInputValue() {
    console.log('вывод в инпут DropDownPeople');
  }
}
