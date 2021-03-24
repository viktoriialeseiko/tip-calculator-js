const bill = document.querySelector('#bill-amount');
const people = document.querySelector('#number-of');
const calculate = document.querySelector('#calculate');
const amount = document.querySelector('#amount');
let select = document.querySelector('#select');
let tip = document.querySelector('.hide');
tip.className ='hide';


calculate.addEventListener('click', function(){
    if(bill.value === '' || select.value === 'none'){
        alert('Please enter a value');
    } 
    let tips = 0;
    if(people.value === '1' || !people.value){
        tips = (bill.value * select.value).toFixed(2);
        amount.innerText = `$ ${tips}`;
    } else{
        tips = (bill.value * select.value / people.value).toFixed(2);
        amount.innerText = `$ ${tips} each`;
    }
    tip.classList.replace('hide', 'show')
})

bill.addEventListener('click', function(){
    bill.value = '';
    select.value = 'none';
    people.value = '';
})