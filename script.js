let escolhidaP = null;
let escolhidaB = null;
let lock = false
let rodada = 0

let originalContent = document.body.innerHTML

let vitoriaP = 0
let vitoriaB = 0

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

        }else if(cartaP === 'tesouraP' && escolhidaB === 2){
            
            document.getElementById('alerta').innerHTML = 'O Bot ganhou dessa vez'
            vitoriaB += 1
            document.getElementById('bot').innerHTML = `Bot ganhou ${vitoriaB}`
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);
            
        }else if(cartaP === 'tesouraP' && escolhidaB === 3){
            
            document.getElementById('alerta').innerHTML = 'O Player ganhou dessa vez'
            vitoriaP += 1
            document.getElementById('player').innerHTML = `Player ganhou ${vitoriaP}`
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);
            
        }else if(cartaP === 'pedraP' && escolhidaB === 1){
            
            document.getElementById('alerta').innerHTML = 'O player ganhou dessa vez'
            vitoriaP += 1
            document.getElementById('player').innerHTML = `Player ganhou ${vitoriaP}`
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);
            
        }else if(cartaP === 'pedraP' && escolhidaB === 2){
            
            document.getElementById('alerta').innerHTML = 'Houve um empate'
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);
            
        }else if(cartaP === 'pedraP' && escolhidaB === 3){
            
            document.getElementById('alerta').innerHTML = 'O Bot ganhou dessa vez'
            vitoriaB += 1
            document.getElementById('bot').innerHTML = `Bot ganhou ${vitoriaB}`
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);
            
        }else if(cartaP === 'papelP' && escolhidaB === 1){

            document.getElementById('alerta').innerHTML = 'O Bot ganhou dessa vez'
            vitoriaB += 1
            document.getElementById('bot').innerHTML = `Bot ganhou ${vitoriaB}`
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);
        }else if(cartaP === 'papelP' && escolhidaB === 2){
            
            document.getElementById('alerta').innerHTML = 'O Player ganhou dessa vez'
            vitoriaP += 1
            document.getElementById('player').innerHTML = `Player ganhou ${vitoriaP}`
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);
        }else if(cartaP === 'papelP' && escolhidaB === 3){
            
            document.getElementById('alerta').innerHTML = 'Houve um empate'
            setTimeout(() => {
                resetCards();
                document.getElementById('alerta').innerHTML = `Rodada ${rodada}`
            }, 1000);
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

function playAgain(){
    location.reload();
}

