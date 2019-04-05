function balikString(kata){
    var kataa = ''
    for(var i=kata.length-1; i>=0; i--){
      kataa += kata[i]
    }
    return kataa
  }
console.log(balikString("Hello world"))