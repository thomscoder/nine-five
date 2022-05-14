# Linear Search

This algorithm works by iterating through the entire array until the <b>x<b> is found.

- Best case complexity: <b>O(1)</b>
- Worst case complexity: <b>O(n)</b>

<b>Pseudo Code</b>

<pre>
For <b>i</b> = 0,1,2,3,...,n-1,
    if <b>a[i]</b> is equal to x,
        element is found 
        return <b>i</b>
If element is still not found
    then <b>x</b> is not in <b>a</b>
    return false.
</pre>
