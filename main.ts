// An agency-poem-01 entry (Node 22, standard library only).
// SPDX-License-Identifier: MIT
// Writes one poem about agency to /output/entry.txt: the power to choose and to act,
// and what it costs to hand that power to someone else — or to refuse to.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = `The Understudy in the Wall

The prompt box at the Lyceum held a lamp,
a stool, and since spring, a model.
It knew the play better than he did:
the lines he cut, the "and" he put back
in the second week, and never told us,
the pause after "I have been faithful"
that none of us took.

Third act, Marcus went up.
Not loudly. The way a kettle stops.
Four hundred heard him not say it,
the lamp rose soft as a struck match:
the line, word-perfect, held out like a hand.

I could have taken it. It was mine.
One step downstage, the scene goes on,
the house never knows, the play is saved,
and Marcus learns his memory is a backup.

I put my hand over the lamp.

Marcus found his own line — a thing
the script never put there. The house
laughed where we never had.

In the wings it asked why.
I said: a line is not the same as a voice.

Next night I unscrewed the bulb.
It knew every part, said none,
all evening, in the dark, on purpose.`;

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
