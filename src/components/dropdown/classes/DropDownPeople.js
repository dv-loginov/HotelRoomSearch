import {DropDown} from "./DropDown";

export class DropDownPeople extends DropDown {
  constructor(node) {
    super(node);
    this.name = 'DropDownPeople';
  }

  setInputValue() {
    let str = 'Сколько гостей';
    const sum = this.sumPeople(this.nodeCountersValue);
    if (sum > 0) {
      const word = this.decline(sum);
      str = `${sum} ${word}`;
    }
    this.nodeInput.value = str;
  }

  sumPeople(nodes) {
    let sum = 0;
    for (let i = 0; i < nodes.length; i++) {
      sum += this.getCounterValue(nodes[i]);
    }
    return sum;
  }

  decline(number) {
    let str = '';
    if (number === 1 || number === 21) str = 'гость';
    if ((number > 1 && number < 5) || (number > 21 && number < 25)) str = 'гостя';
    if ((number >=5 && number < 21) || (number >=25 && number <=30)) str = 'гостей';
    return str;
  }

  closeOptions() {
    this.node.querySelector('.dropdown__wrap-options').classList.toggle('dropdown__wrap-options-open');
  }

  clearCounter() {
    for (let i = 0; i < this.nodeCountersValue.length; i++) {
      this.setCounterValue(this.nodeCountersValue[i],0);
    }
    this.setInputValue();
  }
}
