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
        this.table.forEach((item) => {
            if (item !== undefined) count += 1;
        });

        // Если заполненность таблицы превышает 70%, расширяем таблицу
        if (count > this.table.length * 0.7) {
            console.log('Расширение таблицы. Текущий размер:', this.table.length);

            const oldTable = this.table;
            this.table = new Array(this.table.length * 2);

            // Перехеширование всех существующих элементов
            oldTable.forEach(bucket => {
                if (bucket) {
                    bucket.forEach(([oldKey, oldValue]) => {
                        const newIndex = this.hash(oldKey);
                        if (!this.table[newIndex]) {
                            this.table[newIndex] = [];
                        }
                        this.table[newIndex].push([oldKey, oldValue]);
                    });
                }
            });
        }

        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Проверяем, если ключ уже существует, обновляем значение
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value; // обновляем значение
                return;
            }
        }

        // Если ключ не найден, добавляем новую пару [key, value]
        this.table[index].push([key, value]);
    }

    // Поиск элемента
    get(key) {
        const index = this.hash(key);
        if (!this.table[index]) return null;

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                return this.table[index][i][1];
            }
        }
        return null;
    }

    // Удаление элемента
    remove(key) {
        const index = this.hash(key);
        if (!this.table[index]) return null;

        this.table[index] = this.table[index].filter(item => item[0] !== key);
    }

    // Получить таблицу для отладки
    getTable() {
        return this.table;
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

console.log(ht.get("apple"));   // 200 (обновлено)
console.log('table', ht.getTable());
