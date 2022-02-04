import {DropDown} from "./DropDown";

export class DropDownPeople extends DropDown {
  constructor(node) {
    super(node);
    this.name = 'DropDownPeople';
  }
//FIXME скрывать кнопку "очистить при нулевом количестве гостей"
//FIXME считать младенцев отдельно

  setInputValue() {
    let str = 'Сколько гостей';
    const sum = this.sumPeople(this.nodeCountersValue);
    if (sum > 0) {
      const word = this.decline([sum]);
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

  decline(numbers) {
    const words = [
      ['гость', 'гостя', 'гостей'],
    ];
    return this.selectWord(numbers, words);
  }

  closeOptions() {
    this.node.classList.toggle('dropdown_open');
  }

  clearCounter() {
    for (let i = 0; i < this.nodeCountersValue.length; i++) {
      this.setCounterValue(this.nodeCountersValue[i],0);
    }
    this.setInputValue();
  }
}
