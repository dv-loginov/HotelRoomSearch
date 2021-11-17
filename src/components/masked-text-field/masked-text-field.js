import Inputmask from "inputmask";
import './masked-text-field.scss'

const maskedText = (node) => {
  const im = new Inputmask({
    alias: "datetime",
    inputFormat: "dd.mm.yyyy",
    placeholder: "ДД.ММ.ГГГГ",
  });
  im.mask(node);
};

(() => {
  const maskedTextNodes = document.querySelectorAll('[data-type="masked-text"]');
  maskedTextNodes.forEach(((node) => maskedText(node)));
})();
