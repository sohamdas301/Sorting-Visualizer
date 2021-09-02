export function heapSort(arr) {
    const animations = [];
    var n = arr.length;

    for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i, animations);

    for (var i = n - 1; i > 0; i--) {
        animations.push([1, 0, i, arr[0], arr[1]]);
        animations.push([2, 0, i, arr[0], arr[1]]);
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        animations.push([3, 0, i, arr[0], arr[i]]);

        heapify(arr, i, 0, animations);
    }
    return animations;
}

function heapify(arr, n, i, animations) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    animations.push([1, largest, l, arr[largest], arr[l]]);
    animations.push([2, largest, l, arr[largest], arr[l]]);

    if (l < n && arr[l] > arr[largest])
        largest = l;

    animations.push([1, largest, l, arr[largest], arr[r]]);
    animations.push([2, largest, l, arr[largest], arr[r]]);
    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest !== i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        animations.push([3, i, largest, arr[largest], arr[i]]);

        heapify(arr, n, largest, animations);
    }
}