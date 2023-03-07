function calculate() {
    var average = document.getElementById('input-avg').value
    var distance = document.getElementById('input-dtc').value
    var price = document.getElementById('input-prc').value

    var x = distance / average
    x = x * price
    x = x.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    
    document.getElementById('span-rst').innerHTML = x
}