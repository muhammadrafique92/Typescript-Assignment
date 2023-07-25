/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time.

*/

function make_sandwich(ingredients){
    console.log('You ordered sandwich with following ingredients:')

    for(let i in ingredients){
        let item = ingredients[i];
        console.log(item)

    }
    console.log('---------------------------')
}

make_sandwich(['tomatos','onion','cucumber','chilli'])
make_sandwich(['chilli','Mayonesse','Pepper'])
make_sandwich(['salad','cheese'])