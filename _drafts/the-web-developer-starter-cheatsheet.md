---
layout: blog
title: The Web Developer Starter Cheatsheet
featured_image: /uploads/kaitlyn-baker-vzjdyl5jvxy-unsplash.jpg
date: 2020-07-29 00:04:00
---

Ready to embark on your web development career? I know how daunting and confusing web dev can be, but with enough practice and help from your friends (aka me\!) it gets all the more easy\!

&nbsp;

By now you should know that HTML controls the foundation, skeleton, and content on your website while CSS controls the styling and spacing. Javascript helps add in motion, interactivity, data collection, and reactions to specific triggers. You've set up your github/Git desktop and downloaded an application to write your code in (I use Atom). Maybe you've even found a place to to push your code so you can see the live version of your creations.

&nbsp;

But wait, I'm getting ahead of myself.&nbsp;

&nbsp;

Let's take it back a bit and start the build from the bottom up.&nbsp; Here are my top tips and "to-dos" but fear not, I've created an entire cheatsheet with whole slew of helpful content, html breakdowns, and css tricks\!

&nbsp;

&nbsp;

**Outline and break down your wireframe**
{: .partial-highlight-mint}

&nbsp;

I always start off every project with a pencil and paper–I know I know, it's like being in the middle ages but it helps get the creativity flowing. I'll draw or print out wireframes to help guide my preliminary design process. (*I've actually digitized my wireframes and you can snag those&nbsp;***[*here*](/images/wireframe-cheatsheet.pdf).)&nbsp;**Once I'm happy with the preliminary design, I'll switch over to Adobe XD so I can add in colors, images, and fonts.&nbsp;

After I have all my design files ready to use (hex codes, images, fonts, spacing etc.) I'll actually turn back to my original, paper-drawn design and write out the sections of code in the margins of my sketch. Think of this kind of like outlining an essay. Having things pre-determined allows me to write my code even faster and helps me define spacing or difficult sections of code before I even get writing (note: faster coding\!). It ends up looking something like this:&nbsp;

&nbsp;

![](/uploads/my-morning-timeline.png){: .one-half width="794" height="1285"}![](/uploads/my-morning-timeline-1.png){: .one-half width="800" height="1285"}

&nbsp;

&nbsp;

&nbsp;

**Brainstorm your classes**
{: .partial-highlight-mint}

&nbsp;

Once you've broken down your wireframe and design, it's time to take the next step in organization: defining your classes.&nbsp;

&nbsp;

Brainstorming your classes before coding keeps you from repeating the same classes or creating redundant pieces of code. On top of your more specific classes, create a set of general classes, or "helper classes", that you can add to any element so you don't have to keep adjusting the same style values in different elements in your code. This can be things like pre-determined padding/margins, buttons, text formatting etc.&nbsp;

&nbsp;

Remember that helpful cheatsheet I mentioned? It's also got all the helper classes I use on every single one of my builds and you can get it&nbsp;**here**. Write the tag and values you want in your CSS stylesheet once (I'd keep them higher up on the stylesheet) and then just add the class to your HTML elements as needed\!&nbsp;

&nbsp;

&nbsp;

&nbsp;

**Know which values, elements, and properties to target**
{: .partial-highlight-mint}

&nbsp;

Padding, margins, borders, elements, divs, sections, textareas…the web dev jargon can be confusing and frustrating when you're first starting out.

&nbsp;

Knowing what properties to target and how to target them helps you to avoid redundancy and ensures your code is displaying exactly the way you want it to. In other words, instead of having:

&nbsp;

> .div\{
>
>
> justify-content:center;
>
>
> margin:auto;
>
>
> align-items:center;

\}

&nbsp;

figure out which property you really need so you can have cleaner code:

&nbsp;

> .div\{
>
>
> justify-content: center;
>
>
> \}

&nbsp;

All this to say: make sure you know which property is doing the job you want done and then use ***just that one***. This is something that becomes easier to define over time but if you're not seeing the right styles display on your page there are a couple things to check:

&nbsp;

&nbsp;

### 1\. The Order of Command:

> CSS is a cascading sheet, that means that it is read from top to bottom. In other words, whatever comes later in the cascade trumps code written earlier in your stylesheet and will be what displays. This means that if you have command for a background-color for your header at the top of your stylesheet but then added in a new command for background-color for your header later in the stylesheet, then the second command is what will be displayed.&nbsp;
>
>
> (visual)
>
>
> &nbsp;
>
>
> If you have code that just refuses to listen to your commands, take a look at the rest of your stylesheet and make sure you haven't repeated yourself. This is also where pre-determining your classes comes in handy\!
>
>
> &nbsp;
>
>
> \*there are ways of working around this but when you're starting off, understanding the hierarchy of your commands helps reduce clutter and redundancy.&nbsp;

&nbsp;

&nbsp;

### 2\. Is it the right property?&nbsp;

> Sometimes the problem isn't the order or the wrong class at all but rather that you've been targeting the wrong property. I can't tell you how many times I used to confuse font-size and font-weight when I was first starting out. I couldn't understand what I was doing wrong and sometimes would just re-copy my style commands lower in my stylesheet in the hopes that that would fix my code.
>
>
> &nbsp;
>
>
> It didn't. And all I got instead was a bunch of messy code to sift through.&nbsp;
>
>
> &nbsp;

&nbsp;

Which brings me to my next point...

&nbsp;

**Familiarize yourself with "Inspect"**
{: .partial-highlight-mint}

&nbsp;

Inspect, aka the holy grail of web dev. If there's anything you take away from this article it should be this: use, and never forget to use, the inspect tool.&nbsp;

&nbsp;

Not only does this tool let you explore the code on your own page (in other words, figure out what the hell is broken and how to change it) and sample different css styles, but it also let's you peek in at other peoples' code as well\! Have you ever been to a website and absolutely loved that fade-in feature or wanted to find out what kind of CSS styling makes those buttons pop? Inspect can help\!&nbsp;

&nbsp;

&nbsp;

### To access it is super simple\!&nbsp;

> 1\. Hold down your ctrl button while you right click on your mouse.&nbsp;
>
>
> 2\. At the bottom of the pop-up menu you'll see "Inspect"
>
>
> 3\. Once you click on "Inspect" a panel will open up either on the side or bottom of your browser. The top/left section is the HTML while the bottom/right section is the CSS.&nbsp;
>
>
> 4\. Clicking on the button on the top left corner (which looks like a cursor over a box) will let you choose specific elements on the page so that you don't have to go rooting through hefty html to find that one element you're curious about.&nbsp;
>
>
> 5\. Take some time to play around with inspect. Change padding, find colors, see which classes are being used and where etc. Then make those changes in your stylesheet. THEN push live.

&nbsp;

![](/uploads/i-highly-recommend-dr-bilhas-fish-book-invincible-womenthe-book-describes-in-vivid--personal-interviews-the-incredible-contribution-of-women-immigrants-to-our-society--it-is-refreshing-to-read-such-personal-stori-3.png){: width="940" height="788"}

&nbsp;

This is just the beginning\! Inspect is an incredibly powerful tool that can tell you so much more than just the structure and styling of a page. Inspect will also tell you things like why your JS isn't working properly or how to uncover bugs in your code. But for now, we'll stick to the basic elements panel.

&nbsp;

### \- - - -
{: .yellow.align-to-center}

&nbsp;

This is just the tip of the iceberg. Before jumping into your project, **take a look at this super helpful cheatsheet I've put together**. On it are all the things I wish I had had on hand while I was muddling through my first few projects (like good helper classes and how to use the 'display' property). Keeping this handy is sure save you some time and plenty of frustrations throughout the entirety of your build\!

&nbsp;

&nbsp;

Happy Coding\!

&nbsp;

X

Tash

&nbsp;

&nbsp;