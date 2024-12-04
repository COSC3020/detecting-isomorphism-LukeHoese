function findDegreeSequence(graph) {
    let degreeSequence = [];

    for (let i = 0; i < graph.length; i++) {
        let degree = 0;

        for (let j = 0; j < graph[i].length; j++) {
            if (graph[i][j] == 1) {
                degree++;
            }
        }

        degreeSequence.push(degree);
    }

    return degreeSequence;
}

function countDegrees(degreeSequence) {
    let degreeCount = {};

    for (let i = 0; i < degreeSequence.length; i++) {
        let degree = degreeSequence[i];
        if (degreeCount[degree] == undefined) {
            degreeCount[degree] = 1;
        }
        else {
            degreeCount[degree]++;
        }
    }

    return degreeCount;
}

function areDegreeSequencesEqual(graph1, graph2) {
    let graph1degree = findDegreeSequence(graph1);
    let graph2degree = findDegreeSequence(graph2);

    if (graph1degree.length != graph2degree.length) {
        return false;
    }

    let graph1count = countDegrees(graph1degree);
    let graph2count = countDegrees(graph2degree);

    for (let degree in graph1count) {
        if (graph1count[degree] != graph2count[degree]) {
            return false;
        }
    }

    return true;
}

function permute(array, start) {
    let allPermutations = [];

    function genPermutations(array, start) {
        if (start == array.length) {
            allPermutations.push([...array]);
            return;
        }

        for (let i = start; i < array.length; i++) {
            [array[start], array[i]] = [array[i], array[start]];

            genPermutations(array, start + 1);

            [array[start], array[i]] = [array[i], array[start]];
        }
    }
    
    genPermutations(array, start);

    return allPermutations;
}

function are_isomorphic(graph1, graph2) {
    if (areDegreeSequencesEqual(graph1, graph2) == false) {
        return false;
    }

    let vertices = Array.from({ length: graph1.length }, (_, i) => i);
    let permutations = permute(vertices, 0);

    for (let i = 0; i < permutations.length; i++) {
        let permutation = permutations[i];
        let match = true;

        for (let j = 0; j < graph1.length; j++) {
            for (let k = 0; k < graph1.length; k++) {
                if (graph1[j][k] != graph2[permutation[j]][permutation[k]]) {
                    match = false;
                }
            }
            if (!match) break;
        }

        if (match) {
            return true;
        }
    }

    return false;
}

let graph1 = [
    [0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1],
    [0, 1, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 0, 1],
    [1, 1, 0, 0, 1, 0]    
];

let graph2 = [
    [0, 1, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0, 1],
    [0, 0, 1, 1, 1, 0]   
];

console.log(are_isomorphic(graph1, graph2));