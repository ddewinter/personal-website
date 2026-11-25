---
title: Make the fancy AI setup beat the simple one first
description: I ran a blind test on my own AI setup and the elaborate version lost. Here's how I decide what's worth building now.
tags: [ai]
date: 2026-11-25T16:00:00Z
pullquote: Every extra piece has to beat the plain version in a fair test, or it goes.
---

This month I ran a blind test on my own AI setup, and the fancy version lost.

I had built a "manager" agent. It took a task, handed the work out, sent the result to a critic, and kept looping until the critic was satisfied. It looked like what serious AI work is supposed to look like.

So I ran the same work two ways: once through the manager, once in a plain session with no extra machinery. Then I compared the results without knowing which was which.

The manager was no better. It took twice as long. Every extra minute was the critic loop.

## I've learned this one before

This isn't the first time. A while back I spent three hours building an elaborate Skill for a report that a simple prompt handled fine. The person I built it for preferred the version I didn't design.

Turns out the lesson didn't stick. Building with AI is fun, and the fun part is adding pieces. Agents that review agents. Loops that check loops. Each piece feels like progress while you're building it.

But a piece you add isn't progress until it beats the version without it.

## Ask what the time is for

When someone shows me an automation, my first question is a simple one: it's going to save you time, but to do what better?

If there's a good answer, great. Now you know what to measure. If there isn't, the simple version is probably enough, and you've saved yourself a weekend.

## Start with the step you control

When I teach people to automate their work, I have them split a process into inputs, the work in the middle, and outputs. Then we look for the easy win: something that happens every week, has only a few inputs, follows rules you can explain out loud, and produces the same format every time.

Start there. Get it working. Then take the next step.

It's a stair-step approach, and the order matters. Automate the parts you control before the parts that depend on other people. The steps that involve someone else's inbox or calendar are where things get messy, and you want a few wins under your belt before you get there.

## Decide what "done" means before you build

My other mistake with fancy setups: I'd call them done too early.

One check passing isn't done. When I build a tool to replace something I've been doing by hand, done now means it reproduces my hand-built version. Not that one number I spot-checked happens to match.

I also write the brief before anything gets built: what done looks like, what the agent can decide on its own, and what I'll check first when it's finished. A good test of the brief is whether a fresh session, with none of my back-and-forth, could build the thing from the brief alone. This month one did.

## Keep the pieces that earn their place

I didn't throw out everything after the blind test. One independent review round did catch real problems, so it stayed. The rest of the loop went.

That's the rule I use now. Every extra piece has to beat the plain version in a fair test, or it goes.

Put another way: the simple version is the baseline, not the draft. You have to earn your way past it.

The lesson: build the simple version first, and make anything fancier prove it's better.

What's something you built with AI where the simple version would have done the job? [Tell me about it](/contact/).
