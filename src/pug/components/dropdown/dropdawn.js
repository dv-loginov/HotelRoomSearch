const dropdown=(args)=>{
  let { id=null, initValue = [0,0,0], isExpand = false} = args;
  console.log(id, initValue, isExpand);

  if (id===null) {
    console.log("id не задан");
    return -1;
  }

  const nodeDropDown = document.getElementById(id);
  const nodeOptions = nodeDropDown.querySelector('.dropdown__wrap-options');
  const nodeCountersValue = nodeDropDown.querySelectorAll('[data-counter-value]');
  const nodeInput = nodeDropDown.querySelector('.dropdown__input');

  console.log(nodeDropDown);
  console.log(nodeOptions);
  // console.log(nodeCountersValue);

  init();

  function init(){
    console.log(`Init ${id}`);

    isExpand
      ? nodeOptions.style.display = 'block'
      : nodeOptions.style.display = 'none';

    for (let i = 0; i < nodeCountersValue.length; i++){
      nodeCountersValue[i].textContent = initValue[i].value;
      nodeCountersValue[i].dataset.counterValue = initValue[i].value;
      nodeCountersValue[i].previousElementSibling.dataset.item = i;
      nodeCountersValue[i].previousElementSibling.dataset.action = 'sub';
      nodeCountersValue[i].nextElementSibling.dataset.item = i;
      nodeCountersValue[i].nextElementSibling.dataset.action = 'add';
    }

    nodeDropDown.addEventListener('click', headerClick);

    viewInput();

  }

  function toggleExpand() {
    console.log('toggleExpand');
    isExpand=!isExpand;
    isExpand
      ? nodeOptions.style.display = 'block'
      : nodeOptions.style.display = 'none';
  }

  function headerClick(event){

    console.log(event.target);
    console.log(event.target.dataset);

    event.target.dataset.action==='expand'
      ? toggleExpand()
      : null;

    event.target.dataset.action==='add'
      ? addValue(nodeCountersValue[event.target.dataset.item])
      : null;

    event.target.dataset.action==='sub'
      ? subValue(nodeCountersValue[event.target.dataset.item])
      : null;
  }


  function subValue(node) {

    const value = Number(node.textContent);
    console.log(value===0);
    value === 0
      ? null
      : node.textContent--;
    node.dataset.counterValue=node.textContent;
    viewInput();
  }

  function addValue(node) {
    const value = Number(node.textContent);
    console.log(value===0);
    value === 9
      ? null
      : node.textContent++;
    node.dataset.counterValue=node.textContent;
    viewInput();
  }

  function viewInput(){
    console.log('viewInput');
    let str='';

    for (let i = 0; i < nodeCountersValue.length; i++){
      str+=initValue[i].itemName+' '+nodeCountersValue[i].dataset.counterValue + ', '
    }
    nodeInput.value=str;
  }


};


export default dropdown;
