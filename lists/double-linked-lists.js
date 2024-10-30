class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Добавление узла в конец списка
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        return this;
    }

    // Добавление узла в начало списка
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        return this;
    }

    // Поиск узла по значению
    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    // Удаление узлов с заданным значением
    delete(value) {
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            else this.tail = null; // Если список пуст, обновляем tail
        }

        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current.next) current.next.prev = current.prev;
                else this.tail = current.prev; // Обновляем tail, если удаляется последний элемент

                if (current.prev) current.prev.next = current.next;
            }
            current = current.next;
        }
        return this;
    }

    // Преобразование списка в массив
    toArray() {
        const elements = [];
        let current = this.head;
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        return elements;
    }
}

// Пример использования
const dll = new DoublyLinkedList();
dll.append(10).append(20).prepend(5).prepend(3);
console.log('Список после добавления:', dll.toArray()); // [3, 5, 10, 20]

console.log('Поиск элемента 10:', dll.find(10)); // Узел с значением 10

dll.delete(10); // Удаление узла с значением 10
console.log('Список после удаления 10:', dll.toArray());

dll.delete(-2); // Удаление узла с значением -2 (если он есть)
console.log('Список после удаления -2:', dll.toArray());
