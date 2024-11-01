class TimeLimitedQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(value, timeLimit) {
        this.queue.push(value);
        setTimeout(() => {
            const indexOfDeletedElement = this.queue.indexOf(value);

            if (indexOfDeletedElement !== -1) {
                this.queue.splice(indexOfDeletedElement, 1);
            }

        }, timeLimit);
    }

    dequeue() {
        return this.queue.shift() || 'Element doesn`t exist';
    }

    peek() {
        if (!!this.queue[0]) {
            return this.queue[0];
        }

        return 'Element doesn`t exist';
    }

    isEmpty() {
        return !this.queue.length;
    }
}

const TLQ = new TimeLimitedQueue();

TLQ.enqueue(3, 3000);
TLQ.enqueue(5, 10000);
TLQ.enqueue(6, 10000);

setTimeout(() => {
    console.log('this.dequeue', TLQ.dequeue());
    console.log('peek', TLQ.peek());
    console.log('isEmpty', TLQ.isEmpty());
}, 5000);


