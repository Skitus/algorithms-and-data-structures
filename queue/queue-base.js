class Queue {
    constructor () {
        this.queue = [];
    }

    enqueue (element) {
        this.queue.push(element);
    }

    dequeue () {
        return this.queue.shift();
    }

    peek () {
        return this.queue[0]; 
    }

    isEmpty() {
        return !this.queue.length;
    }

    size() {
        return this.queue.length;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);

console.log(queue.dequeue());  // 1
console.log(queue.peek());     // 2
console.log(queue.isEmpty());  // false
console.log(queue.size());     // 1