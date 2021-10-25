const dropdown = (state) => {
  //
  // let {
  //   id = null,
  //   initValue = null,
  //   isExpand = false,
  //   needButtons = false
  // } = state;
  //
  // if (id === null) {
  //   console.log("id не задан");
  //   return -1;
  // }
  //
  // if (initValue === null) {
  //   console.log("initValue не задан");
  //   return -1;
  // }
  //
  // const nodeDropDown = document.getElementById(id);
  // const nodeOptions = nodeDropDown.querySelector('.dropdown__wrap-options');
  // const nodeCountersValue = nodeDropDown.querySelectorAll('[data-counter-value]');
  // const nodeInput = nodeDropDown.querySelector('.dropdown__input');
  //
  // const buttonClear = nodeDropDown.querySelector('[data-action=clear]')
  //   ?nodeDropDown.querySelector('[data-action=clear]')
  //   :null;
  //
  // const buttonApply = nodeDropDown.querySelector('[data-action=apply]')
  //   ?nodeDropDown.querySelector('[data-action=apply]')
  //   :null;
  //
  // init();
  //
  // function init() {
  //
  //   isExpand
  //     ? nodeOptions.style.display = "block"
  //     : nodeOptions.style.display = "none";
  //
  //   for (let i = 0; i < nodeCountersValue.length; i++) {
  //     nodeCountersValue[i].textContent = initValue[i].value;
  //     nodeCountersValue[i].dataset.counterValue = initValue[i].value;
  //   }
  //
  //   nodeDropDown.addEventListener('click', headerClick);
  //
  //   viewInput();
  //
  // }
  //
  // function toggleExpand() {
  //   isExpand = !isExpand;
  //   isExpand
  //     ? nodeOptions.style.display = "block"
  //     : nodeOptions.style.display = "none";
  // }
  //
  // function headerClick(event) {
  //
  //   event.target.dataset.action === 'expand'
  //     ? toggleExpand()
  //     : null;
  //
  //   event.target.dataset.action === 'add'
  //     ? addValue(nodeCountersValue[event.target.dataset.item])
  //     : null;
  //
  //   event.target.dataset.action === 'sub'
  //     ? subValue(nodeCountersValue[event.target.dataset.item])
  //     : null;
  //
  //   event.target.dataset.action === 'apply'
  //     ? toggleExpand()
  //     : null;
  //
  //   event.target.dataset.action === 'clear'
  //     ? clearValue()
  //     : null;
  //
  // }
  //
  // function clearValue(){
  //   for (let i = 0; i < nodeCountersValue.length; i++) {
  //     initValue[i].value=0;
  //     nodeCountersValue[i].textContent = 0;
  //     nodeCountersValue[i].dataset.counterValue = 0;
  //   }
  //   viewInput();
  // }
  //
  // function subValue(node) {
  //   const value = Number(node.textContent);
  //   console.log(value === 0);
  //   value === 0
  //     ? null
  //     : node.textContent--;
  //   node.dataset.counterValue = node.textContent;
  //   viewInput();
  // }
  //
  // function addValue(node) {
  //   const value = Number(node.textContent);
  //   console.log(value === 0);
  //   value === 9
  //     ? null
  //     : node.textContent++;
  //   node.dataset.counterValue = node.textContent;
  //   viewInput();
  // }
  //
  // function viewInput() {
  //   if (needButtons) {
  //     const value = getSumGuests(nodeCountersValue);
  //     value===0
  //       ? (
  //         nodeInput.value = 'Сколько гостей',
  //         buttonClear.style.visibility='hidden'
  //       )
  //       : (
  //         nodeInput.value = `Гостей ${value}`,
  //         buttonClear.style.visibility='visible'
  //       )
  //   } else {
  //     nodeInput.value = getFurniture(nodeCountersValue);
  //   }
  // }
  //
  // function getSumGuests(node){
  //   let value = 0;
  //   for (let i = 0; i < node.length; i++) {
  //     value += Number(node[i].dataset.counterValue);
  //   }
  //   return value;
  // }
  //
  // function getFurniture(node){
  //   let str = '';
  //   for (let i = 0; i < node.length; i++) {
  //     str += initValue[i].itemName + ' ' + node[i].dataset.counterValue + ', '
  //   }
  //   return str;
  // }

};

