// Scrivere una funzione(e lanciarla : razzo: ) che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
/**
 * 
 * @param {*} array array di elementi
 * @param {*} a numero intero
 * @param {*} b numero intero  maggiore di a
 * @returns array con posizione compresa tra a e b
 */
function razzo_foreach(array,a,b) {
    const new_array = [];
    array.forEach((element,index) => {
        if(index >= a && index <= b) {
            new_array.push(element);
        }
    });
    return new_array;
}
/**
 * 
 * @param {*} array array di elementi
 * @param {*} a numero intero
 * @param {*} b numero intero  maggiore di a
 * @returns array con posizione compresa tra a e b
 */
function razzo_filter(array,a,b) {
    return array.filter((element,index) => {
        return (index >= a && index <= b);
    });
}

const my_array = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8];
const a = 5;
const b = 10;
console.log(razzo_foreach(my_array, a, b));
console.log(razzo_filter(my_array, a, b));