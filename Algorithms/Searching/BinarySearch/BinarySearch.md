# Binary Search

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
