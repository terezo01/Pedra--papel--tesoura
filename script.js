let escolhidaP = null;
let escolhidaB = null;
let lock = false
let rodada = 0

let victory = false

let originalContent = document.body.innerHTML

let vitoriaP = 0
let vitoriaB = 0

const victorySong = document.getElementById('victorySong')

const cartasP = document.querySelectorAll('.cartasP');
const cartasB = document.querySelectorAll('.cartasB');


cartasP.forEach(carta => {
    escolhidaP = false
    carta.addEventListener('click', () => {
        if (lock === true || escolhidaP === true) return;
        carta.classList.add('escolhida')
        cartaP = carta.id
        escolhidaP = true

        rodada += 1;

        escolhidaB = Math.floor(Math.random() * 3 + 1);
        if (escolhidaB === 1) {
            cartaB = document.getElementById('tesouraB')
            cartaB.classList.add('escolhida')
        } else if (escolhidaB === 2) {
            cartaB = document.getElementById('pedraB')
            cartaB.classList.add('escolhida')
        } else {
            cartaB = document.getElementById('papelB')
            cartaB.classList.add('escolhida')
        }

        if (cartaP === 'tesouraP' && escolhidaB === 1) {

            document.getElementById('alerta').innerHTML = 'Houve um empate'
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);

        } else if (cartaP === 'tesouraP' && escolhidaB === 2) {

            document.getElementById('alerta').innerHTML = 'O Bot ganhou dessa vez'
            vitoriaB += 1
            document.getElementById('bot').innerHTML = `Bot ganhou ${vitoriaB}`
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);

        } else if (cartaP === 'tesouraP' && escolhidaB === 3) {

            document.getElementById('alerta').innerHTML = 'O Player ganhou dessa vez'
            vitoriaP += 1
            document.getElementById('player').innerHTML = `Player ganhou ${vitoriaP}`
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);

        } else if (cartaP === 'pedraP' && escolhidaB === 1) {

            document.getElementById('alerta').innerHTML = 'O player ganhou dessa vez'
            vitoriaP += 1
            document.getElementById('player').innerHTML = `Player ganhou ${vitoriaP}`
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);

        } else if (cartaP === 'pedraP' && escolhidaB === 2) {

            document.getElementById('alerta').innerHTML = 'Houve um empate'
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);

        } else if (cartaP === 'pedraP' && escolhidaB === 3) {

            document.getElementById('alerta').innerHTML = 'O Bot ganhou dessa vez'
            vitoriaB += 1
            document.getElementById('bot').innerHTML = `Bot ganhou ${vitoriaB}`
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);

        } else if (cartaP === 'papelP' && escolhidaB === 1) {

            document.getElementById('alerta').innerHTML = 'O Bot ganhou dessa vez'
            vitoriaB += 1
            document.getElementById('bot').innerHTML = `Bot ganhou ${vitoriaB}`
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);
        } else if (cartaP === 'papelP' && escolhidaB === 2) {

            document.getElementById('alerta').innerHTML = 'O Player ganhou dessa vez'
            vitoriaP += 1
            document.getElementById('player').innerHTML = `Player ganhou ${vitoriaP}`
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);
        } else if (cartaP === 'papelP' && escolhidaB === 3) {

            document.getElementById('alerta').innerHTML = 'Houve um empate'
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);
        }

        if((vitoriaB === 3 || vitoriaP === 3) && victory === false){
            victoryAppear();
            
        }
    })
}
)

function resetCards() {
    cartasP.forEach(carta => {
        carta.classList.remove('escolhida');
    });

    cartasB.forEach(carta => {
        carta.classList.remove('escolhida');
    });

    escolhidaP = null;
    escolhidaB = null;
    lock = false;
}

function playAgain() {
    location.reload();
}

function victoryAppear() {
    victory = true;
    victorySong.volume = 1
    victorySong.play(); 
    document.getElementById('overlay').classList.add('overlay');
    document.getElementById('victory').classList.add('victory');
    document.getElementById('close').classList.add('close');
    if(vitoriaP>vitoriaB){
        document.getElementById('vitorioso').innerHTML = `O Player venceu de ${vitoriaP} x ${vitoriaB} Bot`;
    }
    else if(vitoriaP === vitoriaB){
        document.getElementById('vitorioso').innerHTML = `O jogo terminou em empate ${vitoriaP} x ${vitoriaB} `;
    }
    else{
        document.getElementById('vitorioso').innerHTML = `O Bot venceu de ${vitoriaB} x ${vitoriaP} Player`;
    }
}

function closeVictory() {
    victory = true;
    victorySong.currentTime = victorySong.duration;
    document.getElementById('overlay').classList.remove('overlay');
    document.getElementById('victory').classList.remove('victory');
    document.getElementById('close').classList.remove('close');
}
