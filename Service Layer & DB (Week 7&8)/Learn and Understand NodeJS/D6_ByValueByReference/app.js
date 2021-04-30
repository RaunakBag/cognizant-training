// Pass by Value
function change(b) {
  b = 2;
}

const a = 3;
change(a);
console.log(a);

//Pass by Reference
function changeObj(d) {
  d.prop1 = function () {};
  d.prop2 = {};
}
const c = {};
c.prop1 = {};
changeObj(c);
console.log(c);
