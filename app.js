//Função para ajustar tamanho da tela quando o body do documento for redimensionado
resizeScreen = () => window.resizeTo(window.innerWidth, window.innerHeight);
//Variáveis globais
let enemy = document.getElementById('enemy')
let posicao = Array()
//Ajustar níveis de dificuldade
let level
function selectLevel(element){
	switch (element.value) {    
		case '--Selecione um nível--':
        level = "";
        case 'easy':
		level = 3000;
        case 'normal':
        level = 2000;
        case 'hard':
        level = 1000;
        }
}
//Função para criar posições aleatórias
function createPosition(){
posicao[0] = Math.floor(Math.random()*(window.innerWidth -150)) + 'px'
posicao[1] = Math.floor(Math.random()*(window.innerHeight-150)) + 'px';
return posicao
}
//Função para criar mosquitos: posição, tamanho e sentido do mosquito são aleatórios
function showEnemy(vetor_posicao){
//criando array com cada classes de tamanho definidas no .css em uma posição
let size_enemy = ['small_enemy', 'normal_enemy', 'large_enemy']
//sorteando um índice do array de tamanhos: 0 a 2
let index_size = Math.floor(Math.random()*3)
//criando array com classes do sentido de rotação definidas no .css em uma posição
let rotation = ['rotation_right', 'rotation_left']
//sorteando um índice do array de sentidos: 0 ou 1
let index_rot = Math.floor(Math.random() * 2)
//atribuindo as classes de tamanho e rotação ao elemento
enemy.setAttribute('class', size_enemy[index_size] + " " + rotation[index_rot]);
//atribuindo posição aleatória a cada mosquito criado
enemy.style.left = vetor_posicao[0];
enemy.style.top = vetor_posicao[1];
return
}
//criando temporizador
function myTimer(time){
    setInterval(function(){
    if (time >= 0){
    let timer = document.getElementById('timer')
    timer.innerHTML = `Tempo: ${time}"`
    time -= 1
    } else {
        //forcar parada do jogo
    }}
    ,1000)
    }
//Iniciar jogo
startGame = () => showEnemy(createPosition());
//Iniciar cronometro
startTimer = () => myTimer(90);
startStatus =  () => {
    document.getElementById('status').style.opacity = 0.6;
    document.getElementById('enemy').style.opacity = 1.0;
}
