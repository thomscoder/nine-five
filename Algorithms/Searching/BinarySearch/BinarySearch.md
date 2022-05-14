# Binary Search

This algorithm works by repeatedly splitting the array into two segments going from left to right and discard the half that does not contains <b>x</b>.
Because the array is sorted it is easy to see which of each pair of segments the <b>x</b> is in.

- Best case complexity: <b>O(1)</b>
- Worst case complexity: <b>O(log n)</b>

<b>Pseudo code</b>

<pre>
While left is less than right
    set mid <b>(left + right) / 2</b>, and 
    if <b>x</b> is greater than a[mid],
        then set left equal to <b>mid + 1</b>,
        otherwise set right to mid.
If a[left] is equal to x,
    then return left,
    otherwise return false,
</pre>
