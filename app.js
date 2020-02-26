//Função para ajustar tamanho da tela quando o body do documento for redimensionado
resizeScreen = () => window.resizeTo(window.innerWidth, window.innerHeight)
//Variáveis globais
let level
let enemy_not_killed = 0
//Ajustar níveis de dificuldade
function selectLevel(element){
	switch (element.value) {    
		case '--Selecione um nível--':
        //comando para bloquear?
        case 'easy':
		level = 6000;
        case 'normal':
        level = 2000;
        case 'hard':
        level = 1000;
        break
        }
    return
}
//iniciar jogo = ao clicar no botão start:
startGame = () => createEnemy(createPosition())
//faça:

//carregue função de perder vidas
 missHeart = () => {
            let heart = document.getElementsByClassName('heart')
                if (enemy_not_killed <= 3){
                heart[enemy_not_killed-1].style.display = "none"
                }  
                //game over: limite de vidas perdidas
                else {
                    console.log('game over')
                    let game_over = document.createElement("img")
                    game_over.src = "recursos/game_over.png"
                    document.body.appendChild(game_over)
                    //parar de criar mosquitos
                    //parar cronometro
                    clearsetInterval(startGame)

                }
                }
//esconda tela de início
hide_container_home = () => {
    let container_home = document.getElementById('container_home')
    document.body.removeChild(container_home)
}   
//crie posições aleatórias
createPosition = () => {
    let posicao = Array()
    posicao[0] = Math.floor(Math.random()*(window.innerWidth -150)) + 'px'
    posicao[1] = Math.floor(Math.random()*(window.innerHeight-150)) + 'px'
    return posicao
}
//carregue a função para perder vidas

//crie mosquitos: posição, tamanho e sentido do mosquito são aleatórios
createEnemy = (vetor_posicao) => {
    let enemy
    //se já existe um mosquito:
    if(document.getElementById('enemy')){
        //delete
            document.getElementById('enemy').remove()
        //contabilize os mosquitos que escaparam:
            enemy_not_killed += 1
        //perca uma vida para cada mosquito que escapou
        missHeart()
         }
    
    //se não existe um mosquito, crie:
    else {
        //criar o elemento mosquito de forma dinamica
        enemy = document.createElement("img")
        enemy.src = "recursos/mosca.png"
        enemy.setAttribute("id", "enemy")
        //anexar o elemento mosquito no documento html
        document.body.appendChild(enemy)
        //criar array com cada classes de tamanho definidas no .css em uma posição
        let size_enemy = ['small_enemy', 'normal_enemy', 'large_enemy']
        //sortear um índice do array de tamanhos: 0 a 2
        let index_size = Math.floor(Math.random()*3)
        //criar array com classes do sentido de rotação definidas no .css em uma posição
        let rotation = ['rotation_right', 'rotation_left']
        //sortear um índice do array de sentidos: 0 ou 1
        let index_rot = Math.floor(Math.random() * 2)
        //atribuir classes de tamanho e rotação a cada mosquito criado
        enemy.setAttribute('class', size_enemy[index_size] + " " + rotation[index_rot])
        //atribuir posição aleatória a cada mosquito criado
        enemy.style.left = vetor_posicao[0]
        enemy.style.top = vetor_posicao[1]
        //propriedade para remover mosquito com o click
        enemy.setAttribute('onclick', 'killEnemy(this)')
        //
        }
    return
}
//crie um temporizador
myTimer = (time) => {
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
//inicie o temporizador
startTimer = () => myTimer(90)
startStatus =  () => document.getElementById('status').style.opacity = 0.6
//remova o mosquito com o click
killEnemy = (element) => document.body.removeChild(element)

//Game over: três mosquitos escapam da raquete
//perder cada uma das três vidas:




