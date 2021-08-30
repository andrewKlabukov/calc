const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const totalPriceElement = document.querySelector('#total-price')
const basePrice = 6000;
const inputs = document.querySelectorAll('input');
const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]')
const radioRooms = document.querySelectorAll('input[name="rooms"]');
const checkboxAll = document.querySelectorAll('input[type="checkbox"]');


squareRange.addEventListener('input', function(){
    squareInput.value = squareRange.value;   
})

squareInput.addEventListener('input', function(){
    squareRange.value = squareInput.value;  
})

function calculate (){
    let totalPrice = parseInt(squareInput.value) * basePrice;
    
    for (const radio of radioType) {
        if(radio.checked){
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    for (const radio of radioBuilding) {
        if(radio.checked){
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    for (const radio of radioRooms) {
        if(radio.checked){
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    for (const input of checkboxAll) {
        if(input.checked){
        totalPrice = totalPrice * parseFloat(input.value);
        }
    }
    
    const formatter = new Intl.NumberFormat('ru');    
    totalPriceElement.textContent = formatter.format(totalPrice);;
}

calculate();

totalPrice = squareInput.value * basePrice;


for (const input of inputs) {
    input.addEventListener('input', function(){
        calculate();
        
    })
}
