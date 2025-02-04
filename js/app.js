let alugados = 0;

function alterarStatus(id) {
    let jogoId = document.getElementById(`game-${id}`);
    let divImg = jogoId.querySelector("div");
    let botao = jogoId.querySelector("a");
    
    if (botao.classList.contains("dashboard__item__button--return")){
        if (confirm("Tem certeza de que deseja devolver o jogo?")){
            botao.classList.remove("dashboard__item__button--return");
            divImg.classList.remove("dashboard__item__img--rented");
            botao.textContent = "Alugar";
        }
    } else {
        botao.classList.add("dashboard__item__button--return");
        divImg.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver";
        contarAlugueis();
    }
    
}

function contarAlugueis(){
    alugados++
    let palFoiAlugado = (alugados == 1) ? "Foi alugado" : "Foram alugados";
    let palJogos = (alugados == 1) ? "jogo" : "Jogos";
    console.log(`${palFoiAlugado} ${alugados} ${palJogos}!`);
}