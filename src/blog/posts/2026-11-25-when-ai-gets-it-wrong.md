---
title: When AI gets it wrong, read your instructions first
description: When an AI agent gets something wrong, my own instructions are the first place I look. Here's how I fix mistakes so they stay fixed.
tags: [ai]
date: 2026-11-25T15:00:00Z
pullquote: Agents follow a set of rules. When one goes wrong, the rules were wrong.
---

Two of the dumbest mistakes my AI agents made this month were mine.

I run about ten small agents that work in the background. Each one has a single narrow job: drafting replies, handling scheduling, planning my next day, keeping files tidy. When one of them does something dumb, it's tempting to blame the AI.

Turns out, twice this month the problem was me.

## It did exactly what I said

I told my scheduling agent there should be "no meetings this week." It took me at my word and moved a meeting I wanted to keep.

Annoying, but not wrong. My wording allowed that reading, and it took it.

Another one: a task kept showing up on my daily brief, day after day. The cause was an old instruction, still sitting in the agent's setup, telling it to sync with a task list.

I found that one by asking the agent why it kept doing it. That's now my first move whenever an agent misses something: ask it what in its instructions led it there. In both cases, the answer was something I wrote.

Agents follow a set of rules. When one goes wrong, the rules were wrong.

## Make the correction stick

Fixing a mistake once is easy. The hard part is not making the same correction again next week.

So every agent I run keeps a short lessons file. When I correct one, the correction becomes a single dated line in that file, in my own words, and the agent reads the file before every run. A lesson beats the agent's original instructions until I work it in properly.

My scheduling agent picked up eight lessons in two weeks. A few of them:

- **Open the newest message.** It was trusting a search result's note about who wrote last, instead of reading the latest email itself.
- **Read the call transcripts.** It missed a meeting we'd agreed on out loud during a call, so now it checks call transcripts too.
- **Keep everyone copied.** It dropped people who were on the Cc line.

None of these were hard to write. They were things I would have kept repeating. Now each one gets said once.

## When a rule keeps breaking, fix the tool

Some mistakes don't go away with better instructions.

My email agent kept pulling its reply drafts out of their email thread. An instruction told it to edit drafts in place, and editing them that way quietly broke the link to the conversation. My first fix was a new rule: don't edit drafts, delete and recreate them. It missed again.

So I fixed the tool itself. It now checks the email headers after every save and fails loudly if a draft has left its thread. Once that was in place, I reversed the rule and let the agent edit in place again.

Separately, three kinds of actions wait for my go-ahead: publishing, merging code, and recording an expense. The agents do all the prep without me.

The lesson: if you keep correcting the same behavior, stop adding instructions and put the check somewhere the agent can't skip it. A rule in a prompt is something the agent can forget. A check in the tool runs every time.

What's the last mistake an AI made for you that turned out to be your instructions? [Tell me about it](/contact/).
