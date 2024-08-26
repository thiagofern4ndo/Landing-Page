var setaDireita= window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("leonardo")
var Bruna = window.document.getElementById("bruna")
var Samantha = window.document.getElementById("samantha")

function rolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:95px"
}

function rolarParaEsquerda (){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "display:flex; margin-top:80px"
    setaEsquerda.style = "display:none"
}