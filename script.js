const inputKm =parseInt( document.getElementById (userKm))
const inputAge = parseInt(document.getElementById (userAge)) 
const button = document.querySelector ('button.button')
const priceKm = 0.233
let price

button.addEventListener('click', function(){
    price = inputKm * priceKm
    if(inputAge < 18){
        price = price - price(100 / 19.4)
    }
    else if(inputAge > 65){
        price = price - price(100 / 37.7)
    }
    console.log (price)
})
