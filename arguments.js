 function s(a,b,c)
 { console.log([...arguments]);
    const r = a+b+c;
    return r;
 }

 const total = s(2,3,4,54,76,67);
 console.log(total);
