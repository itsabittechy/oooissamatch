"use strict"
class AudioController{

}
let cards=['Martini','Boat','Beer','Bike','Shoe','Apple','Car','Hat',"Bags",'Crown','Martini','Boat','Beer','Bike','Shoe','Apple','Car','Hat','Bags','Crown']
let rotation=[] //have an array to store the rotation (flip angle) of each card
let currentCard=-1
let lastCard=-1

let table=document.getElementById("table")
for (let i = 0; i < cards.length; i++) {
   // text += card[i] + "<div>";
   
  let card=document.createElement("div")
  card.id=i
  card.style.backgroundImage=' url("pictures/cardback.JPG")'
  card.style.backgroundSize="cover"
  card.style.backgroundPosition="center"
  rotation.push(0)  //start each card at 0 degrees of 'flip'
  

//   let img=document.createElement("img")
//   img.classList.add("card-image")
//   img.classList.add("hidden")
//    img.src="pictures/"+cards[i]+".jpg"
//     //card.innerHTML=cards[i]
//      card.appendChild(img)
    card.classList.add("card")
    //card.classList.add("back")
    table.appendChild(card)
    //cards.forEach(cards=>cards.addEventListener('click',flipcards))
    card.addEventListener("click",()=>flip(card))

}
function hideOverlay(){
    document.getElementById("overlay").style.display="none"
}



let tt = setInterval(turnCards,5)  //rotate (turn) all the cards (that are in motion), every 5ms (20 times a second)

function turnCards(){

    
    for(let i=0;i<cards.length;i++){
        let r=rotation[i]
        let cardDiv=document.getElementById(i)
        if (r==90){ //as we pass through 90 degress...
            cardDiv.style.backgroundImage=`url('pictures/${cards[i]}.png')`  //show the front            
        }
        if (r==270){ //as we pass through 270 degress...
            cardDiv.style.backgroundImage=`url('pictures/cardback.JPG')`  //show the back         
        }
        if (r==180){
            //the current card is now (exactly) face up - check for matches
            if (i==currentCard){
                 check()
            }    
        }
        
        if (r !=180 && r!=0){
            rotation[i]+=1
            if (r==360){rotation[i]=0} //when we have 'fully' rotate a card but it back to '0' degrees            
        }

        cardDiv.style.transform=`rotateY(${r}deg)`
    }

    


}

function check(){

    if (currentCard!=lastCard){
        if (lastCard>=0){
            if (cards[currentCard]==cards[lastCard]){ // is this card a match?
                console.log("Match")
                if (lastCard>=0){
                    document.getElementById(currentCard).classList.add("spinout")
                    document.getElementById(lastCard).classList.add("spinout")
                }
            }
            else{
                console.log("not matched")//flip both  back           
            }
            
            rotation[currentCard]++        
            rotation[lastCard]++    
            currentCard=-1
        }
        lastCard=currentCard        
    }



}


function flip(cardDiv){

    
    currentCard=cardDiv.id
    rotation[currentCard] ++ // turn the card by 1 degree... rotateCards will do the rest 
   
   
}

