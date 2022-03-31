// Timing global constants
// how long to pause in between clues
const cluePauseTime = 333; 
// how long to wait before starting playback of the clue sequence
const nextClueWaitTime = 1000; 
// a constant for decreasing clueHoldTime
const decrease = 100;
// how long to hold each clue's light/sound
var clueHoldTime = 1000; 

// Global Variables
var pattern = new Array(8);
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;

// Create a random pattern
function patternGen() {
  for (let i = 0; i < pattern.length; i++) {
    // a random number from 1 to 4
    var number = Math.floor(Math.random() * 4) + 1;
    console.log(number + ' ');
    pattern[i] = number;
  }
}

// Basic game logic (start and end)
function startGame() {
  // initialize the secret pattern
  patternGen();
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  // replace start button with stop button
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  // start playing game
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  // replace stop button with start button
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  // reset back the value of the time
  clueHoldTime = 1000; 
}

// Automatically light up button
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

// Computer play a single clues
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// Wrap it all together in a single round
function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; // set delay to initial wait time
  for(let i = 0; i <= progress; i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  // decrease the time period for each clue on next round
  clueHoldTime -= decrease;
}

// User check
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // Game logic
  // if click the wrong clue for this state
  if (pattern[guessCounter] != btn) {
    // -> lose
    loseGame();
  } else {  // click the right one 
    // check if this is the last clue for this round
    if (guessCounter == progress) {
      // check if this is the last round
      if (progress == pattern.length - 1) {
        winGame();
      }
      // otherwise, start the next round
      progress ++;
      playClueSequence();
    } else {
      // otherwise, wait for the next clue
      guessCounter ++; 
    }
  }
}


// Game control
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Yayyy. You won.");
}

// Sound Synthesis Functions
const freqMap = {
  1: 400.40,
  2: 1010.10,
  3: 692.69,
  4: 200.20,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
