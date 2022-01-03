module.exports = function reverse (n) {
  return Number(n.toString().match(/\d/g).reverse().join(''));
}
