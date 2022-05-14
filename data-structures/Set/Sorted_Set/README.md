# Sorted Set

A sorted set data structure is almost the same as a <a href="../UnorderedSet/README.md">Unordered Set</a>. The main two differences between them are:

- In the sorted set the elements are sorted.
- The find(e1) method.

The first difference allows a comparison between two elements.

The difference in the <b>find(e1)</b> operation is that the sorted set finds the smalles element e2 in the set such that <b>e2 >= e1</b> and returns null if such element doesn't exist.

In other words the SortedSet.find(e1) returns a result even if there is no element e2 that equals e1.
This, though, may cause an increment of implementation complexity and longer running time.

The usage of UnorderedSet when possible is preferred in terms of efficiency.
