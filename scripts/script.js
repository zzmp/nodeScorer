init = function init() {
  document.getElementById('comment').innerHTML = 'Shoot the moon!';
  document.getElementById('homeTeam').innerHTML = 'Home';
  document.getElementById('awayTeam').innerHTML = 'Away';
  document.getElementById('homeScore').innerHTML = '0';
  document.getElementById('awayScore').innerHTML = '0';
  document.getElementById('homeBid').innerHTML = '-';
  document.getElementById('awayBid').innerHTML = '-';
  document.getElementById('instructions').style.visibility = 'hidden';
}

function showInstructions() {	
  document.getElementById('instructions').style.visibility = 'visible';
}

function hideInstructions() {
  document.getElementById('instructions').style.visibility = 'hidden';
}

function resetScore() {
  document.getElementById('homeScore').innerHTML = '0';
  document.getElementById('awayScore').innerHTML = '0';
  document.getElementById('homeBid').innerHTML = '-';
  document.getElementById('awayBid').innerHTML = '-';
}

function showGames() {
  alert("Only Spades is available.");
}

document.getElementById('submitBid').onclick = function() {
  var sBid = prompt('Home team: enter your bids','Enter bids separated by a comma. Nil and blind nil are denoted by 0, 00 (ex. 9,0 for 9 and nil)');
  // validation would go here
  document.getElementById('homeBid').innerHTML = sBid;
  sBid = prompt('Away team: enter your bids','Enter bids separated by a comma. Nil and blind nil are denoted by 0, 00 (ex. 9,0 for 9 and nil)');
  // validation would go here
  document.getElementById('awayBid').innerHTML = sBid;
}

document.getElementById('submitScore').onclick = function() {
  function newScore(oldScore) {
    return iTricks + oldScore;
  }
  var iTricks = prompt('Home team: how many tricks did you take','If you broke nil, add an X (ex. 9X)');
  // validation would go here
  document.getElementById('homeScore').innerHTML = newScore(document.getElementById('homeScore').innerHTML);

  iTricks = prompt('Away team: how many tricks did you take','If you broke nil, add an X (ex. 9X)');
  // validation would go here
  document.getElementById('awayScore').innerHTML = newScore(document.getElementById('awayScore').innerHTML);
}
