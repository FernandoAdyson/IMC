jquery
function mask(){
     $(function() {
     $('.alt').maskMoney({ decimal: '.', thousands: '', precision: 2 });})
}
jquery



function calcular(){
    var sexo = document.getElementsByName('genero')
    var genero
    var resposta = document.getElementById('res')
    var ida = document.querySelector('input.ida')
    var alt = document.querySelector('input.alt')
    var pes = document.querySelector('input.pes')
    var idade = Number(ida.value)
    var altura = Number(alt.value)
    var peso = Number(pes.value)
    imc = peso / (altura**2)
    
    if(sexo[0].checked){
        genero = 'Masculino'

        if(imc <= 18.5 && peso <= 56.7 && idade > 0){
            resposta.innerHTML = `Gênero ${genero} com IMC de <strong> ${imc.toFixed(2)} e consta MAGREZA </strong>`
        }
        else if(imc >= 18.5 && imc <= 24.9 && idade > 0 ) {
            resposta.innerHTML = `Gênero ${genero} com IMC de <strong> ${imc.toFixed(2)} e consta NORMAL </strong>`
        }
        else if(imc >= 25 && imc <= 29.9 && idade > 0) {
            resposta.innerHTML = `Gênero ${genero} com IMC de <strong> ${imc.toFixed(2)} e consta SOBREPESO </strong>`
        }
        else if(imc >= 30 && peso >= 91.9 && idade > 0) {
            resposta.innerHTML = `Gênero ${genero} com IMC de <strong> ${imc.toFixed(2)} e consta OBESIDADE </strong>`
        }
        else{
            alert('Preencha Corretamente')
        }
    }

    else if (sexo[1].checked) {
        genero = 'Feminino'

        if(imc <= 18.5 && peso <= 56.7 && idade > 0 ){
            resposta.innerHTML = `Gênero ${genero} com IMC de <strong> ${imc.toFixed(2)} e consta MAGREZA </strong>`
        }
        else if(imc >= 18.5 && imc <= 24.9 && idade > 0) {
            resposta.innerHTML = `Gênero ${genero} com IMC de <strong> ${imc.toFixed(2)} e consta NORMAL </strong>`
        }
        else if(imc >= 25 && imc <= 29.9 && idade > 0) {
            resposta.innerHTML = `Gênero ${genero} com IMC de <strong> ${imc.toFixed(2)} e consta SOBREPESO </strong>`
        }
        else if(imc >= 30 && peso >= 91.9 && idade > 0) {
            resposta.innerHTML = `Gênero ${genero} com IMC de <strong> ${imc.toFixed(2)} e consta OBESIDADE </strong>`
        }
        else{
            alert('Preencha Corretamente')
        }

    }
}