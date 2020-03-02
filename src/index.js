
exports.min = function min (array) {
  return array && array.length > 0  ? array.reduce((block, index) => block < index  ? block : index) : 0;
}

exports.max = function max (array) {
 return array && array.length > 0 ?   array.reduce((block, index) => block > index  ? block : index) : 0;
}

exports.avg = function avg (array) {
  return array && array.length > 0 ? (array.reduce((block, index) => block + index)) / array.length : 0;
}
