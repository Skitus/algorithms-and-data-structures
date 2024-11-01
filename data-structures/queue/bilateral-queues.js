class BilateralQueue {
    constructor() {
        this.queue = [];
    }

    addFront(value) {
        this.queue.unshift(value);
    }

    addBack(value) {
        this.queue.push(value);
    }

    removeFront() {
        return this.queue.shift();
    }

    removeBack() {
        return this.queue.pop();
    }

    peekFront() {
        return this.queue[0];
    }

    peekBack() {
        return this.queue[this.queue.length - 1];
    }

    isEmpty() {
        return !this.queue.length;
    }

    size() {
        return this.queue.length;
    }

    getQueue() {
        return this.queue;
    }
}

const deque = new BilateralQueue();
deque.addFront('front element');  
deque.addBack('back element');

console.log('quqque', deque.getQueue());

console.log(deque.peekFront());  // вернёт элемент в начале
console.log(deque.peekBack());   // вернёт элемент в конце

console.log(deque.removeFront());  // 'front element'
console.log(deque.removeBack());   // 'back element'

console.log('quqque', deque.getQueue());