# Unordered Set

The unordered set is an abstract data structure that mimics a mathematical set and represents an unordered set of unique elements.

A U-Set interface allows the following operations:

- size() - like in <a href="../List/README.md">List interface</a> returns the number of elements in the set.

- add(e1) - adds an element <b>e1</b> in the set if an element <b>e2</b> such that <b>e2 equals e1</b> is not present already. Returns <b>true</b> if the addition was successfull or <b>false</b> if the addition failed.

- remove(e1) - finds and remove the element <b>e2</b>, such that <b>e2 equals e1</b>, from the set or returns <b>null</b> if the element doesn't exists.
- find(e1) - finds the element <b>e2</b>, such that <b>e2 equals e1</b>, in the set if e2 exists. Returns <b>null</b> if the element doesn't exist.

To distinguish e2 and e1 create a dictionary, that maps keys onto values, by forming objects called <b><em>Pairs</em></b> each of which contains a <em>key</em> and a <em>value</em>.

This solves the problem of finding element e2 by using e1 whenever the two are two distinct objects, because two Pairs are equal if they're keys are equals.
