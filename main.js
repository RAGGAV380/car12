canvas=document.getElementById("mycavas");
 ctx=canvas.getContext("2d");

 car_width=100;
 car_height=90;

 car1_x=10;
 car1_y=10;

 car2_x=20;
 car2_y=20;


background_image= "racing.jpg";
car1_image= "car1.png";
car2_image="images.png"
function add() {
background= new Image();
background.onload=uploadb;
background.src=background_image                  ;

car1= new Image();
car2= new Image();
car1.onload=uploadr;
car2.onload=uploadr;
car1.src=car1_image;
car2.src=car2_image;

}

function uploadb(){
ctx.drawImage(background,0,0,canvas.width,canvas.height);
}

function uploadr(){
    ctx.drawImage(car1,car1_x,car1_y,car_width,car_height);
    ctx.drawImage(car2,car2_x,car2_y,car_width,car_height);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
key_code=e.keyCode;
if (key_code == '38'){
    up();
    
}

if (key_code == '40'){
    down();

}
if (key_code == '37'){
    left();
}
if (key_code == '39'){
    right();
}

}

function up(){
    if(car1_y>=0){
car1_y-=10;

if(car2_y>=0){
    car2_y-=10;

uploadb();
uploadr();
    }
} 
 
    function down(){
        if(car1_y<=500){
            car1_y+=10;
            uploadb();
            uploadr();
        }
        
            
    }

    function right(){
if (car1_x<=700){
    car1_x+=10;
    uploadb();
    uploadr();

}

    }
    


     function left(){
        if(car1_x>=0){
            car1_x-=10;
            uploadb();
            uploadr();

        }
     }

        
     