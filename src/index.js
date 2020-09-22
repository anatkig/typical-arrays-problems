
exports.min = function min (array) {
    if(!array||array.length===0)
  return 0;
    else return array.reduce((a,b)=>Math.min(a,b));
}

exports.max = function max (array) {
if(!array||array.length===0)
  return 0;
    else return array.reduce((a,b)=>Math.max(a,b));
}

exports.avg = function avg (array) {
    if(!array||array.length===0)
  return 0;
    else return array.reduce((sum,i)=>sum+=i)/array.length;
}
