export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, st, end, auxiliaryArray, animations) {
    if (st === end) return;
    const mid = Math.floor((st + end) / 2);
    mergeSortHelper(auxiliaryArray, st, mid, mainArray, animations);
    mergeSortHelper(auxiliaryArray, mid + 1, end, mainArray, animations);
    merge(mainArray, st, mid, end, auxiliaryArray, animations);
}

function merge(mainArray, st, mid, end, auxiliaryArray, animations) {
    let i = st, j = mid + 1, k = st;
    while (i <= mid && j <= end) {
        animations.push([1, i, j]);
        animations.push([2, i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([3, k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        }
        else {
            animations.push([3, k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= mid) {
        animations.push([1, i, i]);
        animations.push([2, i, i]);
        animations.push([3, k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= end) {
        animations.push([1, j, j]);
        animations.push([2, j, j]);
        animations.push([3, k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}
