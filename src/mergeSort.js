module.exports = function(arr) {
  function merge(left, right) {
    let result = [];
    let il = 0;
    let ir = 0;
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }
    //merge what is left
    return result.concat(left.slice(il)).concat(right.slice(ir));
  }

  function mergeSort(items) {
    if (items.length < 2) {
      return items;
    }
    let middle = Math.floor(items.length / 2);
    let left = items.slice(0, middle);
    let right = items.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }

  return mergeSort(arr);
};
