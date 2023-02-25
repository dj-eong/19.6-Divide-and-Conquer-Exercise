function findRotationCount(arr) {
    const val = findFirstIndex(arr);
    if (val == -1) return 0;
    return val;
}

function findFirstIndex(arr, left = 0, right = arr.length - 1) {
    if (left <= right) {
        let middle = Math.floor((right + left) / 2);

        if (arr[middle - 1] > arr[middle]) {
            return middle;
        } else if (arr[middle - 1] <= arr[middle]) {
            let val1 = findFirstIndex(arr, left, middle - 1);
            if (val1 != -1) return val1;
            let val2 = findFirstIndex(arr, middle + 1, right);
            if (val2 != -1) return val2;
        }
    }
    return -1;
}

// module.exports = findRotationCount;