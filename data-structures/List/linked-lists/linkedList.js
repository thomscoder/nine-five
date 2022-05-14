// Create a function for creating a new Node object
const createNode = (value) => {
    return {
        value: value,
        next: null
    };
}

// Create the linked list class
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Increment the length property by one.
    // Create the node that will be inserted into the list
    insert(value) {
        this.length++;
        let newNode = createNode(value);
        /**
         * Check the value of tail property and if the value is not null then
         * set the next property of the tail to the new node.
         */
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            return newNode;
        }
        // If the value of tail is null assign the newNode object ot head and tail pointers
        this.head = newNode;
        this.tail = newNode;
        return newNode;
    }

    // Print method to see what's inside
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.insert(32);
linkedList.insert(true);
linkedList.insert("Hello world");
linkedList.insert(23);
linkedList.print();