function calculateTip(event) {
    event.preventDefault();

    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numPessoas = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0) {
        alert('Por favor, preencha os campos');
        return;
    }

    if(numPessoas == '' | numPessoas <=1) {
        numPessoas = 1;
        document.getElementById('each').style.display = 'none'
    } else {
        document.getElementById('each').style.display = 'block'
    }

    let total = (bill * serviceQual) / numPessoas;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalGorjeta').style.display = "block"
}
// Teste git
let b = a;

document.getElementById('totalGorjeta').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);