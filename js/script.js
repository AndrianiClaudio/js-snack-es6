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
    const this_array = array.filter((element,index) => {
        return (index >= a && index <= b);
    });
    const container = document.querySelector('.container');
    this_array.forEach((element,index) => {
        container.innerHTML+= `
        <div>
            ${index} :${element}
        </div>
        `;
    });
    return this_array;
}
function showValues(array,a,b) {
    console.log(razzo_foreach(array, a, b));
    console.log(razzo_filter(array, a, b));
}
const my_array = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8];
let a = document.getElementById('insert_a');
let b = document.getElementById('insert_b');
const submit = document.getElementById('submit');

function check(a, b) {
    submit.disabled = true;
    const errorInputDiv = document.querySelector('.error-input');
    const errorInput = '<strong style="color:red;">Inserisci entrambi gli estremi estremi!</strong>';
    const errorInputA = "<strong style= color:red;'' >Inserisci l'estremo a!</strong>";
    const errorInputB = "<strong style= color:red;'' >Inserisci l'estremo b!</strong>";

    (a.value == '' && b.value == '') ? errorInputDiv.innerHTML = errorInput : 
        (a.value == '') ? errorInputDiv.innerHTML = errorInputA  :
            (b.value == '') ? errorInputDiv.innerHTML = errorInputB :
                submit.disabled = false;
                errorInputDiv.innerHTML = '';
    if (a.value == '' && b.value == '') {
        errorInputDiv.innerHTML = errorInput;
    } else if(a.value == '') {
        errorInputDiv.innerHTML = errorInputA;
    } else if(b.value == '') {
        errorInputDiv.innerHTML = errorInputB;
    } else {
        submit.disabled = false;
        errorInputDiv.innerHTML = '';
    }
}


function insertAB() {
    return [document.getElementById('insert_a'), document.getElementById('insert_b')];
}

a.addEventListener('change',function () {
    [a,b,] = insertAB();
    (a > b) ? check(b,a) : check(a,b);
});
b.addEventListener('change',function() {
    [a,b,] = insertAB();
    (a > b) ? check(b,a) : check(a,b);
    // check(a,b);
});
a.addEventListener('focus',function () {
    [a,b,] = insertAB();
    (a > b) ? check(b,a) : check(a,b);
    // check(a,b);
});
b.addEventListener('focus',function() {
    [a,b,] = insertAB();
    (a > b) ? check(b,a) : check(a,b);
    // check(a,b);
});

submit.addEventListener('click',function(event) {
    event.preventDefault();
    [a, b,] = insertAB();    
    console.log('a: ',a,'b: ',b);
    // const container = document.querySelector('.container');
    showValues(my_array, a.value, b.value);
});