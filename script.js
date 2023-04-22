var bottomOrTop = 'bottom';
var rightOrLeft = 'right';

var bottomOrTopNum = '50%';
var rightOrLeftNum = '5%';

document.querySelector('#divTopo').innerHTML += `
  <div
    id="inpts"
    style="
      position: fixed;
      ${bottomOrTop}: ${bottomOrTopNum};
      ${rightOrLeft}: ${rightOrLeftNum};
      z-index: 999;
      background-color: transparent;
    "
  >
    <div style="display: flex; gap: 6px">
      <div id="inptA" style="color: #fff; width: 35px; height: 35px; text-align: center; border: 1px solid #fff;">A</div>
      <div id="inptSS" style="color: #fff; width: 35px; height: 35px; text-align: center; border: 1px solid #fff;">S</div>
      <div id="inptJ" style="color: #fff; width: 35px; height: 35px; text-align: center; border: 1px solid #fff;">J</div>
      <div id="inptK" style="color: #fff; width: 35px; height: 35px; text-align: center; border: 1px solid #fff;">K</div>
      <div id="inptL" style="color: #fff; width: 35px; height: 35px; text-align: center; border: 1px solid #fff;">L</div>
    </div>
    <div id="inptESP" style="color: #fff; width: 70px; height: 35px; text-align: center; border: 1px solid #fff; margin-top: 6px; margin-left: 70px;">Espaço</div>
  </div>
`;

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 65:
      document.querySelector('#inptA').style.backgroundColor = '#48b84f';
      break;
    case 83:
      document.querySelector('#inptSS').style.backgroundColor = '#cc2929';
      break;
    case 74:
      document.querySelector('#inptJ').style.backgroundColor = '#f0e513';
      break;
    case 75:
      document.querySelector('#inptK').style.backgroundColor = '#2012e3';
      break;
    case 76:
      document.querySelector('#inptL').style.backgroundColor = '#d4640f';
      break;
    case 32:
      document.querySelector('#inptESP').style.backgroundColor = '#16deca';
      break;
    default:
      break;
  }
});

document.addEventListener('keyup', e => {
  switch (e.keyCode) {
    case 65:
      document.querySelector('#inptA').style.backgroundColor = 'transparent';
      break;
    case 83:
      document.querySelector('#inptSS').style.backgroundColor = 'transparent';
      break;
    case 74:
      document.querySelector('#inptJ').style.backgroundColor = 'transparent';
      break;
    case 75:
      document.querySelector('#inptK').style.backgroundColor = 'transparent';
      break;
    case 76:
      document.querySelector('#inptL').style.backgroundColor = 'transparent';
      break;
    case 32:
      document.querySelector('#inptESP').style.backgroundColor = 'transparent';
      break;
    default:
      break;
  }
});
