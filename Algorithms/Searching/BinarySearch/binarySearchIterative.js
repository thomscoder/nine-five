// Collection of numbers
const arr = [12, 23, 34, 45, 56, 67, 78, 89, 90];
// Number to search
const num = 78;

// Binary search iterative
const binarySearchIterative = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        if(arr[mid] === target) return mid;
        if(arr[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return false;
}

console.log(binarySearchIterative(arr, num));