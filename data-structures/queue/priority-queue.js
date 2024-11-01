class PriorityQueue {

    constructor () {
        this.pq = [];
    }

    enqueue(element, priority) {
        this.pq.push({element, priority});
    }

    sortQue () {
        let copyPQ = [...this.pq];
        return  copyPQ.sort((a, b) => { 
            if (a.priority < b.priority) {
                return 1
            } 
            if (a.priority > b.priority) {
                return -1;
            }

            return 0;
        })
    }

    dequeue() {
        const sortedPQ = this.sortQue();
        // console.log('sortedPQ', sortedPQ);
        // console.log('this.pq.indexOf(sortedPQ[0])', this.pq.indexOf(sortedPQ[0]));
        const findIndex = this.pq.indexOf(sortedPQ[0]);
        return this.pq.splice(findIndex, 1);
    }
    
    peek() {
        const sortedPQ = this.sortQue();
        // console.log('sortedPQ', sortedPQ);
        // console.log('this.pq.indexOf(sortedPQ[0])', this.pq.indexOf(sortedPQ[0]));
        const findIndex = this.pq.indexOf(sortedPQ[0]);
        return this.pq[findIndex];
    }

    isEmpty() {
        return !this.pq.length;
    }

    size() {
        return this.pq.length;
    }
}

const pq = new PriorityQueue();
pq.enqueue("urgent task", 5);
pq.enqueue("less urgent task", 1);
pq.enqueue("medium task", 3);

console.log('asdasd',pq.dequeue());  // "urgent task" (приоритет 5)
console.log(pq.peek());     // "medium task" (приоритет 3)
console.log(pq.isEmpty());  // false
console.log(pq.size());
