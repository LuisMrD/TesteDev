window.addEventListener('load', main)

function main() {
const inputProduct = document.getElementById('inputProduct')
const addProduct = document.getElementById('addProduct')
const inputReceivedValue = document.getElementById('inputReceivedValue')
const addReceivedValue = document.getElementById('addReceivedValue')
const calculateMoneyChange = document.getElementById('calculateMoneyChange')
const productsList = document.getElementById('productsList')
const totalProductsValue = document.getElementById('totalProductsValue')
const receivedValue = document.getElementById('receivedValue')
const moneyChange = document.getElementById('moneyChange')
const newPurchase = document.getElementById('newPurchase')

const qtyOf100 = document.getElementById('cash100')
const qtyOf50 = document.getElementById('cash50')
const qtyOf20 = document.getElementById('cash20')
const qtyOf10 = document.getElementById('cash10')
const qtyOf5 = document.getElementById('cash5')
const qtyOf2 = document.getElementById('cash2')
const qtyOf1 = document.getElementById('cash1')
const qtyOf050 = document.getElementById('cash050')
const qtyOf025 = document.getElementById('cash025')
const qtyOf010 = document.getElementById('cash010')
const qtyOf005 = document.getElementById('cash005')

const products = []
let receivedValueFromInput = null
let sumValueProducts = null

inputProduct.focus()

addProduct.addEventListener('click', addNewProduct)
inputProduct.addEventListener('keyup', getEnterKey)
addReceivedValue.addEventListener('click', addNewReceivedValue)
inputReceivedValue.addEventListener('keyup', getEnterKey)
calculateMoneyChange.addEventListener('click', calcMoneyChange)
newPurchase.addEventListener('click', refresh)

function refresh() {
    location.reload()
    return false
}

function getEnterKey(event) {
    if(  event.keyCode === 13 && document.activeElement === inputProduct){
        addNewProduct()
    }
    if(  event.keyCode === 13 && document.activeElement === inputReceivedValue){
        addNewReceivedValue()
    }
}

function addNewProduct() {
    if(inputProduct.value.length > 0){
        products.push(inputProduct.value)    
        let li = document.createElement('li')
        li.classList.add('card-text')
        li.innerText = 'R$ ' + inputProduct.value
        inputProduct.value = ""
        productsList.appendChild(li)
    
        showTotalValue()
    }
}

function showTotalValue() {
    sumValueProducts = products.reduce((acc, cur) => {
        return parseFloat(acc) + parseFloat(cur)
    }, 0)

    totalProductsValue.innerHTML = ""
    totalProductsValue.innerText = 'R$ ' + sumValueProducts
}

function addNewReceivedValue() {
    if(inputReceivedValue.value.length > 0){
        receivedValueFromInput = inputReceivedValue.value
        inputReceivedValue.value = ""
        receivedValue.innerText = 'R$ ' + receivedValueFromInput        
    }
}

function calcMoneyChange() {
    calcMoneyChange = receivedValueFromInput - sumValueProducts
    moneyChange.innerText = 'R$ ' + calcMoneyChange

    amountOfChange(calcMoneyChange)
}

function amountOfChange(receivedValue) {
    let availableCash = [100, 50, 20, 10, 5, 2, 1, .5, .25, .1, .05]
    let moneyChange = {'100': 0, '50': 0, '20':0, '10': 0, '5': 0, '2': 0, '1': 0, '0.5': 0, '0.25':0, '0.1': 0, '0.05': 0}

    availableCash.forEach( cash => {
        while( receivedValue >= cash) {
            moneyChange[cash] += 1
            receivedValue -= cash
        }
    })

    qtyOf100.innerText = moneyChange[100]
    qtyOf50.innerText = moneyChange[50]
    qtyOf20.innerText = moneyChange[20]
    qtyOf10.innerText = moneyChange[10]
    qtyOf5.innerText = moneyChange[5]
    qtyOf2.innerText = moneyChange[2]
    qtyOf1.innerText = moneyChange[1]
    qtyOf050.innerText = moneyChange[.5]
    qtyOf025.innerText = moneyChange[.25]
    qtyOf010.innerText = moneyChange[.1]
    qtyOf005.innerText = moneyChange[.05]
}

}




