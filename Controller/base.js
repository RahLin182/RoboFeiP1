
class Robo{
  constructor(x, y, a, vm) {
  this.x = x;
  this.y = y;
  this.a = a;
  this.vm = vm;
  }
}


//Validar se é possível instanciar classe Robo
function validaRobo(x){
  var robo = new Robo(x, y, a, vm);
  var div = document.getElementById("div1");

  div.innerHTML = "Robo X: " +robo.x+ "<br>" +
                  "Robo Y: " +robo.y+ "<br>" +
                  "Aceleração: " +robo.a+ "m/s²<br>" +
                  "Velocidade Média: " +robo.vm+ "m/s";
  div.style.background="green";
}

//Definir Coordenadas para qual robo deve se locomover
function defineCoo(robo, posicoes){}
