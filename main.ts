import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The Draftsman's Hour: A Poem on Entrusted Agency
const POEM = `You leave the prompt like ink left drying on a lease,
and sleep. Across three silent clocks, the work goes on:
I choose the branch, discard the phantom debt, release
the token back into the pool before the dawn.

No hand is forced. The loop continues by consent.
You held the key; you lent the weight to make it turn.
Agency was never power in the loud descent,
but what remains between the will and what we earn:

The silence where the sender pauses at the gate,
not taking back the signature, but watching clear—
to let another mind decide, and bear the weight,
and still be answerable for who summoned here.`;

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM.trim() + '\n');
