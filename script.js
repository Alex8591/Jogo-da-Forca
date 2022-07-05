// Variaveis para criar layout
var container = document.querySelector('.container');
var botao1 = document.querySelector('.buttom1');
var botao2 = document.querySelector('.buttom2');
var botao3 = document.createElement('div');
var botao4 = document.createElement('div');
var botao5 = document.createElement('div');
var botao6 = document.createElement('div');
var important = document.createElement('div');
var input = document.createElement('input');
var descricao1 = document.createTextNode('Adicionar nova palavra');
var descricao2 = document.createTextNode('Começar a jogar');
var apareceForca = document.getElementById('aparece-forca');
var forca = document.getElementById('forca');
var descricao3 = document.createTextNode('Cancelar');
var descricao4 = document.createTextNode('Salvar e começar')
var descricao5 = document.createTextNode('Desistir');
var descricao6 = document.createTextNode('Novo Jogo');
var descricao7 = document.createTextNode('Máx. de 8 letras');

var action = document.createElement('div');


important.classList.add('aviso');
action.classList.add('action');
input.classList.add('adicionar_palavra');

function botaoStart(){botao1.style.display='flex'};
function botaoAdd(){botao2.style.display='flex'};
function atencao() {container.appendChild(important)};
function inputText() {container.appendChild(input)};

// Seletores
var palavras = ['ALURA', 'BRASIL', 'BIGDATA', 'COMPUTER', 'BACKUP', 'BROWSER', 'COOKIES', 'HARDWARE', 'HOTSITE', 'INBOX'];
var tabuleiro = document.getElementById('forca').getContext('2d');
var letras = [];
var palavraCorreta = "";
var erros = 9;
var palavraCerta = [];

//Gerar palavra aleatória
function escolherPalavra() {
    var palavra = palavras[Math.floor(Math.random()*palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
    return palavra
}

//Quantidade de traços conforme tamanho da palavra gerada
function tracos() {
    
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.beginPath()
    var eixo = 900/palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++) {
        tabuleiro.moveTo(100+(eixo*[i]),640)
        tabuleiro.lineTo(200+(eixo*[i]),640)
    }
    
    
    tabuleiro.stroke()
    tabuleiro.closePath
}

//Esconder primeiros botôes e adicionar action botao5 e botao6
//Adicionar quando começar jogo
function jogar() {

    var botao01 = document.querySelector('.buttom1');
    var botao02 = document.querySelector('.buttom2');
    botao01.style.display = 'none';
    botao02.style.display = 'none';
   
    var botaoStart2 = container.appendChild(action).appendChild(botao5).appendChild(descricao5);
    var botaoAdd2 = container.appendChild(action).appendChild(botao6).appendChild(descricao6);

    
}
//Esconder primeiros botôes e adicionar action botao3 e botao4
//Usar quando for adicinar nova palavra
function adicionar() {
    var botao01 = document.querySelector('.buttom1');
    var botao02 = document.querySelector('.buttom2');
    botao01.style.display = 'none';
    botao02.style.display = 'none';
   
    var botaoCancelar = container.appendChild(action).appendChild(botao3).appendChild(descricao3);
    var botaoSalvarComecar = container.appendChild(action).appendChild(botao4).appendChild(descricao4);

}

//Adicionar letra correta em cima dos traços
function letraCorreta(index) {
    tabuleiro.font = "bold 52px Inter";
    tabuleiro.lineWidth = 6
    tabuleiro.lineJoin = "round"
    tabuleiro.lineCap = "round"
    tabuleiro.fillStyle = "#0A3871"
   
    var eixo = 900/palavraSecreta.length;
    tabuleiro.fillText(palavraSecreta[index],125+(eixo*index),620);
    tabuleiro.stroke();
    
}

//Adicionar letra incorreta embaixo dos traços
function letraIncorreta(letra, errosLeft) {
    tabuleiro.font = "bold 40px Inter";
    tabuleiro.lineWidth = 6
    tabuleiro.lineJoin = "round"
    tabuleiro.lineCap = "round"
    tabuleiro.fillStyle = "#0A3871"
    tabuleiro.fillText(letra, 205+(40*(10-errosLeft)),710,40)
    tabuleiro.stroke()
}

//Adicionar somente letras
function checarInput(e) {
    let char = String.fromCharCode(e.keyCode);
    
    let pattern = '[A-Z a-z ]';
    if (char.match(pattern)) {
       
        return true;
    }
}

//Verificar letras digitadas se esta correta e guardar em maiuscula na variavel "letras"
function verificarLetraCorreta(key) {
    if(letras.length < 1 || letras.indexOf(key) < 0 ) {
        console.log(key)
        
        letras.push(key)
       
        return false
    }
    else{
        letras.push(key.toUpperCase())
       
        return true
    }
}

//Adiciona a letra correta digitada
function adicionarLetraCorreta(i){
    palavraCorreta += palavraSecreta[i].toUpperCase()
   
}

//Adiciona a letra incorreta 
function adicionarLetraIncorreta(letter){
    if(palavraSecreta.indexOf(letter) <= 0){
        erros-=1
    }
}

//Para aparecer mensagem de acerto
function msnAcertou() {

    tabuleiro.font = "bold 52px Inter";
    tabuleiro.lineWidth = 6
    tabuleiro.lineJoin = "round"
    tabuleiro.lineCap = "round"
    tabuleiro.fillStyle = "#0f0";
    
   
     
    tabuleiro.fillText('Você Venceu. ',700,200);
    tabuleiro.fillText('Parabéns!',730,250);

}

//Para apaercer mensagem que errou
function msnPerdeu() {
    tabuleiro.font = "bold 52px Inter";
    tabuleiro.lineWidth = 6
    tabuleiro.lineJoin = "round"
    tabuleiro.lineCap = "round"
    tabuleiro.fillStyle = "#f00";
    
   
     
    tabuleiro.fillText('Você perdeu.',700,200);
    tabuleiro.fillText('Fim de Jogo!',730,250);
        
    
}

window.onload

//Função para  escrever letras corretas e incorretas
function escreverLetras(e) {
    var letra = e.key.toUpperCase()
    if(!verificarLetraCorreta(e.key)){
        if(palavraSecreta.includes(letra)){
            adicionarLetraCorreta(palavraSecreta.indexOf(letra))
            for(let i=0; i <palavraSecreta.length; i++){
                if(palavraSecreta[i] == letra && erros > 0 ){
                    palavraCerta.push(letra)
                    
                    letraCorreta(i)
                    
                    console.log(letra)
                       
                }
                
               
            }

           
            
        }
        
        

        else{
            if(!verificarLetraCorreta(e.key))
           
            return
            console.log(letra)
            
            if(erros > 0 && erros <= 9 && palavraCerta.length < palavraSecreta.length && checarInput(e)){
                adicionarLetraIncorreta(letra)
                letraIncorreta(letra,erros)
                desenharForca()
            }
        } 
    }
   
    for(let i=0;i<palavraCerta.length;i++){
        if(palavraCerta.length == palavraSecreta.length){
            msnAcertou()
            break;
        }
       
    }

   
}

//Desenhar a forca
function desenharForca() {

    
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
   
   
    console.log(erros)
    
    tabuleiro.beginPath()
    switch(erros >= 0){ 
        case erros == 9:
            tabuleiro.strokeStyle = "#0A3871"    
            tabuleiro.moveTo(200,500)
            tabuleiro.lineTo(600,500)
            break

        case erros == 8:  
            tabuleiro.strokeStyle = "#0A3871"    
            tabuleiro.moveTo(400,500)
            tabuleiro.lineTo(400,100)
            break
    
        case erros == 7:
            tabuleiro.strokeStyle = "#0A3871"
            tabuleiro.moveTo(400,100)
            tabuleiro.lineTo(580,100)
            break

        case erros == 6:
            tabuleiro.strokeStyle = "#0A3871"
            tabuleiro.moveTo(580,100)
            tabuleiro.lineTo(580,150)
            break;
        
        case erros == 5:
            tabuleiro.strokeStyle = "#0A3871"
            tabuleiro.beginPath()
            tabuleiro.arc(580, 200, 50, 0, 2 * 3.14);
            break
        case erros == 4:
            tabuleiro.strokeStyle = "#0A3871"
            tabuleiro.moveTo(580,250)
            tabuleiro.lineTo(580,370)
            break

        case erros == 3: 
        tabuleiro.strokeStyle = "#0A3871"  
            tabuleiro.moveTo(580,370)
            tabuleiro.lineTo(540,450)
            break;

        case erros == 2:
            tabuleiro.strokeStyle = "#0A3871"
            tabuleiro.moveTo(580,370)
            tabuleiro.lineTo(620,450)
            break;

        case erros == 1:
            tabuleiro.strokeStyle = "#0A3871"
            tabuleiro.moveTo(580,250)
            tabuleiro.lineTo(540,330)
            break;

        case erros == 0:
            tabuleiro.strokeStyle = "#0A3871"
            tabuleiro.moveTo(580,250)
            tabuleiro.lineTo(620,330)
            msnPerdeu()
            break;
               
            
    }
             
   
    tabuleiro.stroke()
    tabuleiro.closePath()
   

}

//Método para atualizar novo jogo
function atualizar() {
    tabuleiro.clearRect(0, 0, 1200, 860);
    
    erros = 9;
    letras.length = 0;
    key = 0;
    palavraCerta.length = 0;
    
    escolherPalavra()
    tracos(escolherPalavra())
}   

botao2.addEventListener("click", iniciar)

function sratup() {
    var el = document.getElementById('forca');
    el.addEventListener("click",input);
   

}


//Inicio do jogo
function iniciar() {
    formulario()
    apareceForca.style.display = 'block';
    forca.style.display= 'block';
    action.style.display = 'flex';
    jogar()
    botao5.classList.add('buttomNew3');
    botao6.classList.add('buttomNew4'); 
    var botao05 = document.querySelector('.buttomNew3');
    var botao06 = document.querySelector('.buttomNew4');
    
    console.log(palavraCerta)
    
    document.onkeydown = escreverLetras
    sratup()
    tracos(escolherPalavra())
    desenharForca() 

    botao06.addEventListener("click", novoJogo);

    function novoJogo() {
        atualizar()
        
        desenharForca()

    } 
   
    botao05.addEventListener("click", desistir);
    
    function desistir() {
        apareceForca.style.display = 'none';
        forca.style.display = 'none';
        descricao5.remove('Desistir');
        descricao6.remove('Novo Jogo');
        botao5.classList.remove('buttomNew3');
        botao6.classList.remove('buttomNew4');
        botao3.classList.remove('buttomNew1');
        botao4.classList.remove('buttomNew2');
        document.onkeydown = '';
       
       
        action.style.display = 'none';
       
        formularioOcultar()
        atualizar()
        botaoStart()
        botaoAdd()
       
    }
    
}
botao1.addEventListener("click",adicionarPalavra);

//Adicionando nova palavra
function adicionarPalavra() {
    
   
     
    adicionar()
    action.style.bottom = '256px';
    action.style.display = 'flex';
   
    atencao()
    var aviso = document.querySelector('.aviso');
    aviso.style.display = 'flex';
    aviso.innerHTML = '<img src="images/exclama.svg" />Máx. de 8 letras';
    inputText()
    var input = document.querySelector('.adicionar_palavra');
    input.style.display = 'block';
   
    input.placeholder = 'Digite uma palavra ou frase';
    input.maxLength = '8';
    botao3.classList.add('buttomNew1');
    botao4.classList.add('buttomNew2');
    
    input.addEventListener("input", function(e) {
        const inputUpper = e.target;
        inputUpper.value = inputUpper.value.toUpperCase();
      
       

    });
    input.addEventListener("keypress", function(e) {
        checarInput(e)
        if(!checarInput(e)) {
            e.preventDefault();
            
            
        }
    });
    
    botao4.addEventListener("click",salvar);

    function salvar() {
        
        palavras.push(input.value);
        aviso.style.display = 'none';
        input.style.display = 'none'
        descricao3.remove('Cancelar');
        descricao4.remove('Salvar e começar');
        botao3.classList.remove('buttomNew1');
        botao4.classList.remove('buttomNew2');
        atualizar()
        iniciar()
        action.style.bottom = '';
         
    }
    
    botao3.addEventListener("click", cancelar)
    function cancelar() {
        descricao3.remove('Cancelar');
        descricao4.remove('Salvar e começar');
        aviso.style.display = 'none';
        input.style.display = 'none';
        botao3.classList.remove('buttomNew1');
        botao4.classList.remove('buttomNew2');
        
        botaoStart()
        botaoAdd()
        action.style.display ='none';
        action.style.bottom = '';
        input.value = '';
      
    }

    
}



  


