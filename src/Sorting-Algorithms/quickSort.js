export function quickSort(array) {
    const animations = [];
    if (array.length <= 1) return animations;
    quickSortHelper(array, animations, 0, array.length - 1);
    return animations;
}

function quickSortHelper(array, animations, st, end) {
    if (st >= end) return;
    let p = partition(array, animations, st, end);
    quickSortHelper(array, animations, st, p - 1);
    quickSortHelper(array, animations, p + 1, end);
}

function partition(array, animations, st, end) {
    let i = st - 1, j = st;
    let pivot = array[end];
    for (; j <= end - 1; j++) {
        animations.push([1, j, end]);
        animations.push([2, j, end]);
        if (array[j] < pivot) {
            animations.push([3, i + 1, j, array[j], array[i + 1]]);
            swap(i + 1, j, array);
            i++;
        }
    }
    animations.push([3, i + 1, end, array[end], array[i + 1]]);
    swap(i + 1, end, array);
    return i + 1;
}


function swap(i, j, array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}