class HashTable {
    constructor(size) {
        this.table = new Array(size);
    }

    // Первая хеш-функция
    hashFirst(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return 1 + hash % (this.table.length - 1);
    }

    // Вторая хеш-функция
    hashSecond(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    // Двойное хеширование
    hash(key, counter) {
        return (this.hashFirst(key) + counter * this.hashSecond(key)) % this.table.length;
    }

    // Вставка элемента
    set(key, value) {
        let i = 0;
        let index = this.hash(key, i);  // Используем обе хеш-функции сразу

        // Пока ячейка занята и ключи не совпадают, ищем следующую ячейку
        while (this.table[index] && this.table[index][0] !== key) {
            i++;
            index = this.hash(key, i);  // Пересчитываем индекс с помощью двойного хеширования
        }

        // Если место свободно, создаём ячейку
        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Обновляем или вставляем значение
        this.table[index] = [key, value];
    }

    // Получение элемента
    get(key) {
        let i = 0;
        let index = this.hash(key, i);  // Используем обе хеш-функции

        // Пока ячейка занята и ключи не совпадают, ищем дальше
        while (this.table[index] && this.table[index][0] !== key) {
            i++;
            index = this.hash(key, i);
        }

        if (this.table[index] && this.table[index][0] === key) {
            return this.table[index];  // Возвращаем найденное значение
        }

        return null;  // Если не нашли ключ
    }

    // Удаление элемента
    remove(key) {
        let i = 0;
        let index = this.hash(key, i);  // Используем обе хеш-функции

        // Ищем элемент по двойному хешированию
        while (this.table[index] && this.table[index][0] !== key) {
            i++;
            index = this.hash(key, i);
        }

        // Если нашли, удаляем элемент
        if (this.table[index] && this.table[index][0] === key) {
            this.table[index] = 'DELETED';
        }
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

console.log('get', ht.get('jipa'));
console.log('table', ht.getTable());
