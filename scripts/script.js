function onclick(id, fun) {
  var elem = document.getElementById(id);
  elem.onclick = fun;
}

function ondblclick(id, fun) {
  var elem = document.getElementById(id);
  elem.ondblclick = fun;
}

function onsubmit(id, fun) {
  var elem = document.getElementById(id);
  elem.onsubmit = fun;
}

function show(id) {
  var elem = document.getElementById(id);
  elem.style.visibility = 'visible';
}

function hide(id) {
  var elem = document.getElementById(id);
  elem.style.visibility = 'hidden';
}

function set(id, val) {
  var elem = document.getElementById(id);
  elem.innerHTML = val;
}

function value(id, val) {
  var elem = document.getElementById(id);
  elem.value = val;
}

function check(id) {
  document.getElementById(id).checked = true;
}

function setBids() {

}

function setScore() {

}

function clearBids() {
  value('homeBidLeft','');
  value('homeBidRight','');
  value('awayBidLeft','');
  value('awayBidRight','');
}

function clearScore() {
  value('homeTricks','');
  value('awayTricks','');
  check('homeNil');
  check('awayNil');
}

function resetScore() {
  set('homeScore','0');
  set('awayScore','0');
  set('homeBid','-');
  set('awayBid','-');
}

function init() {
  set('comment','Shoot the moon!'); // it's ironic
  set('homeTeam','Home');
  set('awayTeam','Away');
  hide('instructions');
  hide('bids');
  hide('tricks');
  resetScore();
}
