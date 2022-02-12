import './checkbox-list.scss'

const checkBoxList = (node) => {

  const nodeClick = node.querySelector('[data-action=expand]');
  const nodeList = node.querySelector('[data-action=expand-list]');

  nodeClick.onclick=()=>{
    nodeClick.classList.toggle('checkbox-list__ico_up');
    nodeList.classList.toggle('checkbox-list__items_hide')
  }
};

(()=>{
  const checkBoxListNodes=document.querySelectorAll('[data-type="checkbox-list"]');
  checkBoxListNodes.forEach(((node)=>checkBoxList(node)));
})();
