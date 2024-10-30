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

// Пример использования
const sll = new SinglyLinkedList();
sll.append(10);
sll.append(20);
sll.prepend(-1);
sll.prepend(-2);
console.log('Список после добавления:', sll.toArray()); // [-2, -1, 10, 20]

console.log('Поиск элемента 10:', sll.find(10)); // Узел с значением 10

console.log('delete',sll.delete(10)); // Удаление узла с значением 10
console.log('Список после удаления 10:', sll.toArray());

sll.delete(-2); // Удаление узла с значением -2 (голова)
console.log('Список после удаления -2:', sll.toArray());
