let fundo;
let doninha;
let milho;
let gaiola;
let jogoEmAndamento = false; // Inicializa como false

function preload(){
  fundo = loadImage("imagens/agricultura.png");
  doninha = loadImage("imagens/doninha.png");
  milho = loadImage("imagens/milho.png");
  gaiola = loadImage("imagens/gaiola.png");
}

function setup() {
  createCanvas(600, 600);  
  x = random(600);
  y = random(600);
  x = int(x);
  y = int(y);  
}

function draw() {
  
  if (jogoEmAndamento) {
    background(fundo);
    inicio();    
  }else {
    background(milho);
    textSize(15);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Doninhas na Lavoura: Um Desafio Inesperado \n" +
    "As doninhas são carnívoras por natureza, \n" +
    "mas são oportunistas e podem complementar sua dieta \n" +
    "com grãos e sementes. \n" +
    "Encontre elas para salvar a lavoura ", 290, 50);
}
  
}

function mousePressed(){
  jogoEmAndamento = true;
}

function inicio(){
  
  x = x + random(-5, 5);
  y = y + random(-5, 5);
  
  // delimitar para não sair da tela
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);
  
  //circle(x, y, 10);
  let distanciaX; let distanciaY; let distancia;
  distanciaX = mouseX - x;
  distanciaY = mouseY - y;
  
  //teorema de Pitágoras - trigonometria
  
  distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  
  console.log(distancia);
  image(gaiola, mouseX, mouseY, distancia, distancia);
   
    if(  distancia < 3 ){
     text('Encontrei', 200, 200);
      image(doninha, x, y, 100, 100);
      noLoop();
       }
  
}