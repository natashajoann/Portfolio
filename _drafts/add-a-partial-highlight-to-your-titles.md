---
layout: blog
title: Add a Partial Highlight To Your Titles
featured_image: /uploads/screen-shot-2020-06-19-at-4-39-06-pm.png
date: 2001-01-30 00:00:00
---

By now you've already seen this creative trend popping up on sites across the web. Adding a partial highlight to your text adds an extra dimension and helps it pop. The coloring comes from a simple combination HTML and CSS. Don't worry, I promise it's easy\!&nbsp;

Plus, for all you Squarespace developers and designers out there, I'll add in Squarespace specific instructions too\!

Ready to get your coding on?

## Understanding the Basics -

## n&ordm; 1

First things first, create a section of text. This can be a title, subtitle, body text, or even a link\! We're going to stick to a nice big title (aka H1):&nbsp;

&lt;h1&gt; Hello There\! &lt;/h1&gt;

* If you're using Squarespace: add a Markdown box to the section you want to add your text to before typing your code.&nbsp;

## n&ordm; 2

Now, we don't necessarily want to target ALL title fonts, so we're going to add in specifiers that will tell our browser to only add a highlight to THIS specific title in 2 steps:

1\. We're going to wrap our text in a "span", which is essentially a mini-container that will allow us to add styles to specific sections of code (aka, our title).&nbsp;

> We love spans because you can have tons and tons of them that add different styles\! More on that later...&nbsp;

&lt;h1&gt; &lt;span&gt; Hello There\! &lt;/span&gt; &lt;/h1&gt;

2\. To target that specific "span"/mini-container, we're going to give it a simple identifier. We call this a "class":&nbsp;

&lt;h1&gt; &lt;span class="highlight"&gt; Hello There\! &lt;/span&gt; &lt;/h1&gt;

## n&ordm; 3

Now that we've identified which part of our code we want to target, we're going to add in CSS styling.&nbsp;

For Squarespace: head to Design &gt; Custom CSS

We'll target our class:&nbsp;

.highlight\{

\}

Don't forget to add a "." in front your class tag when working in your CSS box.

Now, we'll add our command:&nbsp;

. highlight\{

background: linear-gradient(180deg,rgba(255,255,255,0) 50%, \#ECF1EB 50%);

\}

Now the fun part:&nbsp;

to add in a different color, replace "\#ECF1EB" with whatever color you like (you can use rgb/rgba codes too\!)

Want thicker lines? Decrease your percentages to something like:&nbsp;

background: linear-gradient(180deg,rgba(255,255,255,0) 36%, \#ECF1EB 36%);

Want thinner lines? Yup\! Just increase your percentages:&nbsp;

background: linear-gradient(180deg,rgba(255,255,255,0) 76%, \#ECF1EB 76%);

Done\! Easy right?

&nbsp;

Now say you want to add&nbsp;

&nbsp;

&nbsp;

&nbsp;

\* Questions Corner

\- Curious about the "/" in our code brackets? That signals the end of that particular section and type of code:&nbsp;

&lt;h1&gt; See Ya Later\! &lt;/h1&gt;

Literally means:

&lt;h1&gt; See Ya Later\! &lt;end h1&gt;&nbsp;