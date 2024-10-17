console.log('binary tree');

class TreeNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left  = null;
    }
}

// function searchBT(node, target) {
//     if (node === null) {
//         return false;
//     }

//     if (node.value === target) {
//         return true;
//     }

//     if (target < node.value) {
//         return searchBT(node.left, target);
//     } else {
//         return searchBT(node.right, target)
//     }
// }


// function symmetric(leftNode, rightNode) {
//     // Если оба узла null, то это симметрично
//     if (leftNode === null && rightNode === null) {
//         return true;
//     }

//     // Если один из узлов null, а другой нет, то это несимметрично
//     if (leftNode === null || rightNode === null) {
//         return false;
//     }

//     // Проверяем, равны ли значения узлов
//     if (leftNode.value !== rightNode.value) {
//         return false;
//     }

//     // Рекурсивно проверяем симметрию для зеркальных поддеревьев
//     return symmetric(leftNode.left, rightNode.right) && symmetric(leftNode.right, rightNode.left);
// }

// // Пример создания бинарного дерева
// const root = new TreeNode(10);
// root.left = new TreeNode(5);
// root.right = new TreeNode(15);
// root.left.left = new TreeNode(3);
// root.left.right = new TreeNode(7);
// root.right.right = new TreeNode(20);

// //              10
// //             /  \
// //            5   15
// //           / \    \
// //          3   7   20


// // Поиск элемента
// console.log(searchBT(root, 7));  // true
// console.log(searchBT(root, 12)); // false


// // Пример создания бинарного дерева
// const root2 = new TreeNode(10);
// root2.left = new TreeNode(2);
// root2.right = new TreeNode(2);
// root2.left.left = new TreeNode(3);
// root2.left.right = new TreeNode(4);
// // root2.right.left = new TreeNode(4);
// // root2.right.right = new TreeNode(3);

// //              10
// //             /  \
// //            2     2
// //           / \   / \
// //          3   4  4  3

// // symmetric tree


// const root3 = new TreeNode(10);
// root3.left = new TreeNode(2);
// root3.right = new TreeNode(2);
// root3.left.left = new TreeNode(3);
// root3.left.right = new TreeNode(4);
// root3.right.left = new TreeNode(4); // Нет правого ребёнка

// //              10
// //             /  \
// //            2     2
// //           / \   /
// //          3   4  4


// // symmetric tree
// console.log('should be true but:',symmetric(root2.left, root2.right));  // true
// console.log('should be true but: ',symmetric(root.left, root.right));  // true

// const root4 = new TreeNode(10);
// root4.left = new TreeNode(2);
// root4.right = new TreeNode(2);
// root4.left.left = new TreeNode(3);
// root4.right.right = new TreeNode(3);

// //              10
// //             /  \
// //            2     2
// //           /       \
// //          3         3
// console.log('should be root4',symmetric(root4.left, root4.right));  // true



// function binaryTree(node, min, max) {
//     if (node === null) {
//         return true;
//     }

//     if (node.value > min && node.value < max) {
//         return binaryTree(node.left, min, node.value) && binaryTree(node.right, node.value, max);
//     }

//     return false;
// }


// // Создаём дерево
// const btsroot = new TreeNode(10);
// btsroot.left = new TreeNode(5);
// btsroot.right = new TreeNode(15);

// // Левое поддерево
// btsroot.left.left = new TreeNode(3);
// btsroot.left.right = new TreeNode(7);
// btsroot.left.right.left = new TreeNode(6);
// btsroot.left.right.right = new TreeNode(9);

// // Правое поддерево
// btsroot.right.right = new TreeNode(20);

// // Структура дерева:
// //        10
// //       /  \
// //      5   15
// //     / \    \
// //    3   7   20
// //       / \
// //      6   9

// console.log('binaryTree', binaryTree(btsroot, -Infinity , +Infinity));


// function maxDeepth(node) {   
//     if (node == null) {
//         return 0; 
//     }

//         return 1 + Math.max(maxDeepth(node.left), maxDeepth(node.right));
// }

// // Структура дерева:
// //        10
// //       /  \
// //      5   15
// //     / \    \
// //    3   7   20
// console.log('btsroot1', maxDeepth(btsroot));


// class BinarySearchTreeNode {
//     constructor(value) {
//         this.left = null;
//         this.right = null
//         this.value = value;
//     }


// }

// function insertBST(value, node) {
//     // Если дерево пустое, создаем новый узел
//     if (!node) {
//         return new BinarySearchTreeNode(value);
//     }

//     // Если значение больше текущего узла, идем вправо
//     if (value > node.value) {
//         // Если правого узла нет, создаем его
//         if (!node.right) {
//             node.right = new BinarySearchTreeNode(value);
//         } else {
//             // Иначе рекурсивно добавляем в правое поддерево
//             insertBST(value, node.right);
//         }
//     } 
//     // Если значение меньше или равно текущему узлу, идем влево
//     else {
//         // Если левого узла нет, создаем его
//         if (!node.left) {
//             node.left = new BinarySearchTreeNode(value);
//         } else {
//             // Иначе рекурсивно добавляем в левое поддерево
//             insertBST(value, node.left);
//         }
//     }
// }




// // 10
// // check if 10 has already right ? add to right : create 
// // 20 

// const newBST = new BinarySearchTreeNode(10);

// // Вставляем элементы в дерево  
// insertBST(20, newBST);   // Вставляем 20 в правую часть дерева
// insertBST(5, newBST);    // Вставляем 5 в левую часть дерева
// insertBST(16, newBST);   // Вставляем 16 в правое поддерево (где 20)
// insertBST(23, newBST);   // Вставляем 23 в правое поддерево (где 20)

// // Выводим результат
// console.log('newBST', newBST);


// function findMin(node) {
//     return (node.left != null) ? findMin(node.left): node;
// }


// function findMax(node) {
//     return ( node.right != null)  ? findMax(node.right) : node;
// }

// // Выводим результат
// console.log('find min', findMin(newBST));
// console.log('find max', findMax(newBST));

// let globalArr = [];

// function findAllPaths(node, path = []) {
//     if (node === null) {
//         return;
//     }

//     // Добавляем текущее значение узла в путь
//     path.push(node.value);

//     // Если узел является листом (нет детей), сохраняем путь
//     if (node.left === null && node.right === null) {
//         globalArr.push([...path]);
//     }

//     // Рекурсивные вызовы для левого и правого поддеревьев
//     findAllPaths(node.left, [...path]);  // Передаем копию пути
//     findAllPaths(node.right, [...path]);  // Передаем копию пути
// }

// // Сброс массива путей для нового дерева
// function resetGlobalArr() {
//     globalArr = [];
// }

// // Вывод всех путей для дерева
// function logPaths(tree, name) {
//     resetGlobalArr();
//     findAllPaths(tree);
//     console.log(`Paths for ${name}:`, globalArr);
// }


// // Дерево:
// //        10
// //       /  \
// //      5   15
// //     / \    
// //    3   7   

// const tree1 = new TreeNode(10);
// tree1.left = new TreeNode(5);
// tree1.right = new TreeNode(15);

// tree1.left.left = new TreeNode(3);
// tree1.left.right = new TreeNode(7);

// logPaths(tree1, "Tree 1");

// // Ожидаемый результат:
// // Paths for Tree 1: [ [10, 5, 3], [10, 5, 7], [10, 15] ]


// // Дерево:
// //        10
// //       /  \
// //      5   15
// //     / \    \
// //    3   7   20
// //       / \
// //      6   9

// const tree2 = new TreeNode(10);
// tree2.left = new TreeNode(5);
// tree2.right = new TreeNode(15);
// tree2.left.left = new TreeNode(3);
// tree2.left.right = new TreeNode(7);
// tree2.left.right.left = new TreeNode(6);
// tree2.left.right.right = new TreeNode(9);
// tree2.right.right = new TreeNode(20);

// logPaths(tree2, "Tree 2");

// // Ожидаемый результат:
// // Paths for Tree 2: [ [10, 5, 3], [10, 5, 7, 6], [10, 5, 7, 9], [10, 15, 20] ]


// // Дерево:
// //        8
// //       / 
// //      3   
// //     / \    
// //    1   6  
// //       / 
// //      4  

// const tree3 = new TreeNode(8);
// tree3.left = new TreeNode(3);
// tree3.left.left = new TreeNode(1);
// tree3.left.right = new TreeNode(6);
// tree3.left.right.left = new TreeNode(4);

// logPaths(tree3, "Tree 3");

// // Ожидаемый результат:
// // Paths for Tree 3: [ [8, 3, 1], [8, 3, 6, 4] ]



// // Дерево:
// //        7
// //       / 
// //      5   
// //     / 
// //    2

// const tree4 = new TreeNode(7);
// tree4.left = new TreeNode(5);
// tree4.left.left = new TreeNode(2);

// logPaths(tree4, "Tree 4");

// // Ожидаемый результат:
// // Paths for Tree 4: [ [7, 5, 2] ]


// function LWA(nodeLeftValue, nodeRightValue, node) {
//     // Базовый случай: если дерево пусто, вернуть null
//     if (node === null) {
//         return null;
//     }

//     // Если текущий узел равен одному из значений, вернуть этот узел
//     if (node.value === nodeLeftValue || node.value === nodeRightValue) {
//         return node;
//     }

//     // Рекурсивные вызовы для левого и правого поддеревьев
//     let leftSubTree = LWA(nodeLeftValue, nodeRightValue, node.left);
//     let rightSubTree = LWA(nodeLeftValue, nodeRightValue, node.right);

//     // Если оба поддерева вернули ненулевые значения, то текущий узел является общим предком
//     if (leftSubTree !== null && rightSubTree !== null) {
//         return node;
//     }

//     // Если найдено значение только в одном из поддеревьев, вернуть его
//     return leftSubTree !== null ? leftSubTree : rightSubTree;
// }

// // Дерево:
// //        10
// //       /  \
// //      5   15
// //     / \    
// //    3   7   
// // Вызов функции для поиска общего предка для узлов 3 и 7
// console.log('LWA', LWA(3, 7, tree1));

// function isBalanced(node) {
//     console.log("NOED@#", node);
//     // Если узел пустой, вернуть 0 (глубина пустого узла)
//     if (node === null) {
//         return 0;
//     }

//     // Вычисляем глубину левого поддерева
//     let leftDepth = isBalanced(node.left);
//     console.log('leftDepth', leftDepth);
//     if (leftDepth === -1) {
//         return -1; // Если левое поддерево несбалансировано
//     }

//     // Вычисляем глубину правого поддерева
//     let rightDepth = isBalanced(node.right);
//     console.log('rightDepth', rightDepth);
//     if (rightDepth === -1) {
//         return -1; // Если правое поддерево несбалансировано
//     }

//     // Если разница глубин левого и правого поддеревьев больше 1, то дерево несбалансировано
//     if (Math.abs(leftDepth - rightDepth) > 1) {
//         return -1; // Несбалансированное дерево
//     }

//     // Возвращаем максимальную глубину текущего узла
//     return Math.max(leftDepth, rightDepth) + 1;
// }

// // Пример дерева
// //        10
// //       /  \
// //      5   15
// //     / \    
// //    3   7   

// console.log('isBalanced1', isBalanced(tree1) !== -1); // Проверяет, сбалансировано ли дерево

function findMin(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

function deleteNodeBST(node, valueToDelete) {
    // if node is null just return null
    if (node == null) {
        console.log(`Узел со значением ${valueToDelete} не найден.`);
        return null;
    }

    if (node?.value === valueToDelete) {
        console.log(`Найден узел со значением ${valueToDelete}.`);
        
        // if node has only one subtree or is a leaf
        if (node.left == null || node.right == null) {
            console.log(`Узел со значением ${valueToDelete} имеет одно поддерево или является листом.`);
            node = node.left == null ? node.right : node.left;
        } 
        // if node has two subtrees
        else {
            console.log(`Узел со значением ${valueToDelete} имеет два поддерева.`);
            let minRight = findMin(node.right); // Найти минимальный элемент в правом поддереве
            console.log(`Минимальный элемент в правом поддереве: ${minRight.value}`);
            node.value = minRight.value; // Заменить значение удаляемого узла
            node.right = deleteNodeBST(node.right, minRight.value); // Удалить минимальный узел в правом поддереве
        }
    } else {
        if (valueToDelete < node.value) {
            console.log(`Значение ${valueToDelete} меньше ${node.value}, идем влево.`);
        } else {
            console.log(`Значение ${valueToDelete} больше ${node.value}, идем вправо.`);
        }
        
        // Продолжаем поиск в поддеревьях
        node.left = deleteNodeBST(node.left, valueToDelete);
        node.right = deleteNodeBST(node.right, valueToDelete);
    }

    return node;
}


// Дерево:
//        10
//       /  \
//      5   15
//     / \    
//    3   7   
//       /
//      4


const skitusTree = new TreeNode(10);
skitusTree.left = new TreeNode(5);
skitusTree.right = new TreeNode(15);

skitusTree.left.left = new TreeNode(3);
skitusTree.left.right = new TreeNode(7);
skitusTree.left.right.left = new TreeNode(4);

deleteNodeBST(skitusTree, 5);

deleteNodeBST(skitusTree, 15);




const skitusBTree = new TreeNode(10);
skitusBTree.left = new TreeNode(5);
skitusBTree.right = new TreeNode(15);

skitusBTree.left.left = new TreeNode(3);
skitusBTree.left.right = new TreeNode(7);


// let globalQueue = [];

// function BFS(node) {
//     if (node == null) {
//         return null;
//     }

//     // Очередь для хранения узлов, которые нужно обработать
//     let queue = [];
    
//     // Добавляем корневой узел в очередь
//     queue.push(node);

//     // Пока очередь не пуста
//     while (queue.length > 0) {
//         // Извлекаем узел из начала очереди
//         let currentNode = queue.shift();

//         // Добавляем значение узла в globalQueue
//         globalQueue.push(currentNode.value);

//         // Если есть левый ребёнок, добавляем его в очередь
//         if (currentNode.left != null) {
//             queue.push(currentNode.left);
//         }

//         // Если есть правый ребёнок, добавляем его в очередь
//         if (currentNode.right != null) {
//             queue.push(currentNode.right);
//         }
//     }

//     return globalQueue;
// }

// // Запускаем BFS
// BFS(skitusBTree);
// console.log('globalQueue', globalQueue);  // Должен вывести [10, 5, 15, 3, 7]

let globalQueue = [];

function BFSRecursive(nodes) {
    // Базовый случай: если массив узлов пустой, завершить рекурсию
    if (nodes.length === 0) {
        return;
    }

    // Массив для хранения узлов следующего уровня
    let nextLevelNodes = [];

    // Проходим по всем узлам текущего уровня
    for (let node of nodes) {
        globalQueue.push(node.value);

        // Добавляем потомков (левый и правый) в массив для следующего уровня
        if (node.left !== null) {
            nextLevelNodes.push(node.left);
        }

        if (node.right !== null) {
            nextLevelNodes.push(node.right);
        }
    }

    // Рекурсивный вызов для следующего уровня
    BFSRecursive(nextLevelNodes);
}
// Запускаем BFS через рекурсию



BFSRecursive([skitusBTree]);



console.log('globalQueue', globalQueue);  // Должен вывести [10, 5, 15, 3, 7]


function countLeavesBST(node) {
    console.log('node.value', node?.value);

    if (node == null) {
        return 0;
    }

    if (node?.left == null && node?.right == null) {
        return 1;
    }

    return countLeavesBST(node?.left) + countLeavesBST(node?.right);
}

// Дерево:
//        10
//       /  \
//      5   15
//     / \    
//    3   7   



countLeavesBST(skitusBTree);
console.log('count', count);
