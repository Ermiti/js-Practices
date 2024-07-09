
function findingTheMissingNumber(array, n) {
    while (n != 0) {
        if (array.filter((a) => a == n)) {
            n = n - 1
        }
        else {
           console.log(n)
           break
        }
    }
}
console.log(findingTheMissingNumber([1, 2 , 3], 3))



function flatten(arr) {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(flatten(curr));
        }
        return acc.concat(curr);
    }, []);
}

const deeplyNestedArray = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]];
const result = flatten(deeplyNestedArray);


function areDistinct(str, i, j) {
    var visited = new Array(26).fill(false);
    for (var k = i; k <= j; k++) {
        if (visited[str.charAt(k) - 'a']) return false;
        visited[str.charAt(k) - 'a'] = true;
    }
    return true;
}

function longestUniqueSubstr(str) {
    var n = str.length;
    var res = 0;
    for (var i = 0; i < n; i++) {
        for (var j = i; j < n; j++) {
            if (areDistinct(str, i, j)) {
                res = Math.max(res, j - i + 1);
            }
        }
    }
    return res;
}

var inputStr = "uguhsdfghjklmnbcxawertyusblvbhjffvofev";
console.log("The input string is " + inputStr);
var length = longestUniqueSubstr(inputStr);
console.log("The length of the longest non-repeating character substring is " + length);
