function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const contar = countup(n - 1);
      contar.unshift(n);
      return contar;
    }
  }
  console.log(countup(5));


  function rangeOfNumbers(startNum, endNum) {
    if ( endNum - startNum === 0){
    return [startNum];
    }else{
      let aumentar = rangeOfNumbers(startNum, endNum - 1)
      aumentar.push(endNum)
      return aumentar;
  
    }
  
  };
  
  console.log(rangeOfNumbers(1,6));