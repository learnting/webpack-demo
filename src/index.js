import _ from 'lodash';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  btn.innerHTML = 'click here，view console！';
  btn.onclick = printMe;
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
