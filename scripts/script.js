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

var score = {h: 0, a: 0};

function setScore() {
  function calcScore(score, gain, bags) {
    var curBags = Math.abs(score % 10) + bags;
    score -= score % 10;
    score += gain * 10;

    if (curBags >= 10) {
      score -= 100;
      curBags -= 10;
    }

    if (score < 0)
      score -= curBags;
    else
      score += curBags;

    return score;
  }

  var h = Number(document.getElementById('homeTricks').value);
  var hNil = document.getElementById('homeNil').checked;
  var a = Number(document.getElementById('awayTricks').value);
  var aNil = document.getElementById('awayNil').checked;

  if (a+h !== 13) {
    alert('There should be 13 tricks, please recount');
    return;
  }

  h = h - bids.h;
  a = a - bids.a;

  if (h < 0)
    score.h = calcScore(score.h, -bids.h, 0);
  else {
    score.h = calcScore(score.h, bids.h, h);
  }
  if (a < 0)
    score.a = calcScore(score.a, -bids.a, 0);
  else {
    score.a = calcScore(score.a, bids.a, a);
  }

  if (bids.hNil) {
    if (hNil)
      score.h = calcScore(score.h, 10, 0);
    else
      score.h = calcScore(score.h, -10, 0);
  }
  if (bids.aNil) {
    if  (aNil)
      score.a = calcScore(score.a, 10, 0);
    else
      score.a = calcScore(score.a, -10, 0);
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

function changeHomeTeam() {
  set('homeTeam',prompt('Enter a new team name','Home'));
}

function changeAwayTeam() {
  set('awayTeam',prompt('Enter a new team name','Away'));
}

function changeHomeScore() {
  var iScore = Number(prompt('Set new score',score.h));
  if (!isNaN(iScore)) {
    score.h = iScore;
    set('homeScore', score.h);
  }
}

function changeAwayScore() {
  var iScore = Number(prompt('Set new score',score.a));
  if (!isNaN(iScore)) {
    score.a = iScore;
    set('awayScore', score.a);
  }
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
