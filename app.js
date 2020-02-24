//Função para ajustar tamanho da tela quando o body do documento for redimensionado
resizeScreen = () => window.resizeTo(window.innerWidth, window.innerHeight);
//Variáveis globais
//Ajustar níveis de dificuldade
let level
// let enemy
function selectLevel(element){
	switch (element.value) {    
		case '--Selecione um nível--':
        level = "";
        case 'easy':
		level = 4000;
        case 'normal':
        level = 2000;
        case 'hard':
        level = 1000;
        }
}
//criar posições aleatórias
function createPosition(){
let posicao = Array()
posicao[0] = Math.floor(Math.random()*(window.innerWidth -150)) + 'px'
posicao[1] = Math.floor(Math.random()*(window.innerHeight-150)) + 'px';
return posicao
}
//Função para criar mosquitos: posição, tamanho e sentido do mosquito são aleatórios
function createEnemy(vetor_posicao){
//criando o elemento mosquito de forma dinamica
//isso porque ele desaparecerá a cada clique
//portanto, se for um elemento fixo, desaparecerá definitivamente após o primeiro clique
//e não será possível aplicar o restante da lógica sobre o elemento
let enemy = document.createElement("img");
enemy.src = "recursos/mosca.png"
enemy.setAttribute("id", "enemy");
//anexando o elemento criado no documento html
document.body.appendChild(enemy);
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
//adicionando propriedade ao elemento para removê-lo ao clicar
enemy.setAttribute('onclick', 'removeEnemy(this)');
return
}
//Função para remover mosquito ao clicar sobre ele
function removeEnemy(elemento) {
document.body.removeChild(elemento)
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
//Iniciar jogo: ao clicar no botão start:
//esconder tela de início
hide_container_home = () => {
let container_home = document.getElementById('container_home');
document.body.removeChild(container_home);
}
//iniciar cronometro
startTimer = () => myTimer(90);
startStatus =  () => {
    document.getElementById('status').style.opacity = 0.6;
}
//criar mosquitos
startGame = () => createEnemy(createPosition());
//deletar mosquitos ao clicar sobre ele
deleteEnemy = () => document.body.removeChild(enemy);
