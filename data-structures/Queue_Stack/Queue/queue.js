class Queue {
    constructor() {
        this._oldIndex = 0;
        this._newIndex = 0;
        this._storage = {};
    }
    // Get the size of the queue
    get size() {
        return this._newIndex - this._oldIndex;
    }
    // Add a value to the queue
    enqueue(data) {
        this._storage[this._newIndex] = data;
        this._newIndex++;
    }
    // Remove a value from the queue
    dequeue() {
        if (this._oldIndex !== this._newIndex) {
            const result = this._storage[this._oldIndex];
            delete this._storage[this._oldIndex];
            this._oldIndex++;
            return result;
        }
        return null;
    }
}

let queue = new Queue();
// Enqueue
queue.enqueue(1);
queue.enqueue(2);
console.log(queue);

// Dequeue
queue.dequeue();
console.log(queue);
