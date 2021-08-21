// get all table price value
const bestPrice = document.getElementById('best-price')

const memoryPrice = document.getElementById('memory-price')

const storagePrice = document.getElementById('storage-price')

const deliveryPrice = document.getElementById('delivery-price')

const subtotalPrice = document.getElementById('subtotal-price')

const totalPrice = document.getElementById('total-price')



// subtotal function
function subtotal(){
    subtotalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryPrice.innerText) + parseFloat(storagePrice.innerText) + parseFloat(deliveryPrice.innerText)
}

// total function
function total(){
   totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryPrice.innerText) + parseFloat(storagePrice.innerText) + parseFloat(deliveryPrice.innerText)
}




// memory button one
document.getElementById('memory-one').addEventListener('click', function(){
    memoryPrice.innerText = 0
    subtotal()
    total()
})

// memory button two
document.getElementById('memory-two').addEventListener('click', function(){
    memoryPrice.innerText = 180
    subtotal()
    total()
})

// storage button onw
document.getElementById('storage-one').addEventListener('click', function(){
    storagePrice.innerText = 0
    subtotal()
    total()

})

// storagebutton two 
document.getElementById('storage-two').addEventListener('click', function(){
    storagePrice.innerText = 100
    subtotal()
    total()

})

// storage button three
document.getElementById('storage-three').addEventListener('click', function(){
    storagePrice.innerText = 180
    subtotal()
    total()

})

// delivery button one
document.getElementById('delivery-one').addEventListener('click', function(){
    deliveryPrice.innerText = 0
    subtotal()
    total()

})

// delivery button two
document.getElementById('delivery-two').addEventListener('click', function(){
    deliveryPrice.innerText = 20
    subtotal()
    total()

})






// cupon code use
document.getElementById('cupon-btn').addEventListener('click', function(){
    const cuponInput = document.getElementById('cupon-input')
    const cuponInputText = cuponInput.value
    const cupon = cuponInputText.toLowerCase()
    if(cupon == 'stevekaku') {
        totalNumber = parseFloat(totalPrice.innerText)
        const percentage = totalNumber * 20 / 100
        totalPrice.innerText = totalNumber - percentage
    }
    cuponInput.value = ''
    
    
})