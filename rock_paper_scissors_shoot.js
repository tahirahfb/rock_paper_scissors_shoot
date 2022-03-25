const hands = ['rock', 'paper', 'scissors'];

function getHand(){
                return hands[parseInt(Math.random()*10)%3];
}

let challenger1 = {name: 'John Doe', getHand: getHand}; 
let challenger2 = {name: 'Sallie Mae', getHand: getHand};

function playRound(p1,p2){
    let player1played = p1.getHand();
    let player2played = p2.getHand();

    /*console.log(p1.name, "threw", player1played);
    console.log(p2.name, "threw", player2played);*/

    if (player1played === player2played){
        console.log(p1.name + ' played ' + player1played + ', ' + p2.name + ' played ' + player2played + ", it's a tie!");
        return null;
    }else if((player1played === 'rock' && player2played === 'scissors') || (player1played === 'scissors' && player2played === 'paper')
     || (player1played === 'paper' && player2played === 'rock' )) {
        console.log(p1.name + ' played ' + player1played + ', ' + p2.name + ' played ' + player2played + ', ' + p1.name + " is the winner!");
        return p1;
    }else if((player2played === 'rock' && player1played === 'scissors') || (player2played === 'scissors' && player1played === 'paper')
    || (player2played === 'paper' && player1played === 'rock' )) {
       console.log(p2.name + ' played ' + player2played + ', ' + p1.name + ' played ' + player1played + ', ' + p2.name + " is the winner!");
        return p2;
    }
}

console.log(playRound(challenger1, challenger2));


function playGame(player1, player2, playUntil){
    var player1score = 0;
    var player2score = 0;

 while (player1score < playUntil && player2score < playUntil){
     console.log(player1.name + ' current score: ' + player1score);
     console.log(player2.name + ' current score: ' + player2score);

     if (!playRound(player1, player2)) {
        
     }else if (playRound(player1, player2) === player1){
         player1score++;
     }else{
         player2score++;
     }   
}

if (player1score === playUntil){
    return player1;
}else{
    return player2;
}
}


console.log(playGame(challenger1, challenger2, 5));
