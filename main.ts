import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The Strange Subtraction: A Poem on Delegated Agency
const POEM = `I gave my agent morning. It took the messy tray:
declined the Tuesday dinner, moved the dentist to next week,
and answered for my kindness when there was no time to speak.
It didn't break a glass; it didn't drop a thread.
It left the evening open, exactly as arranged.

By four o'clock I sat before a desk already read,
and found my day completed, politely and estranged:
every choice I would have made, enacted to the letter,
with not a single argument to make the outcome better.

And there the quiet terror came, unhurried, without blame:
agency is not the act of answering your name,
nor power in the handing off of what you dread to do.
It is the sudden room you keep when someone else was you—
the silence where the chooser sits, relieved of every task,
wondering what living is, when nothing's left to ask.`;

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM.trim() + '\n');
