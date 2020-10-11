// utility js function set

function getAllIndexes(arr, val) {
    let indexes = [], i;

    for(i = 0; i < arr.length; i++) {
        if(arr[i] === val) { indexes.push(i) }
    }

    return indexes;

}

function checkIfSubset(subset, superset) {
    return subset.every(val => superset.includes(val));
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length == b.length &&
        a.every(val => b.includes(val));
}