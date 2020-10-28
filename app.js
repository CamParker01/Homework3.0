function diffArray(arr1, arr2) {
    var newArr = [];
    for(var i = 0; i < first.length; i++){
      if (Second.indexOf(first[i] === -1)){
        newArr.push(first[i]);
      }
    
    
    return newArr;{

    }

    }
  }
  

  function destroyer(arr) {
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; i < args.length; i++){
        if(arr[i] === args[j]){
          delete arr[i];
        }
      
      }
    }
      return arr.filter(Boolean)
  }
  
 console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


 function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");

console.log(translatePigLatin("consonant"))


  
  



   