
# Mute Syntax: Patterns of Speech and Silence in a System  
**Mohamed Louanjli, 2025**

*Mute Syntax* is not a single poem but a generative system—an algorithmic engine designed to produce an infinite array of micro-poems from recombined fragments. It is built in **p5.js**, styled after the 1984 Macintosh OS, and structured around the poetics of logic, glitch, and interface.

Rather than authoring fixed lines, I wrote a process. Each poem consists of **four lines**, following a strict template:

    [subject] [verb] [metaphor].

The vocabulary is drawn from three curated arrays:
- **Subjects**: abstract or digital figures (“The cracked zero”, “A digit behind glass”, “The forgotten operand”)
- **Verbs**: gestures of failure or transformation (“detunes with”, “loops back to”, “drowns beneath”)
- **Metaphors**: textural or ambiguous imagery (“a vowel buried in numbers”, “the lull between two equations”, “a pause no voice owns”)

The full pool includes approximately 90 elements. The generator randomly selects one from each array per line. No filtering, memory, or semantic checking occurs. Redundancy and awkwardness are not errors but material—texture through repetition and failure.

There is no visible serial number, but each poem is internally marked with `frameCount` at the moment of generation—an ephemeral timestamp. As with Sutcliffe’s base-4 logic in *SPASMO*, the idea is not archival but situational uniqueness.

### Interface as Poetic Form

The graphical interface is intentionally anachronistic, mimicking the early Macintosh GUI. Each element plays a poetic and functional role:

- **Forget**: clears the poem, simulating memory erasure.
- **Regenerate**: composes a new poem from the system.
- **Drift**: enters a quiet, ambient state where new poems generate every few seconds without user input.

These are not just buttons—they are conceptual gestures. The GUI is reimagined as a poetic apparatus, where interaction becomes a mode of reading and writing. It is designed for desktop viewing, in keeping with the work’s retro-informatic logic.

### Time and Randomness

Randomness is neither deterministic nor chaotic. The seed changes at each session. Poems are ephemeral and cannot be recovered unless manually copied. In **Drift** mode, the system generates a poem every ~8 seconds, shifting the reader’s role from agent to observer. Silence, slowness, and memory become structural principles.

### Conceptual Framework

The system privileges **iteration over authorship**, **structure over story**, **interface over inscription**. It explores how a number might be reframed as a voice, how syntax might glitch into metaphor, how logic might produce emotion.

As a digital poem, *Mute Syntax* resonates with the lineage of algorithmic writing explored in *White Heat Cold Logic* (MIT Press, 2009), where artistic thought and computational structure are not opposed but intertwined.

In *Mute Syntax*, a number is not just data—it is anomaly, rhythm, residue. A glitch becomes a form of saying.
