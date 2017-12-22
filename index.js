function getA() {
  if (typeof __A__ !== `undefined`) return __A__;
}

function getB() {
  if (typeof __B__ !== `undefined`) return __B__;
}

module.exports = {
  getA: getA,
  getB: getB
};
