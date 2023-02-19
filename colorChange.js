function getId(id){
    const card = document.getElementById(id);
    return card
}

function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = '#';

    for(let i =0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];

    }
    return color;
}
function colorChange(){
    

    const firstCardColor = getId("first-card-color"); 
    firstCardColor.style.background = getRandomColor();
   
    
}


function secondCard(){
    const secondCardColor = getId("second-card-color")
    secondCardColor.style.background= getRandomColor()
}

function thirdCard(){
    const thirdCardColor = getId("third-card-color");
    thirdCardColor.style.background = getRandomColor();
}
function fourthCard(){
    const fourthCardColor = getId("fourth-card-color");
    fourthCardColor.style.background = getRandomColor();
}
function fifthCard(){
    const fifthCardColor = getId("fifth-card-color");
    fifthCardColor.style.background = getRandomColor();
}
function sixthCard(){
    const sixthCardColor = getId("sixth-card-color");
    sixthCardColor.style.background = getRandomColor();
}

