let button = document.getElementById ('price_button')
let km = document.getElementById ('km')
let kmValue = km.value
let prezzo= km * 0.21


console.log(kmValue)
console.log(eta)

if (button) {
    button.addEventListener('click', function() {

        if (eta === minorenne ){
            let eta= document.getElementById(eta).value = eta.options[eta.selectedIndex]
            let sconto= prezzo *0.8
             console.log('click')
             console.log(eta)
             concole.log (sconto )
        }
        
    }
     ); 


}