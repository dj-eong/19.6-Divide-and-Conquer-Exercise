// function sortedFrequency(arr, val) {

//     let left1 = 0, left2 = 0;
//     let right1 = arr.length - 1, right2 = arr.length - 1;

//     while (left1 < right1) {
//         let middle = Math.floor((right1 + left1) / 2);

//         if (arr[middle] < val) {
//             left1 = middle + 1;
//         } else if (arr[middle] >= val) {
//             right1 = middle - 1;
//         }
//     }
//     while (left2 < right2) {
//         let middle = Math.floor((right2 + left2) / 2);

//         if (arr[middle] <= val) {
//             left2 = middle + 1;
//         } else if (arr[middle] > val) {
//             right2 = middle - 1;
//         }
//     }

//     if (left2 == left1 && arr[left1] == val) {
//         return 1;
//     } else if (arr[left1] == val && arr[left2] != val) {
//         return left2 - left1;
//     } else if (arr[left1] == val && arr[left2] == val) {
//         return left2 - left1 + 1;
//     } else if (arr[left1] != val && arr[left2] == val) {
//         return left2 - left1;
//     } else if (arr[left1] != val && arr[left2] != val) {
//         return left2 - left1 - 1;
//     } else {
//         return -1;
//     }
// }

function sortedFrequency(arr, val) {
    let firstIndex = findFirstVal(arr, val);
    if (firstIndex == -1) return -1;
    let lastIndex = findLastVal(arr, val);
    return lastIndex - firstIndex + 1;
}

function findFirstVal(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((right + left) / 2);

        if ((middle == 0 || arr[middle - 1] < val) && arr[middle] == val) {
            return middle;
        } else if (arr[middle] >= val) {
            right = middle - 1;
        } else if (arr[middle] < val) {
            left = middle + 1;
        }
    }
    return -1;
}

function findLastVal(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((right + left) / 2);

        if ((middle == arr.length - 1 || arr[middle + 1] > val) && arr[middle] == val) {
            return middle;
        } else if (arr[middle] > val) {
            right = middle - 1;
        } else if (arr[middle] <= val) {
            left = middle + 1;
        }
    }
    return -1;
}

// module.exports = sortedFrequency;