var comment  = document.getElementById('comment').innerHTML;
var homeTeam = document.getElementById('homeTeam').innerHTML;
var awayTeam = document.getElementById('awayTeam').innerHTML;
var homeScore= document.getElementById('homeScore').innerHTML;
var awayScore= document.getElementById('awayScore').innerHTML;
var homeBid  = document.getElementById('homeBid').innerHTML;
var awayBid  = document.getElementById('awayBid').innerHTML;
var instructions = document.getElementById('instructions').style.visibility;


init = function init() {
  comment = 'Shoot the moon!';
  homeTeam = 'Home';
  awayTeam = 'Away';
  homeScore= '0';
  awayScore= '0';
  homeBid  = '-';
  awayBid  = '-';
  instructions='hidden';
}

function showInstructions() {	
  instructions='visible';
}

function hideInstructions() {
  instructions='hidden';
}

function resetScore() {
  homeScore= '0';
  awayScore= '0';
  homeBid  = '-';
  awayBid  = '-';
}

function showGames() {
  alert("Only Spades is available.");
}

document.getElementById("submitBid").onclick = function() {
  var sBid = prompt('Home team: enter your bids','Enter bids separated by a comma. Nil and blind nil are denoted by 0, 00 (ex. 9,0 for 9 and nil)');
  // validation would go here
  homeBid = sBid;
  sBid = prompt('Away team: enter your bids','Enter bids separated by a comma. Nil and blind nil are denoted by 0, 00 (ex. 9,0 for 9 and nil)');
  // validation would go here
  awayBid = sBid;
}

document.getElementById("submitScore").onclick = function() {
  function newScore(oldScore) {
    return iTricks + oldScore;
  }
  var iTricks = prompt('Home team: how many tricks did you take','If you broke nil, add an X (ex. 9X)');
  // validation would go here
  homeScore = newScore(homeScore);

  iTricks = prompt('Away team: how many tricks did you take','If you broke nil, add an X (ex. 9X)');
  // validation would go here
  awayScore = newScore(awayScore);
}
