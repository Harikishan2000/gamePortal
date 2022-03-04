 
 
 cs=30;
 

function init(){
    canvas= document.getElementById("mycanvas");
    pen=canvas.getContext("2d");
    startGame = document.getElementById('start');
    W=canvas.width=screen.width-20;
    H=canvas.height=450;
    
    game_over=false;
    food =getrandomfood();

    food_img= new Image();
    food_img.src="snakeSources/apple.png";
    score_img= new Image();
    score_img.src="snakeSources/trophy.png";
    score=0;
    snake={
      init_len:5,
      color:"red",
      cells:[],
      speed:1,
      direction:"right",
 
      createsnake:function(){
        for(var i=this.init_len-1;i>=0;i--){
          this.cells.push({ x:i,y:10});
        }
      },
   
      makesnake:function(){

        pen.clearRect(0,0,canvas.width,canvas.height);
        for(var i=0;i<this.cells.length;i++){
          pen.fillStyle=this.color;
          pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs-2,cs-2);
        }
      },
    
      snakeupdate: function(){
        
           var headx=this.cells[0].x;
           var heady=this.cells[0].y;
        // for checking the food eating condition and increase length after each food eat

        if(headx==food.x && heady==food.y)
        {
              food=getrandomfood();
              score++;
            
        }
        else{
          this.cells.pop();
        
        }

            var nexty, nextx ;

           if(this.direction=="right")
           {
              nextx=headx+1;
              nexty=heady;

           }
           
           if(this.direction=="left")
           {
              nextx=headx-1;
              nexty=heady;

           }

           
           if(this.direction=="up")
           {
              nextx=headx;
              nexty=heady-1;

           }
           
           if(this.direction=="down")
           {
              nextx=headx;
              nexty=heady+1;

           }

      
           this.cells.unshift({x:nextx,y:nexty})

           // to prvent the snake out off game boundary  and predict the game over condition
           var last_x =Math.round(W/cs);
           var last_y = Math.round(H/cs);
           if(headx>last_x || heady>last_y || headx<0 ||heady<0)
           {
             game_over=true;
            
           }

     
      }
    
        }

  }
  

  function keypressed(e){
    console.log("key pressed",e.key);
   

    if(e.key=='a'){
     snake.direction="left";
    }
    else if(e.key=='w'){
     snake.direction="up";}

     else if(e.key=='s'){
     snake.direction="down";
     }
     else if(e.key=='d'){
     snake.direction="right";
     }
  
  }
  document.addEventListener('keypress',keypressed);



function getrandomfood()
{
   var  foodx =Math.round(Math.random()*(W-cs)/cs);
    var foody =Math.round(Math.random()*(H-cs)/cs);

     console.log(foodx + " ," + foody);
    
    // pen.fillStyle=this.color;
    // pen.fillRect(food.x*cs,food.y*cs,cs,cs);        
   var   foodCord={
        x:foodx,
        y:foody,
      }
      return foodCord;
}



  function update()
  {
    snake.snakeupdate();
  }

  function draw(){
    
    pen.clearRect(0,0,canvas.width,canvas.height);
    snake.makesnake();
    
     pen.fillStyle="blue";
     pen.drawImage(food_img,food.x*cs,food.y*cs,cs-2,cs-2);  

   
     pen.drawImage(score_img,5,5,2*cs,2*cs);  
     pen.fillStyle="black"; 
     pen.font= "32px roboto";
     pen.fillText(score,cs,cs+5,40) ;

  }


  
  init()
  snake.createsnake();
  

  function gameloop(){

 // this  is for the checking status of game over
    if(game_over==true)
    {
      clearInterval(f); 
      alert("Game is over now Restart to play again and score  is " + score) 

    }
  
   draw();
   update();
   //getrandomfood();
  }

 
 startGame.onclick =function(){
   gameStarted();
 };


 function gameStarted(){
  console.log("start button clicked");
  window.location.reload();
    return false;

}

f
var f=setInterval(gameloop,100);
