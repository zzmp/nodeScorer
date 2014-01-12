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

var bids = {};

function setBids() {
  var hL = Number(document.getElementById('homeBidLeft').value);
  var hR = Number(document.getElementById('homeBidRight').value);
  var aL = Number(document.getElementById('awayBidLeft').value);
  var aR = Number(document.getElementById('awayBidRight').value);

  console.log(hL,hR,aL,aR);

  if ((hL + hR) > 13 || (aL + aR) > 13) {
    alert('Team bids cannot exceed 13, please rebid');
    return;
  } else if (hL < 0 || hR < 0 || aL < 0 || aR < 0) {
    alert('Bids must be at least nil (0), please rebid');
    return;
  }

  bids.set = true;

  if (hL + hR + aL + aR > 13)
    alert('Someone\'s not going to make it!');

  if (!(hL && hR))
    bids.hNil = true;
  if (!(aL && aR))
    bids.aNil = true;

  bids.h = hL + hR;
  bids.a = aL + aR;

  set('homeBid', bids.hNil ? bids.h + 'N' : bids.h);
  set('awayBid', bids.aNil ? bids.a + 'N' : bids.a);
}

var score = {h: 0, a: 0, hBags: 0, aBags: 0};

function setScore() {
  function bagged(score, bags) {}

  var h = Number(document.getElementById('homeTricks').value);
  var hNil = document.getElementById('homeNil').checked;
  var a = Number(document.getElementById('awayTricks').value);
  var aNil = document.getElementById('awayNil').checked;

  if (a+h !== 13) {
    alert('There should be 13 tricks, pleease recount');
    return;
  }

  h = h - bids.h;
  a = a - bids.a;

  if (h < 0)
    score.h -= bids.h * 10;
  else {
    score.h += bids.h * 10;
    bagged(score.h, h);
  }
  if (a < 0)
    score.a -= bids.a * 10;
  else {
    score.a += bids.a * 10;
    bagged(score.a, a)
  }

  if (bids.hNil) {
    if (hNil)
      score.h += 100;
    else
      score.h -= 100;
  }
  if (bids.aNil) {
    if  (aNil)
      score.a += 100;
    else
      score.a -= 100;
  }

  set('homeScore', score.h);
  set('awayScore', score.a);

  // reset
  set('homeBid', '-');
  set('awayBid', '-');
  bids = {};
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
