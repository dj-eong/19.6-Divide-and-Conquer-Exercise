function findFloor(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);

        if (arr[middle] <= val) {
            left = middle + 1;
        } else if (arr[middle] > val) {
            right = middle - 1;
        }
    }
    return arr[right] <= val ? arr[right] : -1;
}

// module.exports = findFloor;