function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    //console.log(numero1,numero2)
    var resposta = document.getElementById('resposta')
    resposta.textContent = numero1 + numero2

}
function sub(){
    var numero1 = document.getElementById("n3").valueAsNumber
    var numero2 = document.getElementById("n4").valueAsNumber
    //console.log(numero1,numero2)
    var resposta = document.getElementById('respSub')
    resposta.textContent = numero1 + numero2
}
function mult(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    document.getElementById('respMult').innerHTML = numero1 * numero2
}
function div(){
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
    var resposta = document.getElementById('resDiv')
    if(numero2 !== 0){
        reposta.innerHTML = numero1 / numero2
    }else{
        resposta.textContent= "Não se divide por 0"
    }
}
const media = () => {
    var numero1 = parseFloat(document.getElementById("m1").value)
    var numero2 = parseFloat(document.getElementById("m2").value)
    var numero3 = parseFloat(document.getElementById("m3").value)
    var numero4 = parseFloat(document.getElementById("m4").value)
    var numero5 = parseFloat(document.getElementById("m5").value)
    var media = document.getElementById("media")
    media.innerHTML = (numero1 + numero2 + numero3 + numero4 + numero5) / 5
    var resp = (numero1 + numero2 + numero3 + numero4 + numero5) / 5
    if(resp >= 7){
        media.style.color = 'green'
    }else{
        media.style.color = 'red'
    }
}