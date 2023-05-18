let button = document.getElementById ('price_button')
let km = document.getElementById ('km')
let kmValue = km.value
let prezzo= kmValue * 0.21
let anni= document.getElementById ('anni').value
let sconto
let nome= document.getElementById ('nome').value


let biglietto = document.getElementById('biglietto')



if (button) {
    button.addEventListener('click', function() {
        
        console.log('click')
        if (anni < 18 ){
            sconto = prezzo * 0.8
             console.log(sconto)
            biglietto.innerHTML = `Biglietto ridotto. Costo del biglietto ${sconto.toFixed(2)} €`
            console.log(biglietto)
        } 
    }); 
}

if (button) {
    button.addEventListener('click', function() {
        if (anni > 65){
            let sconto_2 = prezzo * 0.6
            biglietto.innerHTML = `Biglietto ridotto. Costo del biglietto ${sconto_2.toFixed(2)} €`
            console.log (sconto_2)
        }
    }); 
}

if (button) {
    button.addEventListener('click', function() {
        if ((anni > 17) && (anni < 66 ))  {
             prezzo 
             biglietto.innerHTML = `Biglietto standard. Costo del biglietto ${prezzo.toFixed(2)} €`
            console.log (prezzo)

        }
    }); 
}



