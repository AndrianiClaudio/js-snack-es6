// Scrivere una funzione(e lanciarla : razzo: ) che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
/**
 * 
 * @param {*} array array di elementi
 * @param {*} a numero intero
 * @param {*} b numero intero  maggiore di a
 * @returns array con posizione compresa tra a e b
 */
function showValues(array,a,b) {
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
function check(a, b) {
    submit.disabled = true;
    const errorInputDiv = document.querySelector('.error-input');
    const errorInputDiv0 = document.querySelector('.error-input-0');
    // check maggiore o uguale a 0
    if(a.value < 0 || b.value <0) {
        errorInputDiv0.innerHTML = '<strong style="color:red;">Inserisci valori maggiori di 0!!!</strong>';
    }
    // check inserito input nella input text
    (a.value == '' && b.value == '') ? errorInputDiv.innerHTML = '<strong style="color:red;">Inserisci entrambi gli estremi estremi!</strong>' : 
        (a.value == '') ? errorInputDiv.innerHTML = "<strong style= color:red;'' > Inserisci l'estremo a!</strong>"  :
            (b.value == '') ? errorInputDiv.innerHTML = "<strong style= color:red;'' >Inserisci l'estremo b!</strong>" :
                errorInputDiv.innerHTML = '';
                submit.disabled = false;
}
function getAB() {
    return [document.getElementById('insert_a'), document.getElementById('insert_b')];
}

const my_array = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8];
let a = document.getElementById('insert_a');
let b = document.getElementById('insert_b');
const submit = document.getElementById('submit');
a.addEventListener('focus',function () {
    [a,b] = getAB();
    (a > b) ? check(b,a) : check(a,b);
});
b.addEventListener('focus',function() {
    [a,b] = getAB();
    (a > b) ? check(b,a) : check(a,b);
});
a.addEventListener('change',function () {
    [a,b] = getAB();
    (a > b) ? check(b,a) : check(a,b);
});
b.addEventListener('change',function() {
    [a,b] = getAB();
    (a > b) ? check(b,a) : check(a,b);
});
submit.addEventListener('click',function(event) {
    // event.preventDefault();
    [a, b] = getAB();
    //stampa valori (inverti a con b se a > b)
    (a.value > b.value) ? showValues(my_array, b.value, a.value) : showValues(my_array, a.value, b.value);
});