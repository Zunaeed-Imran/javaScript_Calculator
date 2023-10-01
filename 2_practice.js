let a;
let b;
let c;

document.getElementById('button').onclick = function () {
  a = document.getElementById('input1').value;


  b = document.getElementById('input2').value;


  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById('result').innerHTML = 'Result: ' + c;
}