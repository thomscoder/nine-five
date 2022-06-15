// Trie node object to insert a new string/word in the Trie structure.
class Node {
    constructor(letter) {
        this.letter = letter;
        this.children = {};
        this.endOfTheWord = false;
    }
}

// Create Trie class
class Trie {
    constructor() {
        this.root = new Node(null);
    }

    insert(word) {
        // Starting from root node
        let current = this.root;
        for(let letter of word) {
            // If the node is not present already, create it
            if(current.children[letter] === undefined) {
                current.children[letter] = new Node(letter);
            }
            // move down to insert next character
            current = current.children[letter];
        }
        // Mark the end of the word
        current.endOfTheWord = true;
    }

    search(word) {
        // Starting from root node
        let current = this.root;
        for(let letter of word) {
            // If the node is not present, return false
            if(current.children[letter] === undefined) {
                return false;
            }
            // move down to match the next character
            current = current.children[letter];
        }
        // found all characters return true
        return current.endOfTheWord;    
    }
}

// Test
const keys = ["the", "a", "there", "answer", "any"];
// Create a new Trie
const trie = new Trie();
// Insert the words in the Trie
for(let i = 0; i < keys.length; i++) {
    trie.insert(keys[i]);
}
// Search for the word in the Trie
console.log(trie.search("answer")); // true
console.log(trie.search("by")); // false
trie.insert("by");
console.log(trie.search("by")); // true