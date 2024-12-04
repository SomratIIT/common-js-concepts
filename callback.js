// function gr(greet,name){
//     greet(name);
// }

// function greet(name){
// console.log('good Morning',name);
// }

// gr(greet,'Somrat');



function greet(gr,name){
    gr(name);
}
function gr(name){
    console.log(`My name is ${name}`);
}
greet(gr,'Somrat');