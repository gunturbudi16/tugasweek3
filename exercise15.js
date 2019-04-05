// function groupAnimals(animals) {
//     // you can only write your code here!
    
//     var result =[]
//     var tampung;
//     for(var i=0;i<animals.length;i++){
//       for(var j=0;j<animals.length;j++){
//         if(animals[i]>animals[j+1]){
//           tampung =animals[j]
//           animals[j]=animals[j+1]
//           animals[j+1]=tampung;
//         }
//       }
//     }
//     //console.log(tampung)
//     for(var i=0;i<animals.length;i++){
//       var found = false;
//       for(var j=0;j<result.length;j++){
//         if(result[j][0][0]===animals[i][0]){
//           result[j].push(animals[i]);
//           found = true;
//           break;
//         }
//       }
//       if(!found){
//         result.push([animals[i]]);
//       }
//     }
//     return result;
//   }
  
//   // TEST CASES
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//   // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

function groupAnimals(animals) {
  // you can only write your code here!   


  //var arrayLength = animals.length;
  // var i; var j; var temp; var count = 0;
  for (i = 0; i < animals.length; i++) {
      for (j = 0; j < animals.length - 1; j++) {
          if (j != i && animals[i] < animals[j]) {
              temp = animals[i];
              animals[i] = animals[j];
              animals[j] = temp;
          }
      }
  }
  var arr_res = [];
  var first_alphabet = animals[0][0];
  var arr_temp = [];
  for (var i = 0; i < animals.length; i++) {
    if (animals[i][0] === first_alphabet) {
      arr_temp.push(animals[i]);
    }else {
      arr_res.push(arr_temp);
      arr_temp = [];
      first_alphabet = animals[i][0];
      arr_temp.push(animals[i]);
    }
    if (i === animals.length-1) {
      arr_res.push(arr_temp);
    }
  }
  return arr_res;
}
  // var result=[]
  // for(k=1;k<animals.length;k++){
  //     var inside=[animals[0]]
  //     if(inside[0][0]===animals[k][0]){
  //         inside.push(animals[k])
  //     }else{
  //         inside=[animals[k]]
  //     }
  //     result.push(inside)
  // }
  // return result

  // for(let
  //     for(var j=0;j<animals.length;j++){
  //         if(animals[j]>animals[j+1]){
  //             var tampung =animals[j]
  //             animals[j]=animals[j+1]
  //             animals[j+1]=tampung
  //         }
  //     }
  // return animals


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));