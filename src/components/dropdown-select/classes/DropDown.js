export class DropDown {
  constructor(node) {
    this.node = node;
    this.MAX_COUNTER = 9;
    this.nodeCountersValue = node.querySelectorAll('[data-counter-value]');
    this.nodeInput = node.querySelector('.dropdown__input');
    node.addEventListener('click', this.headerClick.bind(this));
    this.setInputValue();
  };

  headerClick(event) {
    event.preventDefault();

    const actionCounter = event.target.dataset.actionCounter;
    const actionButton = event.target.dataset.actionButton;

    if (actionCounter) {
      const item = parseInt(event.target.dataset.item);
      const node = this.nodeCountersValue[item];
      const value = this.getCounterValue(node);
      switch (actionCounter) {
        case 'add':
          (value < this.MAX_COUNTER)
            ? this.setCounterValue(node, value + 1)
            : this.MAX_COUNTER;
          break;
        case 'sub':
          (value > 0)
            ? this.setCounterValue(node, value - 1)
            : 0;
          break;
      }
      this.setInputValue();
    }

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

  getCounterValue(node) {
    return parseInt(node.dataset.counterValue);
  }

  setCounterValue(node, value) {
    node.dataset.counterValue = value;
    node.textContent = value;
  }

  selectWord(numbers, words) {
    return numbers.map((number, index) => {
      if (number === 1 || number === 21) return words[index][0];
      if ((number > 1 && number < 5) || (number > 21 && number < 25)) return words[index][1];
      if ((number === 0) || (number >= 5 && number < 21) || (number >= 25 && number <= 30)) return words[index][2];
    });
  }

  setInputValue() {

  }

  clearCounter() {

  }

  closeOptions() {

  }
}

