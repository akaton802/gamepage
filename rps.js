function RPS(){
    alert("RPS");
var user=document.getElementById("userInput").value.toLowerCase();
document.getElementById("userOutput").innerHTML="User chose" + user;
var computer= Math.floor(Math.random()*3)+1;
if(computer==1){
    computer="rock";
} else if (computer==2){
    computer="paper";
} else{
        computer="scissors";
    }
document.getElementById("computerOutput").innerHTML="Computer chose" +computer;
if(user == computer){
        document.getElementById("rpsOutput").innerHTML= "it's a tie";
    }else if (user == 'rock' &&computer == 'scissors' ||user =='scissors'&&computer=='paper'||user =='paper'&&computer=='rock'){
        document.getElementById("rpsOutput").innerHTML= "You Win!";
    }else{
        document.getElementById("rpsOutput").innerHTML= "You lose!";
    }
}
