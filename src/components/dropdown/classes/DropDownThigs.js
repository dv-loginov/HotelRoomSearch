import {DropDown} from "./DropDown";

export class DropDownThings extends DropDown {
  constructor(node) {
    super(node);
    this.name = 'DropDownThings';
   }

  setInputValue() {
    const bedroom = this.getCounterValue(this.nodeCountersValue[0]);
    const bed = this.getCounterValue(this.nodeCountersValue[1]);
    const bath = this.getCounterValue(this.nodeCountersValue[2]);
    const declineWords = this.decline([bedroom, bed, bath]);

    this.nodeInput.value = `${bedroom} ${declineWords[0]}, ${bed} ${declineWords[1]}, ${bath} ${declineWords[2]}`;
  }

  decline(numbers) {
    const words = [
      ['спальня', 'спальни', 'спален'],
      ['кровать', 'кровати', 'кроватей'],
      ['ванная комната', 'ванные комнаты', 'ванных комнат'],
    ];

    return numbers.map((number, index) => {
      if (number === 1) return words[index][0];
      if (number > 1 && number < 5) return words[index][1];
      if ((number === 0) || (number >= 5 && number < 10)) return words[index][2];
    });
  }
}
