let a;
let b;
let c;

document.getElementById('button').onclick = function () {
  a = document.getElementById('A_input').value;
  a = parseInt(a);

  b = document.getElementById('B_input').value;
  b = parseInt(a);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById('result_C').innerHTML = 'The rasult is' + c;
}
