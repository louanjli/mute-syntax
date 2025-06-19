
# Mute Syntax: System Overview 

## Project Summary
*Mute Syntax* is a browser-based, generative poetry system built with **p5.js**. It uses procedural composition to construct four-line micro-poems from a controlled vocabulary, operating within a constrained grammatical structure. The piece is framed in a UI styled after the 1984 Macintosh interface to emphasise the computer as both medium and metaphor.

The project treats the interface not just as a means of delivery, but as a poetic apparatus itself. Menu elements such as "Forget", "Regenerate", and "Drift" function both as technical triggers and as conceptual gestures—invoking memory, recursion, and ambient silence.

---

## 1. Poem Generation Logic
Each poem consists of **4 lines**, and each line is composed using the template:

    [subject] [verb] [metaphor].

These components are pulled from three arrays:
- `subjects[]` (~30 entries)
- `verbs[]` (~30 entries)
- `metaphors[]` (~30 entries)

The generator randomly selects one element from each array for each line. There is **no filtering**, **no grammar checking**, and **no memory** of past outputs. This ensures that:
- Redundancy is possible
- Results are occasionally awkward, surreal, or surprising
- No line is ever “correct” — only structurally valid

**Complexity space:**
Each line has ~27,000 combinations.  
Each 4-line poem: ~5.3 × 10¹⁷ combinations (27,000⁴ = 531,441,000,000,000,000 ≈ 5.3 × 10¹⁷).

Since each poem has 4 lines, and each line is independently generated, the total number of possible poems is: 27,000^4 = 5.3 \times 10^{17}That’s 530 quadrillion different poems — an astronomically large number. Put simply: the chances of generating the exact same poem twice by accident are extremely low.

The main function `generatePoem()` constructs the four lines by sampling the arrays using `random()` from p5.js. Each time it's called, it redraws the poem on the canvas.

---

## 2. Randomness and State
- Poem generation is triggered either by mouse clicks on GUI elements or, in Drift mode, by a timer.
- The system uses `random()` from p5.js, seeded anew at each load, so it is **non-deterministic**.
- There is no internal state tracking or saving—poems are **ephemeral** and **unrepeatable** unless copied by the user.
- Although not exposed, `frameCount` is the only temporal marker at runtime and could be used to timestamp a poem.

---

## 3. UI as Poetic Interface
The interface mimics a minimal desktop GUI with hard-coded bounding boxes over drawn menu items. User interaction is managed by manually checking `mouseX` and `mouseY` inside `mousePressed()`.

Three interface elements perform poetic roles:
- **Forget** clears the canvas and resets the interface.
- **Regenerate** composes a new poem instantly.
- **Drift** toggles a time-based mode where `generatePoem()` is automatically triggered every ~8 seconds:

```javascript
if (driftMode && millis() - lastGenerationTime > delayTime) {
  generatePoem();
  lastGenerationTime = millis();
}
```

The GUI is not passive; it is styled to behave as a conceptual constraint—an intentional friction that shapes interaction and reflection.

---

## 4. Design Intent
The interface is both poetic and functional:
- Menu labels are **semantic gestures**: "Forget" as memory erasure, "Regenerate" as recomposition, "Drift" as ambient silence.
- The system evokes not only the aesthetics of early computers but their **conceptual grammar**—structured input, output, and failure.
- No poem is saved; all are transient.

---

## 5. Code Philosophy
The system reflects a few guiding principles:
- **Structuralism over storytelling**: Meaning arises from recombination, not authorial control.
- **Poetic ambiguity by design**: Lines are allowed to misfire, loop, or contradict.
- **Interface as aesthetic form**: The GUI isn't just a container — it is part of the poem.
- **Silence and slowness**: Drift mode introduces timing as a structural constraint.

The design invites the user to see computation not just as process, but as **expressive material**.

---

## Technologies
- **Framework**: p5.js
- **Deployment**: GitHub Pages
- **Interface**: Custom HTML/CSS + `<canvas>` element
- **User Interaction**: GUI labels implemented as coordinate-based click zones
- **Randomness**: Native `random()` function in p5.js
- **Fonts & Aesthetics**: Monospace system font, low-res icons, grey UI palette

---

## Licensing and Code Structure
The project follows the MIT License, with clear attribution:
```javascript
// Mute Syntax (c) 2025 Mohamed Louanjli
// Released under the MIT License
```

Files include:
- `index.html` — layout, title bar, and canvas
- `sketch.js` — poem generation logic and user interaction
- `p5.min.js` — processing library (MIT Licensed)
