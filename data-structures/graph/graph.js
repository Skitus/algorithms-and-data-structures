class Graph {
    constructor() {
        this.graph = {};
    }

    addVertex(vertex) {
        if (!this.graph[vertex]) {
            this.graph[vertex] = {};
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if (!this.graph[vertex1]) this.addVertex(vertex1);
        if (!this.graph[vertex2]) this.addVertex(vertex2);

        this.graph[vertex1][vertex2] = weight;
        this.graph[vertex2][vertex1] = weight;
    }

    getNeighbors(vertex) {
        return Object.entries(this.graph[vertex] || {});
    }

    toString() {
        return JSON.stringify(this.graph, null, 2);
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);

console.log(graph.toString()); // Выводит структуру графа
console.log(graph.getNeighbors('A')); // [['B', 4], ['C', 2]]
