// get price function
function getPrice(type, price) {
    const productPrice = document.getElementById(type + '-price')
    const productPriceNumber = productPrice.innerText

    const subtotal = document.getElementById('subtotal')
    const subtotalNumber = subtotal.innerText

    const total = document.getElementById('total')
    const totalNumber = total.innerText
    
    productPrice.innerText = price
    subtotal.innerText = parseFloat(subtotalNumber) + price
    total.innerText = parseFloat(totalNumber) + price
}


// Memory-One event handler
document.getElementById('memory-one').addEventListener('click', function(){
    getPrice('memory', 0)
})

// Memory-Two event handler
document.getElementById('memory-two').addEventListener('click', function(){
    getPrice('memory', 180)
})



// storage-one event handler
document.getElementById('storage-one').addEventListener('click', function(){
    getPrice('storage', 0)
})

// storage-two event handler
document.getElementById('storage-two').addEventListener('click', function(){
    getPrice('storage', 100)
})

// storage-three event handler
document.getElementById('storage-three').addEventListener('click', function(){
    getPrice('storage', 180)
})



// delivery event handler
document.getElementById('delivery-one').addEventListener('click', function(){
    getPrice('delivery', 0)
})

document.getElementById('delivery-two').addEventListener('click', function(){
    getPrice('delivery', 20)
})



// cupon code use
document.getElementById('cupon-btn').addEventListener('click', function(){
    const cuponInput = document.getElementById('cupon-input')
    const cuponInputText = cuponInput.value
    const cupon = cuponInputText.toLowerCase()
    
    if(cupon == 'stevekaku') {
        const total = document.getElementById('total')
        const totalNumber = parseFloat(total.innerText)
        percentage = totalNumber * 20 / 100
        total.innerText = totalNumber - percentage
    }
    cuponInput.value = ''
})