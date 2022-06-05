const canvas = document.getElementById('canvas');
const canvasContext = convas.getContext('2d');

window.onload = () => {
    gameLoop()
    
}

function show(){
  update(); 
  draw();   
}

function update(){
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    snake.move();
    eatApple();
    checkHitWall();
}

function eatApple(){
    if(snake.tail[snake.tail.lenght - 1].x === apple.x && snake.tail[snake.tail.lenght - 1].y === apple.y){
        snake.eat();
        apple.newApple();
    }
}

function checkHitWall() {
    let headTail = snake.tail[snake.tail.lenght -1]

    if (headTail.x == - snake.size){
        headTail.x = canvas.width -snake.size
    }else if(headTail.x == canvas.widh){
        headTail.x = 0;
    }else if(head.tail.y == - snake.size){
        headTail.y = canvas.height - snake.size;
    }else if(headTail.y == canvas.height){
        headTail.y = 0;
        
    }
    function draw(){
        createRect(0, 0, canvas.width, canvas.height, "black")
        createReact(0,0, canvas.width, canvas.height)
        
        for(let i = 0; i< snake.tail.length; i++){
            createRect(snake.tail[i].x, +2.5, snake.tail[i].y + 2.5,
                snake.size = 5, snake.size-5, "white")
        }

        canvasContext.font = "20px Arial";
        canvasContext.fillStyle = "#00FF42";
        canvasContext.fileText("Score: " + (snake.tail.lenght -1), canvas.widh - 120, 18);
        createReact(apple.x, apple.y, apple.size, apple.size, apple.color); 

    function createRect(x,y,width, height, color) {
        canvasContext.fillStyle = color;
        canvasContext.fillRect(x, y, width, height);        
    }    


    window.addEventListener("keydown", (event) =>{
    setTimeout(() => {
        if (event.keyCode == 37 && snake.rotate !=1) {
            snake.rotateX = -1;
            snake.rotateY = 0;

        }else if(event.keyCode == 38 && snake.rotate !=1){
            snake.rotateX = 0;
            snake.rotateY = -1;
        }else if(event.keyCode == 39 && snake.rotate !=-1){
            snake.rotateX = 1;
            snake.rotateY = 0;
        }else if(event.keyCode == 40 && snake.rotate !=-1){
            snake.rotateX = 0;
            snake.rotateY = 1;
        }

    },1)
})

class Snake{ 
    constructor(x,y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.tail = [{x:this.x, y:this.y}];
        this.rotateX = 0;
        this.rotateY = 1;
      
    }
    move(){
    let newRect

    if (this.rotatex == 1) {
        newRect = {
            x: this.tail[this.tail.length - 1].x + this.size,
            y: this.tail[this.tail.length - 1].y
        }      
        
    }else if(this.rotateX == -1){
        newRect = {
            x: this.tail[this.tail.length - 1].x - this.size,
            y: this.tail[this.tail.length - 1].y
        }
    }else if(this.rotateY == 1){
        newRect = {
            x: this.tail[this.tail.length - 1].x,
            y: this.tail[this.tail.length - 1].y + this.size
        }
    }else if(this.rotateY == -1){
        newRect = {
            x: this.tail[this.tail.length - 1].x,
            y: this.tail[this.tail.length - 1].y - this.size
        }
    }
        }
    
class Apple{
    constructor(){
        let isTouching
        
        while (true) {
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size
            this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size
            
            for (let i = 0; i < snake.tail.length; i++) {
                if (this.x == snake.tail[i].x && this.y == snake.tail[i].y) {
                    isTouching = true
                }
            }

            this.size = snake.size
            this.color = "red"

            if (!isTouching) {
                break;
            }
        }
    }
}

const snake = new Snake(20,20,20); 
const apple = new Apple();