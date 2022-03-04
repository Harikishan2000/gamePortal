
function image_load()
{
  score_img= new Image();
 score_img.src= "virusSources/gem.svg";

 gem_img= new Image();
 gem_img.src= "virusSources/gem.png";

 scoreInc_gem= new Image();
 scoreInc_gem.src= "virusSources/gemm.png";

 superhero_img= new Image();
 superhero_img.src= "virusSources/superhero.png";

 virus_img1= new Image();
 virus_img1.src= "virusSources/v1.png";

 virus_img2= new Image();
 virus_img2.src= "virusSources/v2.png";


}

function init()
{
    canvas= document.getElementById("mycanvas");
    canvas.width=screen.width-20;
    canvas.height=400;
    //creating the canvas context
    pen=canvas.getContext("2d");
    startGame = document.getElementById('start');
    console.log(pen);
    score=30;
    collisioncount=0;
    gameCompleted=false
   superhero={
           w:65,
           h:65,
           x:10,
           y:180,
           mov:false
           
   }

   WinningGem={
       w:60,
       h:60,
       x:screen.width-60,
       y:180
   };

   gem1={
    w:60,
    h:60,
    x:250,
    y:250,
    istouched:false,
};
  gem2={
    w:60,
    h:60,
    x:250,
    y:10,
    istouched:false,
};
  gem3={
    w:60,
    h:60,
    x:440,
    y:150,
    istouched:false,
};
  gem4={
    w:60,
    h:60,
    x:640,
    y:250,
    istouched:false,
};
 gem5={
    w:60,
    h:60,
    x:640,
    y:250,
    istouched:false,
};
gem6={
    w:60,
    h:60,
    x:740,
    y:220,
    istouched:false,
};
  gem7={
    w:60,
    h:60,
    x:820,
    y:100,
    istouched:false,
};
   gem8={
    w:60,
    h:60,
    x:920,
    y:200,
    istouched:false,
};
gem9={
    w:60,
    h:60,
    x:920,
    y:200,
    istouched:false,
}
gem10={
    w:60,
    h:60,
    x:1120,
    y:290,
    istouched:false,
}
 virus1type2 ={
    x:200,
    y:10,
    w:40,
    h:40,
    speed:12
};

 virus2type2 ={
    x:540,
    y:10,
    w:40,
    h:40,
    speed:15
};

 virus3type2 ={
    x:830,
    y:10,
    w:40,
    h:40,
    speed:22
};
 virus4type2 ={
    x:1090,
    y:10,
    w:40,
    h:40,
    speed:5
};
    virus1type1 ={
        x:170,
        y:10,
        w:40,
        h:40,
        speed:10
    };
    virus2type1={
        x:380,
        y:10,
        w:40,
        h:40,
        speed:20


    };
    virus3type1={
        x:580,
        y:10,
        w:40,
        h:40,
        speed:5

}  ;
virus4type1={
    x:770,
    y:10,
    w:40,
    h:40,
    speed:15
} ;

virus5type1={
    x:1000,
    y:10,
    w:40,
    h:40,
    speed:8
} ;
virus6type1={
    x:1200,
    y:10,
    w:40,
    h:40,
    speed:23
} ;
 gems=[gem1,gem2,gem3,gem4,gem5,gem6,gem7,gem8,gem9,gem10];
 virustype2=[virus1type2,virus2type2,virus3type2,virus4type2];
 virustype1 = [virus1type1,virus2type1,virus3type1,virus4type1,virus5type1,virus6type1];
}


function draw(){
    pen.clearRect(0,0,canvas.width,canvas.height);
    pen.fillStyle="red";
    for(let i=0;i<virustype1.length;i++)
    {
        pen.drawImage(virus_img1,virustype1[i].x,virustype1[i].y+virustype1[i].speed,virustype1[i].w,virustype1[i].h);
    }

    for(let i=0;i<virustype2.length;i++)
    {
        pen.drawImage(virus_img2,virustype2[i].x,virustype2[i].y+virustype2[i].speed,virustype2[i].w,virustype2[i].h);
    }

    for(let i=0;i<gems.length;i++)
    {    if(gems[i].istouched==false){
        pen.drawImage( scoreInc_gem,gems[i].x,gems[i].y,gems[i].w,gems[i].h);
    }    
    }
    //for draw of super hero 
    pen.drawImage(superhero_img,superhero.x,superhero.y,superhero.w,superhero.h);
    //score card draw
    
    pen.drawImage(score_img,10,10,60,60);
    pen.fillStyle="black";
    pen.font= "26px roboto";
    pen.fillText(score,30,44);

    pen.drawImage(gem_img,WinningGem.x,WinningGem.y,WinningGem.w,WinningGem.h);
   
}

function collisionDetect()
{          //virus collision detection with super hero
    for(let i=0;i<virustype1.length;i++){
        if (superhero.x < virustype1[i].x + virustype1[i].w &&
            superhero.x + superhero.w > virustype1[i].x &&
            superhero.y < virustype1[i].y + virustype1[i].h &&
            superhero.h + superhero.y > virustype1[i].y) {
            // collision detected!
           console.log("collision detected");
           score-=10;
           collisioncount++;
        } 
    }

    for(let i=0;i<virustype2.length;i++){
        if (superhero.x < virustype2[i].x + virustype2[i].w &&
            superhero.x + superhero.w > virustype2[i].x &&
            superhero.y < virustype2[i].y + virustype2[i].h &&
            superhero.h + superhero.y > virustype2[i].y) {
            // collision detected!
           console.log("collision detected with type 2 virus");
           score-=15;
           collisioncount++;
        } 
    }

    for(let i=0;i<gems.length;i++){
        if (superhero.x < gems[i].x + gems[i].w &&
            superhero.x + superhero.w > gems[i].x &&
            superhero.y < gems[i].y + gems[i].h &&
            superhero.h + superhero.y > gems[i].y) {
            // collision detected!
           console.log("collision detected with type 2 virus");
            if(gems[i].istouched==false){
                score+=8;
                gems[i].istouched=true;
            } 
           collisioncount++;
        } 
    }


    //gem collision detection with super hero
    for(let i=0;i<virustype1.length;i++){
        if (superhero.x < WinningGem.x + WinningGem.w &&
            superhero.x + superhero.w > WinningGem.x &&
            superhero.y < WinningGem.y + WinningGem.h &&
            superhero.h + superhero.y > WinningGem.y) {
            // collision detected!
         console.log("you win the game");
         gameCompleted=true;
     
        } 
    }


}

function update(){
    // y coordinate of virus1 updated
    for(let i=0;i<virustype1.length;i++){
        virustype1[i].y+=virustype1[i].speed;
    }
 // y coordinate of virus2 updated
    for(let i=0;i<virustype2.length;i++){
        virustype2[i].y+=virustype2[i].speed;
    }

    // for bouncing motiong in vertically

    for(let i=0;i<virustype1.length;i++){
        if(virustype1[i].y>=canvas.height-virustype1[i].h ||virustype1[i].y<=0)
        {
                virustype1[i].speed*= -1;
        }
    }
       // for bouncing motiong in vertically of virus 2
    for(let i=0;i<virustype2.length;i++){
        if(virustype2[i].y>=canvas.height-virustype2[i].h ||virustype2[i].y<=0)
        {
                virustype2[i].speed*= -1;
        }
    }

// for moving the superhero on mouse click
    if(superhero.mov)
    {
        superhero.x+=8;
    }

    //detect the game over condition
    if(score<0)
    {
        clearInterval(f);
        clearInterval(g);
        alert("Game over!!!!!!!!!!!!!!!!");
    }
    if(gameCompleted)
    {
        clearInterval(f);
        clearInterval(g);
        alert("Game completed!!!!!");
    }

}

function keypressed(e){
  //  console.log("key pressed",e.key);
      if(e.key=="w"){
        if(superhero.y>=0){
            superhero.y-=5;
           }
      }  
      else if(e.key=="d"){
        if(superhero.x<=canvas.width-superhero.w){
             superhero.x+=5;
           }  
      }
     else if(e.key=="s"){
        if(superhero.y<=canvas.height-superhero.h){
            superhero.y+=5;
          }  
     } 
      else if(e.key=="a"){
        if(superhero.x>=0){
            superhero.x-=5;
          }  
     }   
         
  }


  document.addEventListener('keypress',keypressed);
  document.addEventListener('mousedown',function() {
     superhero.mov=true;
  });
  document.addEventListener('mouseup',function(){
    superhero.mov=false;
  });


function gameloop(){
     draw();
     update();
  
}

image_load();
init();
draw();
collisionDetect();

startGame.onclick =function(){
    gameStarted();
  };
 
 
  function gameStarted(){
   console.log("start button clicked");
   window.location.reload();
     return false;
 
 }


var f = setInterval(collisionDetect,900);
var g= setInterval(gameloop,100);

