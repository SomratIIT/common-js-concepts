function stop()
{
    let counter = 10;
    return function(){
        counter++;
        return counter;
    };
    
}
const output = stop();
console.log(output);