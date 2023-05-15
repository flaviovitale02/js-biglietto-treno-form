const inputKm = document.getElementById ('userKm')
const inputAge =   document.getElementById ('userAge')
const button = document.querySelector ('button.button')
const priceKm = 0.233
let price
let result

button.addEventListener('click', function(){
    price = inputKm.value * priceKm
    if(inputAge.value < 18){
        price = price - (price * 19.5 / 100)
    }
    else if(inputAge.value >= 65){
        price = price - (price * 37.7 /100)
    }
    console.log (price)
    document.getElementById('result').innerHTML = price.toFixed(2)
})
