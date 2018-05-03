class Robo{
  constructor(x, y, a, vm) {
  this.x = x;
  this.y = y;
  this.a = a;
  this.vm = vm;
  }
}


//Validar se é possível instanciar classe Robo
function validaRobo(){
  var robo = new Robo(x, y, a, vm);
  var div = document.getElementById("div1");

  div.innerHTML = "Robo X: " +robo.x+ "<br>" +
                  "Robo Y: " +robo.y+ "<br>" +
                  "Aceleração: " +robo.a+ "m/s²<br>" +
                  "Velocidade Média: " +robo.vm+ "m/s";
  div.style.background="green";
}

//Definir Coordenadas para qual robo deve se locomover
function defineCoo(robo, posicoesX, posicoesY, tempos){

  //Posição inicial do Robo
  var xr = robo.x;
  var yr = robo.y;
  var a = robo.a;
  var vm = robo.vm;

  //Tamanho do array (array com as posicoes da bola)
  var size = tempos.length;
  var i=0;
  for(i; i<size; i++){
    var xb = posicoesX[i]; //x da bola
    var yb = posicoesY[i]; //y da bola
    var t = tempos[i]; //tempo

    var delta = Math.pow( (xr-xb),2 ) + Math.pow( (yr-yb),2 );
    var dis = Math.sqrt(delta);

    var locomocao = 0;

    if (locomocao <= t){
      var pos = [xb,yb];
      return pos;
    }
  }

}