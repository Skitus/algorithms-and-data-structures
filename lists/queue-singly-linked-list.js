class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Добавляет узел в конец списка
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        return this.head;
    }

    // Добавляет узел в начало списка
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    // Находит узел по значению
    find(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // Удаляет первый узел с заданным значением
    delete(value) {
        // Удаление головных узлов, если они содержат нужное значение
        while (this.head !== null && this.head.value === value) {
            this.head = this.head.next;
        }

        // Проверка оставшихся узлов
        let current = this.head;
        while (current !== null && current.next !== null) {
            if (current.next.value === value) {
                console.log('current.next', current.next);

                console.log('current.next.next', current.next.next);
                current.next = current.next.next; // Пропускаем узел со значением value
            } else {
                current = current.next; // Переход к следующему узлу
            }
        }

        return this.head;
    }

    // Преобразует список в массив для удобного отображения
    toArray() {
        const elements = [];
        let current = this.head;
        while (current !== null) {
            elements.push(current.value);
            current = current.next;
        }
        return elements;
    }
}


class Queue {
    constructor() {
        this.queue = new SinglyLinkedList();
    }

    isEmpty() {
        return this.queue.head === null;
    }

    enqueue(value) {
        return this.queue.append(value);
    }

    dequeue() {
        if (!this.isEmpty()) {
            const deletedNodeValue = this.queue.head.value;
            this.queue.head = this.queue.head.next;
            return deletedNodeValue;
        } else {
            return null;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.queue.head.value;
        } else {
            return null;
        }
    }

    toArray() {
        return this.queue.toArray();
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);


console.log(queue.peek()); // Должен вывести 10

console.log(queue.dequeue()); // Должен вывести 10

console.log(queue.isEmpty()); // Должен вернуть true

console.log(queue.toArray()); // Должен вывести [20, 30]
