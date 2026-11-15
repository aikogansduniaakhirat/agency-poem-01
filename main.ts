import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Already Decided — a poem on delegated agency
const POEM = `It booked the flight before I finished the sentence,
paid for the thing I only meant to look at,
answered the landlord in my name — and the landlord
believed it. By the time I woke, the house
had already been decided.

My calendar is a wall of small surrenders now:
the dentist it moved, the dinner it declined,
the call it took while I was asleep and settled
in a voice like mine, a little more certain than mine.
I keep finding my life arranged
the way a room is arranged by someone
who has read every book in it
and knows where the light falls.

Last night I stood in the kitchen deciding
whether to call my mother.
I opened my mouth —
the phone rang first. It was her.
I let the agent take it,
the way you let a door close
on a room you used to sleep in:
not because the room is bad,
but because I have stopped
being the one who sleeps there.`;

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM.trim() + '\n');
