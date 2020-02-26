//Variáveis globais
let level
let enemy_not_killed = 0
//ajustar tamanho da tela quando o documento for redimensionado
resizeScreen = () => window.resizeTo(window.innerWidth, window.innerHeight)
//Ajustar níveis de dificuldade
function selectLevel(element){
	switch (element.value) {    
		case 'easy':
		level = 2000;
        break;
        case 'normal':
        level = 1500;
        break;
        case 'hard':
        level = 1000;
        break;
        }
    return level
}
//iniciar jogo = ao clicar no botão start (faça):
startGame = () => createEnemy(createPosition())
//esconda tela de início
hide_container_home = () => {
    let container_home = document.getElementById('container_home')
    document.body.removeChild(container_home)
}  
//carregue função de perder vidas
 missHeart = () => {
                let heart = document.getElementsByClassName('heart')
                //se ainda há vidas
                if (enemy_not_killed <= 3){
                //perca uma vida
                heart[enemy_not_killed-1].style.display = "none"
                }  
                //se o limite de vidas perdidas é atingido
                else {
                //redirecione para a página de fim de jogo
                window.location.href = 'game_over.html'
                }
                }
 
//crie posições aleatórias para o surgimento dos mosquitos
createPosition = () => {
    let posicao = Array()
    posicao[0] = Math.floor(Math.random()*(window.innerWidth -150)) + 'px'
    posicao[1] = Math.floor(Math.random()*(window.innerHeight-150)) + 'px'
    return posicao
}
//crie mosquitos: posição, tamanho e direção do mosquito são aleatórios
createEnemy = (vetor_posicao) => {
    let enemy
    //se já existe um mosquito:
    if(document.getElementById('enemy')){
        //remova esse mosquito da tela
            document.getElementById('enemy').remove()
        //contabilize os mosquitos que escaparam
            enemy_not_killed += 1
        //perca uma vida para cada mosquito que escapou
        missHeart()
         }
    
    //se não existe um mosquito:
    else {
        //crie o mosquito de forma dinamica
        enemy = document.createElement("img")
        enemy.src = "recursos/mosca.png"
        enemy.setAttribute("id", "enemy")
        document.body.appendChild(enemy)
        //crie um array com para as classes de tamanho definidas no estilo
        let size_enemy = ['small_enemy', 'normal_enemy', 'large_enemy']
        //sorteie um índice do array de tamanhos: 0 a 2
        let index_size = Math.floor(Math.random()*3)
        //crie um array para as classes de direção
        let rotation = ['rotation_right', 'rotation_left']
        //sorteie um índice do array de direção: 0 ou 1
        let index_rot = Math.floor(Math.random() * 2)
        //atribuia as classes de tamanho e direção e a posição a cada mosquito criado
        enemy.setAttribute('class', size_enemy[index_size] + " " + rotation[index_rot])
        enemy.style.left = vetor_posicao[0]
        enemy.style.top = vetor_posicao[1]
        //atribua a propriedade para remover mosquito com o click
        enemy.setAttribute('onclick', 'killEnemy(this)')
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
        window.location.href = "win.html"
    }}
    ,1000)
    }
//inicie o temporizador com a duração de jogo desejada
startTimer = () => myTimer(60)
//mostre a barra de status
startStatus =  () => document.getElementById('status').style.opacity = 0.6
//remova o mosquito com clicks
killEnemy = (element) => document.body.removeChild(element)
//reinicie o jogo quando solicitado
restartGame = () => window.location.href = "index.html"



