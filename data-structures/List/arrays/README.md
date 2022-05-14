# Arrays

An array is a collection of items of the same type which are stored in contiguos and adjacent memory locations.
When we work with arrays we start counting from 0 (zero) to <b>(n-1)</b> where <b>n</b> is size of the array. We access its items using an index system <b>Array[n]</b> where <b>[n]</b> is the position of the element in the array.
For example if we want to access the number "4" in this array of integers [1,2,3,4,5,6] (let's call if sampleArray) we can declare <b>sampleArray[3]</b> keeping in mind the integer 4 is in the 3rd position counting from 0.

# Types of Arrays

- <b>One dimensional arrays</b>
- <b>Multi-dimensional arrays: </b> Where some or all items in the array are arrays themselves.
One example of multi-dimensional arrays could be:

sampleArray = [1,
    [1,2,3,4,5],
    [3,44,3,34],
    [23,56,23,12],
    2, [4,34,81,43],
]

to access these types of arrays all we need to do is access the items like we would normally do with one dimensional arrays and if the items is an array itself, we access its items as well with the index system.

So for example if we wanted to get the integer 81: 

- we access the last element of sampleArray, which is an array itself:
sampleArray[5]
- then we get the integer 81:
sampleArray[5][2]