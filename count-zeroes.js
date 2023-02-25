// function countZeroes(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         let middle = Math.floor((right + left) / 2);

//         if (arr[middle] == 1) {
//             left = middle + 1;
//         } else if (arr[middle] == 0) {
//             right = middle - 1;
//         }
//     }

//     if (arr[left] == 1) {
//         return arr.length - 1 - left;
//     } else {
//         return arr.length - left;
//     }
// }

function countZeroes(arr) {
    let index = findFirstZero(arr);
    if (index == -1) return 0;
    return arr.length - index;
}

function findFirstZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((right + left) / 2);

        if ((middle == 0 || arr[middle - 1] == 1) && arr[middle] == 0) {
            return middle;
        } else if (arr[middle] == 0) {
            right = middle - 1;
        } else if (arr[middle] == 1) {
            left = middle + 1;
        }
    }
    return -1;
}

// module.exports = countZeroes;