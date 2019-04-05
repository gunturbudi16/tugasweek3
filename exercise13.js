function targetTerdekat(arr) {
    // you can only write your code here!
    var tampungO = []
    var tampungX = []
        for(var i=0;i<arr.length;i++){
        if(arr[i] === 'o'){
        
        tampungO.push(i);
        }
        else if(arr[i] === 'x'){
        tampungX.push(i)
        }
    }
    var xkecil = tampungX[0]
    //console.log(xkecil); ambil x pertama
    //console.log(tampungX)
    //console.log(tampungO)
        if(tampungX.length === 0){
        return 0
        }
    for(i=0;i<tampungX.length;i++){
        if((tampungX[i] - tampungO) < xkecil){
        xkecil = tampungX[i] - tampungO
        }
        else if(tampungX[i] < tampungO){
        if((tampungX[i] - tampungO) > xkecil){
        xkecil = tampungX[i] - tampungO
        }
        }
    }
    return Math.abs(xkecil)
    //return tampung ;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2