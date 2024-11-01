class CircularQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.size = size;
        this.front = 0;
        this.rear = -1;
        this.count = 0; // Счётчик текущих элементов
    }

    enqueue(value) {
        if (this.isFull()) {
            return 'Queue is full';
        }
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
        this.count += 1;
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        const value = this.queue[this.front];
        this.queue[this.front] = undefined; // Удаляем элемент из очереди
        this.front = (this.front + 1) % this.size;
        this.count -= 1;
        return value;
    }

    peek() {
        return this.isEmpty() ? 'Queue is empty' : this.queue[this.front];
    }

    isFull() {
        return this.count === this.size;
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    getQueue() {
        return this.queue;
    }
}

// Пример использования
const cq = new CircularQueue(3);
cq.enqueue('A');
cq.enqueue('B');
cq.enqueue('C');
console.log(cq.enqueue('D')); // Queue is full
console.log(cq.dequeue()); // 'A'
cq.enqueue('D'); // добавляет 'D' в свободное место
console.log(cq.getQueue());
