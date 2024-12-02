// 8 ways tro get undefined

// 1   declare kore value na deyay undefined
let a;
console.log(a); // output : undefined

// 2   return na thakay undefined
function second(a,b){
    const total = a+b;
}
const output = second(2,2);
console.log(output);


// 3  parameter that is not passed will be undefined.
function third(a,b,c,d){
    const total3 = a + b + c + d;
    console.log(a,b,c,d);
    return total3;
}
const output3 = third(2,5);
// console.log(output3);

// 4  if return has nothing on the right side will return undefined.

//5 if any property which is not present in the object ,and i call that; that will provide undefined. 

// 6 try to print an index number which is not present in the array