let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let palpitesRepitidos = [];

function jogoDeAdivinhacao() {
    const palpiteDigitado = pegarPalpiteDigitado();



    if (!palpiteDigitado) {
        alert("Digite um valor válido!")
        return;
            
    }else if (palpiteDigitado <= 0 || palpiteDigitado > 100) {
        alert("Por favor, digite um numero entre 1 e 100.")
    }if(palpitesRepitidos.includes(palpiteDigitado)) {
        alert("Você já tentou esse palpite.");
        return;
    }


      palpitesRepitidos.push(palpiteDigitado);

    if (palpiteDigitado === numeroAleatorio) {
        alert("Parabéns, você divinhou!")
        reiniciarJogo();
        return;
    } else if (palpiteDigitado > numeroAleatorio) {
        tentativas++;
        atualizarFeedback("O número é muito alto.Tente novmente")
    } else if (palpiteDigitado < numeroAleatorio) {
        tentativas++;
        atualizarFeedback("O número é muito baixo.Tente novamente.")
    }

   
    const novaPontuacao = 100 - (tentativas * 10);
    atualizarPontuacao(novaPontuacao);

    const palpitesFalhos = pegarPalpitesFalhos();
    const novosPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado;
    atualizarPalpitesFalhos(novosPalpitesFalhos)

    const pontuacaoAtual = pegarPontuacao();
    if (pontuacaoAtual === "Você tem 0 pontos") {
        alert("Deu ruim boy! Você chegou no limbo, acabou pra você!");
        reiniciarJogo();
    }
    
}
function reiniciarJogo() {
    const vaiReiniciar = confirm("Deseja jogar novamente");
    
    if (vaiReiniciar) {
        tentativas = 0;
        palpitesRepitidos = [];
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        atualizarPalpitesFalhos("");
        atualizarPontuacao(100);
        atualizarFeedback("");
        limparPalpiteDigitado();
    }
}

