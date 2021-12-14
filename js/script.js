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
function razzo_filter(array,a,b) {
    return array.filter((element,index) => {
        return (index >= a && index <= b);
    });
}
function showValues(array,a,b) {
    console.log(razzo_foreach(array, a, b));
    console.log(razzo_filter(array, a, b));
}
const my_array = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8];
let a = document.getElementById('insert_a');
let b = document.getElementById('insert_b');
const submit = document.getElementById('submit');

function check (a,b) {
    const errorInputDiv = document.querySelector('.error-input');
    const errorInputStrong = '<strong style="color:red;">Inserisci entrambi gli estremi estremi!</strong>';
    if(a.value != '') {
        if(b.value != '') {
            submit.disabled = false;
            // console.log('if: ',submit.disabled);
            errorInputDiv.innerHTML = '';
        } else {
            submit.disabled = true;
            // console.log('else1: ',submit.disabled);
            errorInputDiv.innerHTML = errorInputStrong;
        }
    } else {
        submit.disabled = true;
        // console.log('else2: ',submit.disabled);
        errorInputDiv.innerHTML = errorInputStrong;
    }
}

b.addEventListener('change',function() {
    a = document.getElementById('insert_a');
    b = document.getElementById('insert_b');
    // (b.value == '') ? submit.disabled = false : firstCondition;
    check(a,b);
});

a.addEventListener('change',function () {
    a = document.getElementById('insert_a');
    b = document.getElementById('insert_b');
    // (a.value == '') ? submit.disabled = false : secondCondition ;
    check(a,b);
});

submit.addEventListener('click',function(event) {
    event.preventDefault();
    a = document.getElementById('insert_a');
    b = document.getElementById('insert_b');
    console.log('a: ',a,'b: ',b);
    showValues(my_array, a.value, b.value);
});