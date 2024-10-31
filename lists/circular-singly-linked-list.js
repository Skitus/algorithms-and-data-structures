class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularSinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }

        return this;
    }

    find(value) {
        let current = this.head;
        if (!current) return null;
        do {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        } while (current !== this.head);
        return null;
    }

    delete(value) {
        if (!this.head) return this;

        while (this.head && this.head.value === value) {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
                return this;
            }
            this.head = this.head.next;
            this.tail.next = this.head;
        }

        let current = this.head;
        do {
            if (current.next.value === value) {
                if (current.next === this.tail) {
                    this.tail = current;
                }
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        } while (current !== this.head);

        return this;
    }

    toArray() {
        const elements = [];
        if (!this.head) return elements;
        let current = this.head;
        do {
            elements.push(current.value);
            current = current.next;
        } while (current !== this.head);
        return elements;
    }
}

// Тестування
const cll = new CircularSinglyLinkedList();
cll.append(10);
cll.append(20);
cll.prepend(-1);
cll.prepend(-2);
console.log('Список після додавання:', cll.toArray()); // [-2, -1, 10, 20]

console.log('Пошук елемента 10:', cll.find(10)); // Узел з значенням 10

console.log('Видалення 10:', cll.delete(10)); // Видалення узла з значенням 10
console.log('Список після видалення 10:', cll.toArray());

cll.delete(-2); // Видалення узла з значенням -2 (голова)
console.log('Список після видалення -2:', cll.toArray());
