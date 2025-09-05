/* 
  Mute Syntax (c) 2025 Mohamed Louanjli
  MIT Licence. See repository for details.
*/

// -- Poetic pools --
let subjects = [
  "The cracked zero", "An orphaned integer", "A signal in sleep mode", "The residue of seven",
  "An echo with syntax", "A miscounted breath", "A digit wearing fog", "This recursive silence",
  "An unfinished sequence", "The forgotten operand", "A borrowed pulse", "The inverted proof",
  "A number in exile", "A line left open", "The shadow of logic", "A bit out of range",
  "An equation murmuring", "The recursive sigh", "A cipher dreaming", "A digit in disguise",
  "The echoing value", "A forgotten placeholder", "A simulated silence", "The quiet denominator",
  "A flipped condition", "A digit behind glass", "A numeral paused", "An unstable fraction",
  "A static expression", "A trailing checksum"
];

let verbs = [
  "whispers into", "reconfigures as", "leaks through", "restates itself in",
  "drowns beneath", "betrays", "loops back to", "flattens into", "mourns", "detunes with",
  "splits under", "reflects across", "resonates in", "contracts toward", "glitches along",
  "blurs into", "breaks against", "slips between", "transmits through", "bends around",
  "repeats like", "skips over", "oscillates with", "hums beside", "freezes above",
  "scans past", "misfires beneath", "halts under", "drags with", "flickers across"
];

let metaphors = [
  "a corrupted dream", "a logic storm in sleep", "the punctuation of static",
  "a vowel buried in numbers", "a filament of memory", "a pause no voice owns",
  "a ghost with perfect symmetry", "the lull between two equations",
  "an atlas of failing circuits", "a digit submerged in breath",
  "a whisper caught mid-pulse", "the syntax of error", "a horizon of misfires",
  "the absence of closure", "a decimal left adrift", "the curve of lost thought",
  "an echo trapped in RAM", "the drift of failed signals", "a glitch with form",
  "a blank line pretending", "a clock with no face", "a static bloom", "the maths of forgetting",
  "a silence wrapped in brackets", "a loop stuck in waiting", "a burnt-out logic gate",
  "the last byte of a breath", "a voice in machine grammar", "an unfinished packet"
];

let poem = [];
let quietMode = false;     
let showInfo = false;      
let infoDiv = null;        
let autoTimer = 0;
let menuHeight = 20;

const infoText = "Mute Syntax is not a single poem but a system: an algorithmic engine that produces endless micro-poems from recombined fragments. Built with p5.js and styled after the 1984 Apple Macintosh interface, it explores the poetics of number, voice, and form. The vocabulary is recombined into four-line poems using a simple frame [subject] [verb] [metaphor]. Errors, awkwardness, and glitch are deliberate parts of the experience. Forget clears, Regenerate composes, Drift writes slowly in the background.";

function setup() {
  createCanvas(512, 400);
  textFont('monospace');
  textSize(12);
  generatePoem();
}

function draw() {
  drawMacWindow();
  drawPoem();
  drawInstructions();
  drawInfoButton();

  if (quietMode && !showInfo) {
    fill(255, 220);
    rect(0, 0, width, height);
    fill(0);
    textAlign(CENTER, CENTER);
    text("quiet mode – poem drifting...", width / 2, height / 2 - 10);
    text("click anywhere to return", width / 2, height / 2 + 15);

    if (frameCount - autoTimer > 240) { // ~4 seconds
      generatePoem();
      autoTimer = frameCount;
    }
  }
}

function drawMacWindow() {
  background(230);

  // Border
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(4, 4, width - 8, height - 8);

  // Title bar
  fill(180);
  noStroke();
  rect(4, 4, width - 8, menuHeight);

  // Menu text
  fill(0);
  textAlign(LEFT, CENTER);
  text("Forget", 12, 14);
  text("Regenerate", 70, 14);
  text("Drift", 170, 14);
}

function drawPoem() {
  fill(0);
  textAlign(LEFT, TOP);
  for (let i = 0; i < poem.length; i++) {
    text(poem[i], 20, 40 + i * 30);
  }
}

function drawInstructions() {
  fill(80);
  textAlign(LEFT, TOP);
  text("Click anywhere to regenerate. Use 'Drift' for ambient mode.", 20, height - 30);
}

function drawInfoButton() {
  const r = 8;
  const cx = width - 20;
  const cy = 14;

  noFill();
  stroke(0);
  strokeWeight(0.75);
  ellipse(cx, cy, r * 2, r * 2);

  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  text("i", cx, cy);
}

function openInfo() {
  if (infoDiv) return;
  showInfo = true;
  infoDiv = document.createElement('div');
  infoDiv.className = 'info-panel';
  infoDiv.innerHTML = '<button class="info-close" aria-label="Close info" title="Close">×</button>' +
                      '<h1>Mute Syntax: info</h1>' +
                      '<div>' + infoText + '</div>';
  document.body.appendChild(infoDiv);

  const closeBtn = infoDiv.querySelector('.info-close');
  closeBtn.addEventListener('click', closeInfo);
}

function closeInfo() {
  showInfo = false;
  if (infoDiv && infoDiv.parentNode) {
    infoDiv.parentNode.removeChild(infoDiv);
  }
  infoDiv = null;
}

function mousePressed() {
  if (!showInfo && mouseY > 4 && mouseY < 4 + menuHeight) {
    // Left labels
    if (mouseX >= 12 && mouseX < 65) { clearPoem(); return; }
    if (mouseX >= 70 && mouseX < 165) { generatePoem(); return; }
    if (mouseX >= 170 && mouseX < 250) { quietMode = !quietMode; autoTimer = frameCount; return; }
  }

  const r = 10;
  const cx = width - 20;
  const cy = 14;
  const dx = mouseX - cx;
  const dy = mouseY - cy;
  const onInfo = (dx * dx + dy * dy) <= r * r;

  if (mouseY > 4 && mouseY < 4 + menuHeight && onInfo) {
    if (showInfo) {
      closeInfo();
    } else {
      openInfo();
    }
    return;
  }

  
  if (showInfo) return;

  
  if (quietMode && frameCount - autoTimer > 30) {
    quietMode = false;
  } else if (!quietMode) {
    generatePoem();
  }
}

function keyPressed() {
  if (key === 'i' || key === 'I') {
    if (showInfo) closeInfo(); else openInfo();
  } else if (keyCode === ESCAPE && showInfo) {
    closeInfo();
  }
}

function generatePoem() {
  poem = [];
  for (let i = 0; i < 4; i++) {
    let subject = random(subjects);
    let verb = random(verbs);
    let metaphor = random(metaphors);
    poem.push(subject + " " + verb + " " + metaphor + ".");
  }
}

function clearPoem() {
  poem = ["", "", "", ""];
}
