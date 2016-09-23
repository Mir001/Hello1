  const f = function (tiv) {
    if  (tiv === 0) {
      return 1;
     
    };
  return tiv * f(tiv -1);
  
  };
  
  console.log(f(5));