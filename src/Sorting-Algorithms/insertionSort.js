export function insertionSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            animations.push([1, j, j + 1, array[j], array[j + 1]]);
            animations.push([2, j, j + 1, array[j], array[j + 1]]);
            if (array[j] > array[j + 1]) {
                animations.push([3, j, j + 1, array[j + 1]], array[j]);
                swap(j + 1, j, array);
            }
            else {
                break;
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