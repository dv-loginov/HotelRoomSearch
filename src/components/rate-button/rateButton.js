const rateButton = () => {
  console.log('run rateButton');

  const rateButtonsAll=document.querySelectorAll('[data-type="rating"]');

  rateButtonsAll.forEach(rateButton=>{
     rateButton.onclick=handleRateButtonClick;
  });

  function handleRateButtonClick(event){
    const selectStar=event.target.dataset.numstar;
    const parent=event.target.parentNode;
    const stars=parent.querySelectorAll("span");

    stars.forEach(star=>{
      star.dataset.numstar<=selectStar
        ?star.textContent='star'
        :star.textContent='star_border';
    })

  }

};

export default rateButton;
