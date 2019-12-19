function dice(){
    var die1= Math.floor(Math.random()*6)+ 1;
    var die2= Math.floor(Math.random()*6)+ 1;
    var total=die1+die2;
alert("dice");
if(total==7||total==11){
document.getElementById("diceOutput").innerHTML="You rolled" + total + ".You win!";
} else if(total==2||total==3||total==12) {
document.getElementById("diceOutput").innerHTML="You rolled" + total + ".You win!";
}
else {
document.getElementById("diceOutput").innerHTML="You rolled" + total + ".You win!";
}
}
