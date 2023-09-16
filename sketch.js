function setup() {
    createCanvas(400, 400); //Canvas é a tela //400é o ponto em pixesl
     background("black"); //Cor 220 (0preto e 225 branco) 
    //Se eu colocar em baixo da função draw, ele não irá continuar na tela, vai apagar quando outra ação for realizada.
   
  }
  
  function draw() {
    // Função de desenhar na tela
    
    
  
    stroke("red"); //traço do retangulo
    fill("blue"); //cor do retangulo
    rect(0, 100, 25, 40); //posição doretangulo
  
    stroke("yellow");
    fill("red");
  
    //console.log(mouseIsPressed)// É para saber quando o mouse está pressionado, se estiver é true, se não é false e continua a contar.
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 30); //Acompanha o mouse
    }
  }
  