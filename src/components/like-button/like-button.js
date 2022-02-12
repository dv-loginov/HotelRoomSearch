import './like-button.scss'

const likeButton = (node) => {
  const numNode = node.querySelector('span');
  const initCounter = isNaN(parseInt(numNode.innerText))
    ? 0
    : parseInt(numNode.innerText);
  let counter = makeCounter(initCounter);
  counter();
  node.onclick = (event) => {
    numNode.innerText = counter();
  };

  function makeCounter(initCounter) {
    let currentCount = initCounter;
    return function() {
      return currentCount++;
    };
  }
};

(()=>{
  const likeButtonsNodes=document.querySelectorAll('[data-type="like"]');
  likeButtonsNodes.forEach(((likeButtonsNode)=>likeButton(likeButtonsNode)));
})();
