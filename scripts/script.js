init = function init() {
  document.getElementById('comment').innerHTML = 'Shoot the moon!'; // it's ironic
  document.getElementById('homeTeam').innerHTML = 'Home';
  document.getElementById('awayTeam').innerHTML = 'Away';
  document.getElementById('homeScore').innerHTML = '0';
  document.getElementById('awayScore').innerHTML = '0';
  document.getElementById('homeBid').innerHTML = '-';
  document.getElementById('awayBid').innerHTML = '-';
  document.getElementById('instructions').style.visibility = 'hidden';
  document.getElementById('bids').style.visibility = 'hidden';
  document.getElementById('tricks').style.visibility = 'hidden';
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
