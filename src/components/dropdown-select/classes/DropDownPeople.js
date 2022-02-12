import {DropDown} from "./DropDown";

export class DropDownPeople extends DropDown {
  constructor(node) {
    super(node);
    this.name = 'DropDownPeople';
    this.nodeButtons = node.querySelector('[data-type="buttons"]');
    this.nodeButtons.addEventListener('click', this.headerClickButtons.bind(this));
    this.nodeButtonClear = node.querySelector('[data-action-button="clear"]');
    this.setVisibility(this.nodeButtonClear, false);
    this.setInputValue();
  }

  headerClickButtons (event) {
    const actionButton = event.target.dataset.actionButton;
    if (actionButton) {
      switch (actionButton) {
        case 'clear':
          this.clearCounter();
          break;
        case 'apply':
          this.closeOptions();
          break;
      }
    }
  }

  setInputValue() {
    let str = 'Сколько гостей';
    const notBaby = this.getCounterValue(this.nodeCountersValue[0]) + this.getCounterValue(this.nodeCountersValue[1]);
    const baby = this.getCounterValue(this.nodeCountersValue[2]);
    const sum = notBaby + baby;

    sum > 0
      ? this.setVisibility(this.nodeButtonClear, true)
      : this.setVisibility(this.nodeButtonClear, false);

    if (sum > 0) {
      const declineWords = this.decline([notBaby, baby]);
      str = `${notBaby} ${declineWords[0]}, ${baby} ${declineWords[1]}`;
    }
    this.nodeInput.value = str;
  }

  decline(numbers) {
    const words = [
      ['гость', 'гостя', 'гостей'],
      ['младенец','младенца','младенцев']
    ];
    return this.selectWord(numbers, words);
  }

  closeOptions() {
    this.node.classList.toggle('dropdown_open');
  }

  clearCounter() {
    for (let i = 0; i < this.nodeCountersValue.length; i++) {
      this.setCounterValue(this.nodeCountersValue[i], 0);
    }
    this.setInputValue();
  }

  setVisibility(node, visibility) {
    visibility === true
      ? node.style.visibility = "visible"
      : node.style.visibility = "hidden";
  }
}
