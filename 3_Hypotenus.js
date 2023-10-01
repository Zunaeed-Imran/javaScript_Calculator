// this program will show the Hypotenus result.


let a;
let b;
let c;

document.getElementById('submitButton').onclick = function () {
  a = document.getElementById('aTextBox').value;
  a = parseInt(a);

  b = document.getElementById('bTextBox').value;
  b = parseInt(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById('cLabel').innerHTML = 'Side C: ' + c;
};
