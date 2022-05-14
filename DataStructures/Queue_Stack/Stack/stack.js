class Stack {
    constructor() {
        this._size = 0;
        this._storage = {};
    }
    /**
     * Push a value onto the end of the stack
     * assigns size as a key of storage
     * assigns value as the value of this key
     * Increase the size of the storage
     */
    push(data) {
        this._storage[this._size] = data;
        this._size++;
    }

    // Remove from the stack - pop()
    pop() {
        if (this._size && this._size !== 0) {
            const result = this._storage[this._size];
            delete this._storage[this._size];
            this._size--;
            return result;
        }
        return null;
    }
}

const stack = new Stack();
// Push
stack.push(1);
stack.push(23);
console.log(stack);

// Pop
stack.pop(23)
console.log(stack);
