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

    // Вставка элемента
    set(key, value) {
        let count = 0;
        this.table.forEach(item => {
            if (item && item !== 'DELETED') count += 1;
        });

        // Расширение таблицы, если она заполнена более чем на 70%
        if (count > this.table.length * 0.7) {
            this.resize();
        }

        let index = this.hash(key);

        do {
            if (!this.table[index] || this.table[index] === 'DELETED') {
                this.table[index] = [key, value];
                return;
            }

            if (this.table[index][0] === key) {
                this.table[index][1] = value;
                return;
            }

            index = (index + 1) % this.table.length;
        } while (true);
    }

    // Поиск элемента
    get(key) {
        let index = this.hash(key);

        do {
            if (!this.table[index]) return null;

            if (this.table[index] !== 'DELETED' && this.table[index][0] === key) {
                return this.table[index][1];
            }

            index = (index + 1) % this.table.length;
        } while (true);
    }

    // Удаление элемента
    remove(key) {
        let index = this.hash(key);

        do {
            if (!this.table[index]) return null;

            if (this.table[index][0] === key) {
                this.table[index] = 'DELETED';
                return;
            }

            index = (index + 1) % this.table.length;
        } while (true);
    }

    // Расширение таблицы и перехеширование всех элементов
    resize() {
        const oldTable = this.table;
        this.table = new Array(oldTable.length * 2);  // Увеличиваем размер таблицы в 2 раза

        oldTable.forEach(bucket => {
            if (bucket && bucket !== 'DELETED') {
                // Перехешируем каждую пару key-value
                const [key, value] = bucket;
                this.rehash(key, value);
            }
        });
    }

    // Перехеширование элемента для новой таблицы
    rehash(key, value) {
        let index = this.hash(key);

        // Ищем свободное место в новой таблице
        do {
            if (!this.table[index]) {
                this.table[index] = [key, value];
                return;
            }

            index = (index + 1) % this.table.length;
        } while (true);
    }

    // Получить таблицу для отладки
    getTable() {
        return this.table;
    }
}

// Пример использования
const ht = new HashTable(10);
ht.set("apple", 100);

ht.remove('apple');

ht.set("apricot", 150);
ht.set("banana", 200);
ht.set("cucumber", 500);
ht.set("tomato", 500);
ht.set("carrot", 500);
ht.set("lettuce", 500);
ht.set("pepper", 500);


console.log(ht.get("apple"));  // null, так как удалено
console.log('table', ht.getTable());
