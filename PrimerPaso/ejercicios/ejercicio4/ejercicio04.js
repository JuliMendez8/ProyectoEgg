function revertir(palabra){
    var array = palabra.split("");
      var reverso = array.reverse();
      var unir = reverso.join();
      return unir;
  }
  
  console.log(revertir("Hola"));


function revertirPequeño(palabra){
    var palabraReversa = palabra.split("").reverse().join("");
    return palabraReversa;
}

console.log(revertirPequeño("Hola"))