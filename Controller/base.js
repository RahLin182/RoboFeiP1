
class Robo{
  constructor(x, y, a, vm) {
  this.x = x;
  this.y = y;
  this.a = a;
  this.vm = vm;
  }
}


function validaRobo(){
  var robo = new Robo(10, 20, 2, 2.6);
  var div = document.getElementById("div1");

  div.innerHTML = "Robo X: " +robo.x+ "<br>" +
                  "Robo Y: " +robo.y+ "<br>" +
                  "Aceleração: " +robo.a+ "m/s²<br>" +
                  "Velocidade Média: " +robo.vm+ "m/s";
  div.style.background="green";
}
