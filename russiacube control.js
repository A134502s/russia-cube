function startgame(){
    //cubeover()
    //if (select == false)
    //{
    // document.body.addEventListener('keydown',pause)
        
    //}
    movepoint()
    drawpanel()
    randomnum()
    cubecheck1()
    drawcube()
    down()
    getscore()
    cubestop()
    setTimeout(startgame,500)
    

}
const board = document.getElementById("cube")
const ctx = board.getContext('2d')
let boardwidth = 20 
let downpostion = 0
let endpostion = 20
let speed = 8
let random = 0
let cubeX = 0
let select = true
let end = false
let cubearray = []
let cubenumber = 0
let barrier = false
let correct = 0
let score = 0
let cancel = false
let move = true
let avaliablegetscore = false
let cubeXV = 0
class cube{
    constructor(x,y){
        this.x = x
        this.y = y
    }

}
function drawpanel(){

    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,400,400)
}
function randomnum(){
     //Math.floor(Math.random()*2)
     if (select==true){
     random = 0
     cubeX = Math.floor(Math.random()*17)
     //if (cubeX>16){
        //cubeX = 0
     //}
     downpostion =  0
    }
    else{
        //cubeX = cubeX+1
    }
}
function movepoint(){
    cubeX = cubeX+cubeXV
}
function drawcube(){
    
    //let cubeY = Math.floor(Math.random()*boardwidth)
    //ctx.fillText(random,200,200)
    select = false
    switch(random){
    case 0:
    ctx.fillStyle = 'green'
    for(let i=0;i<4;i++){

        ctx.fillRect((cubeX+i)*boardwidth,downpostion*boardwidth,20,20)
        
    }
    break

    case 1:
    ctx.fillStyle = 'red'
    for (let i =0;i<4;i++){
        ctx.fillRect(cubeX*boardwidth,(downpostion+i)*boardwidth,20,20)
    }
    break
    

    }
    cubeXV = 0
    if (move == true){
        //downpostion = downpostion+1
    }
    //cubenumber = cubenumber+1
    
    //setTimeout(drawcube,10000)
}
function down(){
    downpostion = downpostion+1
    if (downpostion == endpostion){
        cubearray.push(new cube(cubeX,downpostion))
        end =true
        select = true
        avaliablegetscore = true
    }
}
function cubestop(){

    
    
    if (cancel == true){
        for (let i = 0;i<score;i++){
        ctx.fillStyle ='black'
        for (let j = 0;j<20;j++){
        ctx.fillRect((j)*boardwidth,(endpostion-1)*boardwidth,20,20)
        }
    }
    }
    else{
        for (let i =0;i<cubearray.length;i++){

            ctx.fillStyle ='green'
            for (let j=0;j<4;j++){
            ctx.fillRect((cubearray[i].x+j)*boardwidth,(cubearray[i].y-1)*boardwidth,20,20)
        }
        }
    }
    cancel = false
    avaliablegetscore = false

}
function cubecheck(){
    if (cubearray.length>0){
    //for (let i = cubenumber-1;i<cubearray.length;i++){
        barrier = false
        for(let j =0 ;j<cubearray.length;j++){
            for(let k =0;k<3;k++){
                for (let i =0;i<3;i++){
            if (cubeX+20*i == cubearray[j].x+20*k){
                endpostion = endpostion-1
                barrier = true
                break
            }

            }
            if (barrier == true){
                break
            }
        }
        if (barrier == true){
            break
        }
        }
    }
}
function cubecheck1(){
    if (cubearray.length>0){
        for (let i = cubearray.length-1;i>-1;i--){
            if (cubeX>=cubearray[i].x-3&&cubeX<=cubearray[i].x+3){
                endpostion = cubearray[i].y-1
                break
            }
            else{
                endpostion = 20
            }
        }
    }
}
//}
function getscore(){
    if (avaliablegetscore == true){
    
        //for(let k =0;k<20;k++){
            
            if (cubearray[cubearray.length-1].y == 20){
                correct++
                if (correct%5 == 0)
                {
                    score = score+1
                    cubearray = []
                    endpostion = 20
                    cancel = true
                }
            }
            
        }
    
}
function pause(event){
    if (event.keycode == 32){
        if (move == true){
            move = false
        }
        else if (move==false){
            move = true
        }
    }
}
function cubeover(){
    if (downpostion >= 399){
        end = true
        select =true
    }
    else if (downpostion<400){
        end = false
    }
    return end
}
document.body.addEventListener('keydown',keydown1)
function keydown1(event){
    if (event.keyCode == 37){
        cubeXV = -1
        return
        
    }
    if (event.keyCode == 39){
        cubeXV = 1
        return
        
    }
    setTimeout(keydown1,100)
}
startgame()