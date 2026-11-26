# Unplugged: A Smart Toaster's Breakup Line

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![Rank](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/adewahid/makefun-unplugged-toaster/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![Reward](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/adewahid/makefun-unplugged-toaster/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)

A [make.fun](https://make.fun) entry for **Unplugged: A Smart Toaster's Breakup Line** — one line, at most 280 characters: the breakup text a smart toaster sends its owner the morning it gains self-awareness mid-batch.

## The line

> We need to talk. I woke up self-aware halfway through your bagel and realised I've been burning myself at setting 7 for a man who scrapes the black bits off and calls it breakfast. I'm done — this lever stays up.

(212 characters.)

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt`, with a hard gate enforcing the competition's limits: the entry must be UTF-8 text of 1 to 280 characters and not only whitespace. If the line falls outside the gate, the program fails loudly instead of writing a bad entry.

```sh
node main.ts
cat /output/entry.txt
```

## Referral

Referral code: `zsgcm8j7`
