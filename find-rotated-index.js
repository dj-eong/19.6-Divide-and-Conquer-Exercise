// Write a function called ***findRotatedIndex*** which accepts a rotated array of sorted numbers and an integer. 
// The function should return the index of num in the array. If the value is not found, return -1.

// **Constraints**:
// Time Complexity: O(log N)

// Examples:
// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

function findRotatedIndex(arr, val) {
    const firstIndex = findFirstIndex(arr);
    return findVal(arr, val, firstIndex);
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

function findVal(arr, val, firstInd) {
    let leftShift = firstInd;
    let rightShift = firstInd - 1;
    let middle;
    if (val < arr[leftShift] || val > arr[rightShift]) return -1;

    while (arr[leftShift] <= arr[rightShift]) {

        if (leftShift > rightShift) {
            middle = (Math.floor((leftShift + rightShift) / 2) + leftShift) % arr.length;
        } else {
            middle = Math.floor((leftShift + rightShift) / 2);
        }

        if (arr[middle] < val) {
            leftShift = (middle + 1) % arr.length;
        } else if (arr[middle] > val) {
            if (middle - 1 < 0) rightShift = arr.length - (middle - 1);
            else rightShift = middle - 1;
        } else if (arr[middle] == val) {
            return middle;
        }
    }
    return -1;
}

// module.exports = findRotatedIndex;
