let userScore = 0;
let compScore = 0;

let msg= document.querySelector("#msg")
let userpara=document.querySelector("#user-score")
let comppara=document.querySelector("#comp-score")
const compter=()=>{
    const options=["rock","paper","sissers"];
    const randnumidx = Math.floor(Math.random() * 3)
    return options[randnumidx];
}

const showwinner=(userwin,compchoises,userchoice)=>{
    if(userwin){
        userScore++;
        userpara.innerText=userScore;
        // console.log("you win!"); 
        msg.innerText=`you win! your ${userchoice} beats ${compchoises}`;
    //   msg.style.backgroudColor = "green";
      msg.style.backgroundColor = "green";
    }else{
        compScore++;
        comppara.innerText=compScore;
        // console.log("you lose");
        msg.innerText=`you lose! your ${compchoises} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";

        // msg.style.backgroundColor = "green";
    }
      
}

const gamestart=(userchoice)=>{
    console.log("user chocise",userchoice)
    
    const compchoises = compter();
    console.log("user bot",compchoises)
    if(userchoice === compchoises ){
        console.log("DRAW")
        msg.innerText=" Game was Draw!";
        msg.style.backgroundColor = "rgb(39, 71, 119)";

    } else{
        let userwin= true;
        if(userchoice==="rock" ){
            userwin= compchoises==="paper"? false : true;
        }else if(userchoice==="paper"){
            userwin = compchoises==="rock"?false:true
        } else{
            userwin = compchoises==="sissers"? false:true
        }
        showwinner(userwin,compchoises,userchoice);
    }

} 






const  choices = document.querySelectorAll(".choose");
choices.forEach((choose)=>{

    choose.addEventListener("click", ()=>{
        const userchoice =choose.getAttribute("id");
        // console.log("clicked game", userchoice)
        gamestart(userchoice);
    });

}); 