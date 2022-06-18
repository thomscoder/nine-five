#include <iostream>
#include <unordered_map>

using namespace std;

// Data structure to store a Trie node
struct Trie {
    bool isLeaf;
    unordered_map<char, Trie*> children;
};

// Return a new Trie node
Trie *createNode() {
    Trie *node = new Trie;
    node->isLeaf = false;
    return node;
};

// Insert a string into a trie

// *& passes the pointer by reference and not by value so any modifications
// to the pointer will be reflected in the original pointer
void insert(Trie *&head, char *str) {
    if (head == nullptr) {
        head = createNode();
    }

    // starting from the root node
    Trie *current = head;

    // iterate through the string
    while(*str) {
        // If the current character is not present in the children map, create a new node
        if (current->children.find(*str) == current->children.end()) {
            current->children[*str] = createNode();
        }
        // move to the next node
        current = current->children[*str];
        // move to the next character
        str++;
    }
    // mark the current node as leaf
    current->isLeaf = true;
}

// Search for a string in a trie and return true if found otherwise false
bool search(Trie *&head, char *str) {
    if (head == nullptr) {
        head = createNode();
    }

    // starting from the root node
    Trie *current = head;

    while(*str) {
        current = current->children[*str];

        if (current == nullptr) {
            return false;
        }
        // move to the next character
        str++;
    }

    return current->isLeaf;
}


// Driver code
int main() {
    Trie *head = nullptr;

    insert(head, "hello");
    insert(head, "hola");
    insert(head, "hi");
    insert(head, "hey");

    cout << search(head, "hello") << endl;
    cout << search(head, "hell") << endl;
    return 0;
}