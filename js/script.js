let button = document.getElementById ('price_button')
let km = document.getElementById ('km')
let kmValue = km.value
let prezzo= kmValue * 0.21
let anni= document.getElementById ('anni').value
let sconto
console.log(anni)
console.log(prezzo)
console.log(kmValue)


button.addEventListener('click', function() {
    console.log('click')
    if (anni<18 ){
        sconto = prezzo * 0.8
            concole.log(sconto)
    } else if (anni>65){
        sconto= prezzo * 0.6
        concole.log (sconto)
    } else {
        sconto= prezzo
    }
}); 

