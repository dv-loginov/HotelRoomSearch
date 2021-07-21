const checkBoxList = (args) => {

  let {
    id = null,
    isExpand = false,
  } = args;

  if (id === null) {
    console.log("id не задан");
    return -1;
  }

  const nodeCheckBoxList = document.getElementById(id);
  const nodeOptions = nodeCheckBoxList.querySelector('.checkbox-list__items');

  const nodeIco = nodeCheckBoxList.querySelector('[data-action=expand]').firstChild;

  init();

  function init() {
    isExpand
      ? nodeOptions.style.display = "block"
      : nodeOptions.style.display = "none";
    nodeCheckBoxList.addEventListener('click', headerClick);

    isExpand
      ? nodeIco.style.transform="rotate(-180deg)"
      : nodeIco.style.transform="rotate(0deg)";
  }

  function headerClick(event){
    event.target.dataset.action === 'expand'
      ? toggleExpand()
      : null;
  }

  function toggleExpand() {
    isExpand = !isExpand;
    isExpand
      ? nodeOptions.style.display = "block"
      : nodeOptions.style.display = "none";

    isExpand
      ? nodeIco.style.transform="rotate(-180deg)"
      : nodeIco.style.transform="rotate(0deg)";
  }

};

export default checkBoxList;
