export class DropDown {
  constructor(node) {
    this.MAX_COUNTER = 9;
    this.nodeCountersValue = node.querySelectorAll('[data-counter-value]');
    this.nodeInput = node.querySelector('.dropdown__input');
    node.addEventListener('click', this.headerClick.bind(this));
  };

  headerClick(event) {
    const action = event.target.dataset.action;

    if (action !== 'expand' && action !== undefined) {
      const item = parseInt(event.target.dataset.item);
      const node = this.nodeCountersValue[item];
      const value = this.getCounterValue(node);

      switch (action) {
        case 'add':
          (value < this.MAX_COUNTER)
            ? this.setCounterValue(node, value + 1)
            : this.MAX_COUNTER;
          this.setInputValue();
          break;
        case 'sub':
          (value > 0)
            ? this.setCounterValue(node, value - 1)
            : 0;
          this.setInputValue();
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

  setInputValue() {
    console.log('вывод в инпут');
  }


}

