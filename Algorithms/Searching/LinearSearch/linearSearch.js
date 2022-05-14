// Collection of numbers
const arr = [1, 23, 54, 12, 24, 45, 56, 12, 34];
// Number to search
let x = 56;

// Linear search
const search = (value) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return false;
};

console.log(search(x));