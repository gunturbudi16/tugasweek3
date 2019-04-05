function pasanganTerbesar(num) {
    // you can only write your code here!
    var ubahstr=num.toString();
    var hasil=0;
    //for(var i=ubahstr.length-1;i>=0;i--){
    for(var i=0;i<ubahstr.length-1;i++){
        if(hasil<Number(ubahstr[i]+ubahstr[i+1])){
           //console.log(hasil)
            hasil = Number(ubahstr[i]+ubahstr[i+1]);
        }
    }
    return hasil;
  };
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99