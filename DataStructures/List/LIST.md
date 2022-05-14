# List

The list ADT can be described as a sequence of elements on which the following operations can be run:

- size() - returns the <b>length</b> of the entire list
- get(<b>int</b> index) - returns the element at <b>index</b>
- set(<b>int</b> index, element) - replaces the <b>element<small>[index]<small> with the specified <b>element</b>
- add(<b>int</b> index, element) - inserts the element at specified index (starting counting from zero)
- remove(<b>int</b> index) - removes the element at specified index

It's easy now to see how the list interface operations are sufficient to implement the Deque interface:

- remove_first(element) =><small>\*</small> remove(0)
- remove_last() => remove(size() - 1)

<p><small>\* can be written as</small></p>