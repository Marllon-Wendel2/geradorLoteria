//Botao para iniciar
const botaoGerar = document.getElementById('botao-gerar').addEventListener('click', gerarJogos)
const botaoLimpar = document.getElementById('botao-limpar').addEventListener('click', limpar)

function gerarJogos() {
    let valorDigitado = document.getElementById('jogos')
    let quantidadeDeJogos = parseInt(valorDigitado.value)
    console.log(quantidadeDeJogos)
    const exibiResultadoDiv = document.getElementById('resultadoJogo')
    const limiteDeJogos = 10
    
    
    if(isNaN(quantidadeDeJogos)) {
            alert('Digite algum número')
            return
        }
    if(quantidadeDeJogos <= limiteDeJogos) {
        const resultados = acumulaJogos(quantidadeDeJogos)
    
        resultados.forEach((resultado, index) => {
            let elementoResultado = document.createElement('p')
            elementoResultado.innerText = `Jogo ${index + 1}: ${resultado.join(", ")}`
            exibiResultadoDiv.appendChild(elementoResultado)
        });
    } else {
        alert('Limite de jogos execedido!')
    }
    
}

function acumulaJogos(numeroDeJogos) {
    const jogos = []
    for( let i = 0; i < numeroDeJogos ; i++) {
        jogos.push(criaUmJogo())
    }

    return jogos
}

function criaUmJogo() {
    const jogo = []

    for(let i= 0; i < 5; i++) {
        let numeroDecimal = Math.random() * 10
        let numeroAleatorio = Math.floor(numeroDecimal)

        jogo.push(numeroAleatorio)
    }

    return jogo
}

function limpar () {
    const exibiResultadoDiv = document.getElementById('resultadoJogo')
    exibiResultadoDiv.innerHTML = ''

    let valorDigitado = document.getElementById('jogos')
    valorDigitado.value = ''

}