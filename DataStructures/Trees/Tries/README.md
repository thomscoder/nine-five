# Tries

A Trie also known as digital tree or prefix tree, is a kind of search tree. 

It is used to store a dynamic set of associative array where the keys are usually strings. 

A trie is a <b>n-ary tree</b> and that means it can have n children branching out from a single parent with the root node being NULL.
<hr>
Strings can be retrieved by traversing down a branch path.

The operations that could be performed on a trie are:
- <b>insert(string)</b> -> adds a new string
- <b>remove(string)</b> -> removes the given strings
- <b>contains(string)</b> -> checks if trie has the given string
- find(prefix) -> returns all the words with the given prefix.

Each trie has an empty root node with links or refrences to other nodes (one for each possible alphabetic value)