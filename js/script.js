let button = document.getElementById ('price_button')
let km = document.getElementById ('km')
let kmValue = km.value
let prezzo= kmValue * 0.21
let anni= document.getElementById ('anni').value
let sconto
console.log(anni)
console.log(prezzo)
console.log(kmValue)


if (button) {
    button.addEventListener('click', function() {
        console.log('click')
        if (anni < 18 ){
            sconto = prezzo * 0.8
             console.log(sconto)
        } 
    }); 
}

if (button) {
    button.addEventListener('click', function() {
        if (anni > 65){
            let sconto_2 = prezzo * 0.6
            console.log (sconto_2)
        }
    }); 
}

if (button) {
    button.addEventListener('click', function() {
        if ((anni > 17)  || (anni < 66 ))  {
            let sconto = prezzo 
            console.log (sconto)

        }
    }); 
}


