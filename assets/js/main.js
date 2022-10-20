function valida(){
    let price = 0.21;
    let valueKm = document.getElementById('km').value;
    let valueAge = document.getElementById('eta').value;
    let passengerName = document.getElementById('passenger').value;
    
    let kmPrice = valueKm * price;
        

    let discount;
    if (valueAge == "minorenne") {
        discount = 20;
        document.getElementById('preventivo').innerHTML = (kmPrice - ((kmPrice * discount)  / 100)).toFixed(2) + ' €';
    } else if (valueAge == "over65"){
        discount = 40;
        document.getElementById('preventivo').innerHTML = (kmPrice - ((kmPrice * discount)  / 100)).toFixed(2) + ' €';
    } else {
        discount = 0
        document.getElementById('preventivo').innerHTML = kmPrice.toFixed(2) + ' €';
    }
    
    document.getElementById('passegero').innerHTML = passengerName;
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) +1;
    document.getElementById("codiceCP").innerHTML = Math.floor(Math.random() * 100000) +10000;

}

function resetta(){
    location.reload();
}