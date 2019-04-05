function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var x = arr.length-1;
    //console.log(x)
    if(arr[1] / arr[0] === arr[x] / arr[x -1]) {
        return true
    }
    return false
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false