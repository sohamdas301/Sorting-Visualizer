export function bubbleSort(array) {
  if (array.length <= 1) return array;
  const animations = [];
  for (let i = 1; i <= array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (array[j] > array[j + 1]) {
        animations.push([j, array[j + 1], j + 1, array[j]]);
        swap(j, j + 1, array);
      }
      else {
        animations.push([-1, -1]);
      }
    }
  }
  return animations;
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}