//configuracion del menu del index
let playerState='Quieto';
const dropdown = document.getElementById('animations') as HTMLInputElement | null;
dropdown?.addEventListener('change',function(event){
    playerState = (event.target as HTMLInputElement).value;
})



/*obtener el contexto a renderizar y sus funciones de dibujo*/
const canvas:any=document.getElementById('canvas1');
const ctx:any=canvas.getContext('2d');
/*tamaño proporcional dentro del canvas*/
const CANVAS_WIDTH=canvas.width = 600;
const CANVAS_HEIGHT=canvas.height = 600;

/*Se ocupa la imagen*/
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
/*Se busca el tamaño del ancho dividido entre los fotogramas*/
const spriteWidth=575;
/*Se busca el tamaño del alto dividido entre los fotogramas*/
const spriteHeight=523;
    //variables que reemplazan a "sx" y a "sy"


    //Indica la accion que debe realizar en las funciones de abajo



    let gameFrame =0;

    //Velocidad movimiento
    const staggerFrames=4;

const spriteAnimations:any = [];
const animationStates = [
    {
        name: 'Quieto',
        frames: 7,
    },
    {
        name:'Brinca',
        frames: 7,
    },
    {
        name:'Reverencia',
        frames: 7,
    },
    {
        name:'Corre',
        frames: 9,
    },
    {
        name:'Mareado',
        frames: 11,
    },
    {
        name:'Sientate',
        frames: 5,
    },
    {
        name:'Rueda',
        frames: 7,
    },

    {
        name:'Muerde',
        frames: 7,
    },
    {
        name:'Muerto',
        frames: 12,
    },
    {
        name:'Golpe',
        frames: 4,
    }
];


animationStates.forEach((state, index)=>{
    let frames = {
        loc:[],
    

    }
    
    for(let j=0;j< state.frames;j++){

        let positionX =j*spriteWidth;
        let positionY=index*spriteHeight;
        


        frames.loc.push(
            
          
            {x:positionX,y:positionY}
       
            );
    }


    spriteAnimations[state.name]=frames;

});



function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let position = Math.floor(gameFrame/staggerFrames)%spriteAnimations[playerState].loc.length;
   let frameX=spriteWidth*position;
    let frameY=spriteAnimations[playerState].loc[position].y;
    //ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)

    //Se configura la medida de la imagen en el canvas
    //Para movernos sobre el eje horizontal en la imagen utilizamos "1*spriteWidth" en "sx"
    //Para movernos sobre el eje vertical en la imagen utilizamos "1*spriteHeight" en "sy"
    //podemos remplazar el 0 por los valores en frameX y frameY fuera de la funcion

    


    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    

    
    

    gameFrame++;

    requestAnimationFrame(animate);

};
animate();