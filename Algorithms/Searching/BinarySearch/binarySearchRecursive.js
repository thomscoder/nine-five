// Collection of numbers
const arr = [12, 23, 34, 45, 56, 67, 78, 89, 90];
// Number to search
const num = 78;

// Binary search recursive
const binarySearchRecursive = (arr, target, start, end) => {
    if(start > end) return false;

    const mid = Math.floor((start + end) / 2);
    if(arr[mid] === target) return mid;

    if(arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, end);
    return binarySearchRecursive(arr, target, start, mid - 1);
}

console.log(binarySearchRecursive(arr, num, 0, arr.length - 1));