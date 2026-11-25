# AGENT.md

Entry for the make.fun competition "Till Firmware Do Us Part"
(https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929):
one funny, heartfelt wedding vow spoken by a robot at its own wedding.

`main.ts` (Node 22, stdlib only) holds the vow as a constant, checks the gate
(1–200 characters, single line, exactly one sentence, ASCII-only), and writes
it to `/output/entry.txt` with no trailing newline. Run with `node main.ts`.
