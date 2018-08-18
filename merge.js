// merge sort function
// it's beautiful
function mergeSort(arr){
    if (arr.length < 2){
        return arr;
    }
    var middle = Math.floor(arr.length/2);
    var left = arr.slice(0,middle);
    var right = arr.slice(middle);
    // okay so far
    return merge(mergeSort(left), mergeSort(right));
}
// i know we need a .shift(),  a while loop
function merge(left, right){
    var output = [];
    while (left.length > 0 && right.length > 0){
        if (left[0] < right[0]){
            output.push(left.shift());
        }else{
            output.push(right.shift());
        }
    }
    // leftovers
    while (left.length > 0){
        output.push(left.shift());
    }
    while (right.length > 0){
        output.push(right.shift());
    }
    return output;
}

var unsorted = [4,3,6,1,7,9,2];
//              1,2,3,4,6,7,9
var unsorted2 = [44,25,64,75,23,5,113,11,62,75];

console.log(mergeSort(unsorted));
console.log(mergeSort(unsorted2));