function id( el ){
        return document.getElementById( el );
}
function val( destino, valor ){
        destino.value += valor;
}

var  letraVirt = []; 
var letras = [];
//Verificar letras digitadas se esta correta e guardar em maiuscula na variavel "letras"
function verificarLetraCorreta(e) {
    if(letras.length < 1 || letras.indexOf(e) < 0 ) {
       
        console.log(e)
        letras.push(e)
       
        return false
    }
    else{
        letras.push(e)
       
        return true
    }
}

window.onload = function(){
      
       
        var botoes = id('teclado').getElementsByTagName('input');
        for( var i=0; i<botoes.length; i++ ){
            botoes[i].onclick = function(){
               
                var letraMin = this.value;
                if(!verificarLetraCorreta(this.value)){
                    if(palavraSecreta.includes(letraMin)){
                        for(let i=0; i <palavraSecreta.length; i++){
                            if(palavraSecreta[i] == letraMin && erros > 0 ){
                                letraVirt.push(letraMin)
                                palavraCerta.push(letraMin)
                                letraCorreta(i)
                                
                            
                                
                            }
                        
                        }
                    }
                    
                    else{
                        if(!verificarLetraCorreta(this.value))
                        
                        return
                            
                        if(erros > 0 && erros <= 9 && palavraCerta.length < palavraSecreta.length){
                            adicionarLetraIncorreta(letraMin)
                            letraIncorreta(letraMin,erros)
                            desenharForca()
                            console.log(erros)
                        }
                    } 
                    
                
                  
                
                }
                console.log(palavraCerta) 
                for(let i=0;i<palavraCerta.length;i++){
                    if(palavraCerta.length == palavraSecreta.length){
                        msnAcertou()
                        break;
                    }
                   
                }   
            } 
              
        }
      
       
}
function formulario() {
    var area = document.getElementById('area');
    var formulario = document.getElementById('formularios');
    var teclado =  document.getElementById('teclado');
    var onTeclado = document.querySelector('.onTeclado');
    var offTeclado = document.querySelector('.offTeclado');
    area.style.display = 'block';
    formulario.style.display = 'block';
    teclado.style.display =  'none';
    onTeclado.addEventListener("click", mostrar);
    offTeclado.addEventListener("click", ocultar);
    function mostrar(){
        teclado.style.display = 'block';
    }
    function ocultar(){
        teclado.style.display =  'none';
    }
}
function formularioOcultar(){
    var formulario = document.getElementById('formularios');
    var area = document.getElementById('area');
    var teclado =  document.getElementById('teclado');
    formulario.style.display = 'none';
    area.style.display = 'none'; 
    teclado.style.display =  'none';

}

