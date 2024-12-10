const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const graph1 = [
    [0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1],
    [0, 1, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 0, 1],
    [1, 1, 0, 0, 1, 0]
];

const graph2 = [
    [0, 1, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0, 1],
    [0, 0, 1, 1, 1, 0]
];

const ans1 = are_isomorphic(graph1, graph2);
assert(JSON.stringify(ans1) == JSON.stringify(true));

const graph3 = [];

const graph4 = [];

const ans2 = are_isomorphic(graph3, graph4);
assert(JSON.stringify(ans2) == JSON.stringify(true));

const graph5 = [
    [1,1,1],
    [1,1,1],
    [1,1,1]
];

const graph6 = [
    [1,1,1],
    [1,1,1],
    [1,1,1]
];

const ans3 = are_isomorphic(graph5, graph6);
assert(JSON.stringify(ans3) == JSON.stringify(true));

const graph7 = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

const graph8 = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

const ans4 = are_isomorphic(graph7, graph8);
assert(JSON.stringify(ans4) == JSON.stringify(true));

const graph9 = [
    [1,0,0],
    [0,1,0],
    [0,0,1]
];

const graph10 = [
    [0,0,1],
    [0,1,0],
    [1,0,0]
];

const ans5 = are_isomorphic(graph9, graph10);
assert(JSON.stringify(ans5) == JSON.stringify(false));

const graph11 = [
    [1,0,0],
    [0,1,0],
    [0,0,1]
];

const graph12 = [
    [1,0]
    [0,1]
];

const ans6 = are_isomorphic(graph11, graph12);
assert(JSON.stringify(ans6) == JSON.stringify(false));
