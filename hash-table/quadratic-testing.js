// Quadratic probing is a collision resolution technique used in hash tables. When a collision occurs (i.e., two keys hash to the same index), quadratic probing calculates the next index to check using the formula:

// \[
// index = (originalIndex + i^2) \% size
// \]

// where `i` is the step number (1, 2, 3, ...) that increases with each collision. This method helps distribute data more evenly across the table and reduces the likelihood of clustering, which is more common with linear probing.

// The main goal is to find a new, free index for an element with minimal delay while keeping the hash table densely populated.

class HashTable {
    constructor(size) {
        this.table = new Array(size);
    }

    // Простая хеш-функция
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        let index = this.hash(key);
        let originalIndex = index;
        let i = 1;

        // Пробирование для вставки элемента
        while (this.table[index] && this.table[index][0] !== key) {
            index = (originalIndex + i * i) % this.table.length; // Квадратичное пробирование
            i++;
        }

        // Если ключ уже существует, обновляем значение
        if (this.table[index] && this.table[index][0] === key) {
            this.table[index][1] = value;
        } else {
            // Вставляем новый элемент
            this.table[index] = [key, value];
        }
    }

    // Получить таблицу для отладки
    getTable() {
        return this.table;
    }

    get(key) {
        let index = this.hash(key);
        let originalIndex = index;
        let i = 1;

        while (this.table[index] && this.table[index][0] !== key) {
            index = (originalIndex + i * i) % this.table.length; // Квадратичное пробирование
            i++;
        }

        if (this.table[index] && this.table[index][0] === key) {
            return this.table[index];
        }

        return null
    }

    remove(key) {
        let index = this.hash(key);
        let originalIndex = index;
        let i = 1;

        while (this.table[index] && this.table[index][0] !== key) {
            index = (originalIndex + i * i) % this.table.length; // Квадратичное пробирование
            i++;
        }

        if (this.table[index] && this.table[index][0] === key) {
            this.table[index] = 'DELETED';
            return;
        }
    }
}

// Пример использования
const ht = new HashTable(10);
ht.set("apple", 100);
ht.set("apple", 200);  // обновляем значение "apple"
ht.set("apricot", 150);
ht.set("banana", 200);
ht.set("cucumber", 500);
ht.set("tomato", 500);
ht.set("carrot", 500);
ht.set("lettuce", 500);
ht.set("pepper", 500);

console.log('get', ht.get('jipa'))
ht.remove('apple')

console.log('table', ht.getTable());
