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

    shortestPath(startVertex, endVertex) {
        if (!this.graph[startVertex] || !this.graph[endVertex]) {
            return null;
        }
    
        let distances = {};
        let previous = {};
        let unvisited = new Set();
    
        // Инициализация расстояний и предыдущих вершин
        for (let vertex in this.graph) {
            distances[vertex] = Infinity;
            previous[vertex] = null;
            unvisited.add(vertex);  // Добавляем вершину в набор непосещённых
        }
        distances[startVertex] = 0;  // Расстояние до стартовой вершины равно 0
    
        while (unvisited.size > 0) {
            // Найти вершину с минимальным расстоянием среди непосещённых
            let currentVertex = null;
            for (let vertex of unvisited) {
                if (currentVertex === null || distances[vertex] < distances[currentVertex]) {
                    currentVertex = vertex;
                }
            }
    
            // Если мы достигли целевой вершины, прерываем цикл
            if (currentVertex === endVertex) break;
    
            // Удаляем текущую вершину из непосещённых
            unvisited.delete(currentVertex);
    
            // Обновление расстояний для соседей текущей вершины
            for (let neighbor in this.graph[currentVertex]) {
                let weight = this.graph[currentVertex][neighbor];
                let alternativePath = distances[currentVertex] + weight;
    
                // Если найден более короткий путь к соседу, обновляем его
                if (alternativePath < distances[neighbor]) {
                    distances[neighbor] = alternativePath;
                    previous[neighbor] = currentVertex;
                }
            }
        }
    
        // Восстанавливаем кратчайший путь из предыдущих узлов
        let path = [];
        let step = endVertex;
        while (previous[step] !== null) {
            path.unshift(step);
            step = previous[step];
        }
        if (distances[endVertex] !== Infinity) {
            path.unshift(startVertex);
        } else {
            return null; // Путь не найден
        }
    
        return { path, distance: distances[endVertex] };
    }
    
    
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B', 1);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 2);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 1);

console.log(graph.toString());
console.log(graph.getNeighbors('A')); // [['B', 4], ['C', 2]]

console.log(graph.shortestPath('A', 'D'));