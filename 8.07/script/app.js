

const form = document.querySelector('#form');
const nameInput = document.querySelector('#nameInput');
const amountInput = document.querySelector('#amountInput');
const priceInput = document.querySelector('#priceInput');

const tbody = document.querySelector('#tbody');
const $sum = document.querySelector('#sum');
const $count = document.querySelector('#count');
const $amount = document.querySelector('#amount');
const totalTable = document.querySelector('.total');
const table = document.querySelector('.table');

let products = [];
let count = 0;
let amount = 0;
let sum = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let product = {
        name: nameInput.value,
        amount: amountInput.value,
        price: priceInput.value
    }
    products.push(product);
    totalTable.classList.add('active');
    table.classList.add('active');
    tbody.innerHTML = '';
    sum = 0;
    amount = 0;
    count = 0;

    for(let i = 0; i < products.length; i++){
        sum += +products[i].price;
        amount += +products[i].amount;
        count++;
        tbody.innerHTML += `
            <tr>
                <td>${products[i].name}</td>
                <td>${products[i].amount}</td>
                <td>${products[i].price}</td>
            </tr>
        `
    }

    console.log(products.length);

    $count.innerHTML = `${count}`
    $amount.innerHTML = `${amount}`
    $sum.innerHTML = `${sum}`;
    nameInput.value = '';
    amountInput.value = '';
    priceInput.value = '';
})