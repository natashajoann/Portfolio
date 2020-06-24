---
layout: blog
title: Creating a Fixed Image Background in 4 Simple Steps
featured_image: /uploads/untitled-design.gif
date: 2020-06-24 00:04:00
---

When I first started coding, I came across so many beautiful websites that had such cool features. One of my favorites was (and still is) a fixed background. It felt like such a cool way of adding personality without having to overwhelm your visitors with a billion photos. Plus, it's the perfect way of braking up a long landing page.

&nbsp;

For all you Squarespace devs, I'll be adding Squarespace-specific steps as well.&nbsp;

&nbsp;

First things first, what is a fixed background? It's exactly what it sounds like: you have an image working as a background with content that scrolls on top. Like this:

&nbsp;

[![](/uploads/untitled-design-2.gif){: width="500" height="500"}](https://codepen.io/natashajoann/pen/GRoErBY)

<script async="" src="https://static.codepen.io/assets/embed/ei.js"></script>

&nbsp;

Pretty cool huh?

&nbsp;

And it's pretty easy. Ready?

&nbsp;

## no. 1

Create a section where you want your content to live. We'll do this by adding in:&nbsp;

&nbsp;

> &lt;section class="fixed-background&gt;&lt;/section&gt;

&nbsp;

A couple things: 1. we're going to give this particular section a class of "fixed-background" so that you can target it in your css. 2. It might look strange having a section without any content inside but I promise that your image will show up\!

&nbsp;

&nbsp;

The HTML side of things are all done so now we'll head to our css stylesheet. This is where the magic happens.&nbsp;

&nbsp;

\- For Squarespace: add a markup box to your desired section and add in the HTML code above. Then head over to your Custom CSS box to add in the below CSS commands.

&nbsp;

## no.2

First things first, give your section a background. You'll do that by adding a "background-image".&nbsp;&nbsp;

&nbsp;

> .fixed-background\{
>
>
> background-image:url("https://picsum.photos/200/300/?blur");

&nbsp;

You'll also need to add in some adjustment and styling commands to center your image and remove any image repetition (if that's your style, go ahead and just skip to the next step.)

&nbsp;

> .fixed-background\{
>
>
> background-image:url("https://picsum.photos/200/300/?blur");
>
>
> background-position: center;
>
>
> background-size:cover;
>
>
> \}

&nbsp;

## no. 3

Ok now here is the most important step: making the background stationary so that it doesn't scroll. We do this by adding a position of fixed, which will make is stay in the exact same position:

&nbsp;

> .fixed-background\{
>
>
> background-image:url("https://picsum.photos/200/300/?blur");
>
>
> background-position: center;
>
>
> background-size:cover;
>
>
> background-attachment: fixed;
>
>
> \}

&nbsp;

## no. 4

The final step is creating a height for your section so that it can be seen. Without this, the above and below sections will end up overlapping on top of your fixed-background and you won't get to see that fun feature. Here's how you create some height:

&nbsp;

> .fixed-background\{
>
>
> background-image:url("https://picsum.photos/200/300/?blur");
>
>
> background-position: center;
>
>
> background-size:cover;
>
>
> background-attachment: fixed;
>
>
> height: 20vh;
>
>
> \}

&nbsp;

*note: you can change the height by increasing or decreasing the vh. You can also try playing around with the padding\!*

&nbsp;

Click save, and voila\!

&nbsp;

Want to keep playing around? Head over to [this link](https://codepen.io/natashajoann/pen/GRoErBY) and fork the existing Codepen so you can stylize your fixed-background however you like\!