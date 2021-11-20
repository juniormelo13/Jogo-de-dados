var dadosComp = []
var dadosJog = []

function sortear() {
    var totalComp = 0
    var totalJog = 0

    for (i=0; i < 3; i++) {
        // Computador
        dadosComp[i] = Math.floor(Math.random() * 6) + 1;
        totalComp = dadosComp[0] + dadosComp[1] + dadosComp[2];
        // Jogador
        dadosJog[i] = Math.floor(Math.random() * 6) + 1;
        totalJog = dadosJog[0] + dadosJog[1] + dadosJog[2];
    }
    // Colocar os dados sorteados na página
    document.getElementById('dadoscomp').innerHTML = 
        "<img src='assets/img/dado"+ dadosComp[0] +".png'>"+
        "<img src='assets/img/dado"+ dadosComp[1] +".png'>"+
        "<img src='assets/img/dado"+ dadosComp[2] +".png'>";
    document.getElementById('dadosjog').innerHTML = 
        "<img src='assets/img/dado"+ dadosJog[0] +".png'>"+
        "<img src='assets/img/dado"+ dadosJog[1] +".png'>"+
        "<img src='assets/img/dado"+ dadosJog[2] +".png'>";
    // Montando a mensagem do vencedor
    if (totalComp > totalJog) {
        document.getElementById('result').innerHTML = `O <strong>COMPUTADOR</strong> venceu o Jogador por <strong>${totalComp}</strong> a ${totalJog}!`
    } else {
        if (totalJog > totalComp) {
        document.getElementById('result').innerHTML = `O <strong>JOGADOR</strong> venceu o Computador por <strong>${totalJog}</strong> a ${totalComp}!`
    } else {
        document.getElementById('result').innerHTML = `O Jogador empatou com o Computador por ${totalJog} a ${totalComp}!`
    }
}
}