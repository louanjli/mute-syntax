/*
  sketch.js – Mute-Syntax
  (c) 2025 Mohamed Louanjli
  Licensed under the MIT License:
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software
  and associated documentation files (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge, publish, distribute,
  sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  https://opensource.org/licenses/MIT
*/

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
let autoTimer = 0;
let menuHeight = 20;

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

  if (quietMode) {
    fill(255, 220);
    rect(0, 0, width, height);
    fill(0);
    textAlign(CENTER, CENTER);
    text("quiet mode – poem drifting...", width / 2, height / 2 - 10);
    text("click anywhere to return", width / 2, height / 2 + 15);

    if (frameCount - autoTimer > 180) {
      generatePoem();
      autoTimer = frameCount;
    }
  }
}

function drawMacWindow() {
  background(230);
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(4, 4, width - 8, height - 8);

  fill(180);
  noStroke();
  rect(4, 4, width - 8, menuHeight);

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

function mousePressed() {
  if (mouseY > 4 && mouseY < 4 + menuHeight) {
    if (mouseX >= 12 && mouseX < 65) {
      clearPoem();
      return;
    }
    if (mouseX >= 70 && mouseX < 165) {
      generatePoem();
      return;
    }
    if (mouseX >= 170 && mouseX < 250) {
      quietMode = !quietMode;
      autoTimer = frameCount;
      return;
    }
  } else {
    if (quietMode && frameCount - autoTimer > 30) {
      quietMode = false;
    } else if (!quietMode) {
      generatePoem();
    }
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
