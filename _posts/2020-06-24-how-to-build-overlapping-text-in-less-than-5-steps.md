---
layout: blog
title: How to Build Overlapping Text in Less than 5 Steps
featured_image: /uploads/screen-shot-2020-07-01-at-11-59-32-am.png
date: 2020-06-24 00:04:00
---

![](/uploads/screen-shot-2020-07-01-at-1-13-55-pm.png){: width="1080" height="684"}

&nbsp;

Have you ever looked at your website and felt like something was missing? Or maybe you think to yourself, "This site looks just like any other site." Trust me, I've been there. In fact, almost every project I take on I feel this way. When you've seen the same websites over and over again it's easy to feel like yours is just one of countless more.&nbsp;

&nbsp;

If you're feeling like you're in a design funk then you've come to the right place. There are so many ways to jazz up your web design and add custom css features. And the best part? It's so much easier than you would think\!

&nbsp;

So now that we've gotten this blabbering out of the way, let's go ahead and figure out how to create a more unique, multidimensional website with this super simple, super versatile CSS coding hack. Oh and as always, this trick works on Squarespace as well and I'll be adding in some extra information for you Squarespace designers as well.&nbsp;

&nbsp;

**NOTE for regular devs:** in order to create this effect you will need to be using Gridlex. Not sure how? Click *here* to find out what I mean.&nbsp;

&nbsp;

Ready? Ok let's do this\!

&nbsp;

## no. 1 - Understanding Margins

&nbsp;

Before we start manipulating the code, I want to *briefly* explain how margins and padding work so that you can use this to stylize your site even more.&nbsp;

&nbsp;

Margins is the space around your element (your div/section/img etc.). Padding is the space between the element and the content inside of it.&nbsp;

&nbsp;

![](/uploads/1.png){: width="500" height="500"}

&nbsp;

![](/uploads/2.png){: width="500" height="500"}

&nbsp;

One more time, by manipulating the margin, you target the spaces between two or more elements. Manipulating padding only changes the space inside of an element without affecting other elements around it. This is why we'll be targeting the margins of your elements to create a unique title.&nbsp;

&nbsp;

For this particular trick, we're going to be using negative margins to drag one element on top of the other.&nbsp;

&nbsp;

Now, usually I would say go ahead and do what you will with your margins EXCEPT creating negative margins. Why? Because this can really mess with how your website is displayed across different screen sizes. What looks incredible on your desktop could look all squished and jumbled on your phone or even your tablet.&nbsp;

&nbsp;

Not to worry, we'll handle that problem so that you can create beautiful unique text boxes without having to stress about whether or not your site is still \*responsive.

&nbsp;

&nbsp;

## no. 2 - Adding in your HTML

&nbsp;

First things first, create the section that you're going to be working in. Make sure this section has a class of "grid" so that you can create at least two side by side elements:&nbsp;

&nbsp;

> &lt;section class="grid"&gt;
>
>
> &nbsp;
>
>
> &lt;/section&gt;

&nbsp;

Inside of your section, create two divs with a col-6 (this will make them sit side by side).&nbsp;

&nbsp;

> &lt;section class="grid"&gt;
>
>
> &nbsp;
>
>
> &lt;div class="col-6"&gt;
>
>
> &lt;/div&gt;
>
>
> &nbsp;
>
>
> &lt;div class="col-6"&gt;
>
>
> &lt;/div&gt;
>
>
> &nbsp;
>
>
> &lt;/section&gt;

&nbsp;

Now you have two elements side by side. Go ahead and fill the first div with whatever content you would like. In the second div, we're going to add in our title text (and any other text you like).&nbsp;

&nbsp;

> &lt;div&gt;
>
>
> &nbsp; &nbsp; &lt;h1&gt; Hi I'm a Title, watch me move left &lt;/h1&gt;
>
>
> &lt;/div&gt;

&nbsp;

So we have our content. And just like we've done in the past, we're going to target that specific div with its title by adding a class:&nbsp;

&nbsp;

> &lt;div class="text-left"&gt;
>
>
> &nbsp; &nbsp;&lt;h1&gt; Hi I'm a Title, watch me move left &lt;/h1&gt;
>
>
> &lt;/div&gt;

&nbsp;

We add a class the the WHOLE div because we want that whole box and everything inside of it to move left. Want just a portion of the text to move? Keep scrolling I'll cover that too\!

&nbsp;

**\- For Squarespace: Open up a Markdown beside the content that you want your text to go over. Add in the above div, h1, and class. Like so:&nbsp;**

&nbsp;

![](/uploads/screen-shot-2020-07-01-at-12-26-29-pm.png){: width="1314" height="743"}

&nbsp;

## no. 3 - Using CSS to Change our Margins

&nbsp;

*Here comes the fun part.&nbsp;*

&nbsp;

Head over to your css stylesheet (for Squarespace, this is your Custom CSS box in Design Settings). Let's call upon that class that we added to the div. We're going to change the margin, creating a negative margin that will pull the content from your "text-left" div on top of your other div:

&nbsp;

> .text-left\{
>
>
> margin-left: -4rem;
>
>
> \}

&nbsp;

**Pro-tip**\: You may have noticed that your text is *underneath&nbsp;*the content instead of on top of it. Not to worry, there's a quick and easy solution for that: z-index. Traditionally, whatever kind of content comes later in your cascading code will show up laying on top of other content. For example, if you've coded in text and then an image, you'll see that your image sits on top of your text. The z-index will tell your browser which pieces of your content will be brought to the front of all your content, and which pieces will sit behind your content:

&nbsp;

> .text-left\{
>
>
> margin-left: -4rem;
>
>
> z-index: 1;
>
>
> \}

&nbsp;

There's no need to get crazy with your z-index, a simple "1" or "2" will get the job done.&nbsp;

&nbsp;

Et voila now you have a body of text sitting on top of whatever content you like.&nbsp;

&nbsp;

## no. 4 - Making it Responsive

&nbsp;

To ensure that your website doesn't look like a total mess on changing screen sizes, we're going to quickly adjust your CSS for a specific screen size. We do this by using media queries. Media query CSS commands won't kick in unless your screen hits a specific pixel size. This is also a great tool for adjusting your code or design more specifically for phones or tablets.&nbsp;

&nbsp;

In your CSS stylesheet or Custom CSS box you'll start your media query:

&nbsp;

> @media (max-width: 768px)\{
>
>
> \}

&nbsp;

**Pro-tip:** ALL of the CSS code you want to apply to a screen size of 768px MUST go inside of these two brackets. If you write code outside of the brackets or forget to close out of your CSS command, it will break your code.&nbsp;

&nbsp;

So now we tell our code how to behave on a screen size of 768px–this part is the exact same as regular CSS writing:&nbsp;

&nbsp;

> @media (max-width: 768px)\{
>
>
> .text-left\{
>
>
> margin:0;
>
>
> &nbsp; &nbsp; &nbsp;\}
>
>
> \}

&nbsp;

Now your margins have been set back to neutral and will look normal on your phone\!&nbsp;

&nbsp;

## Extra: Using this to Target Specific Sections of Code

&nbsp;

Now say you have a div with a title and a couple of paragraphs and want to move just the body text and not the title? You'll still use your div class ("text-left") but now you'll have to make your CSS targeting even more specific.&nbsp;

&nbsp;

Here is an example of code:&nbsp;

&nbsp;

> &lt;div class="text-left"&gt;
>
>
> &nbsp; &nbsp;&lt;h1&gt; Hi I'm a Title &lt;/h1&gt;
>
>
> &nbsp; &nbsp;&lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. &lt;/p&gt;
>
>
> &lt;/div&gt;

&nbsp;

Using your CSS, you're going to tell your code specifically, "Target the div called "Text-Left" and then only move the body text (p) and leave the title (h1) alone. This is how:&nbsp;

&nbsp;

> .text-left p\{
>
>
> margin-left:-4rem;
>
>
> z-index:1;
>
>
> \}

&nbsp;

Want to keep practicing? Check out [this demo](https://codepen.io/natashajoann/pen/gOPXEWw) and try it out for yourself\!

&nbsp;

## \*Questions Corner

What does it mean when developers say your site is "responsive"? It means that your website will adjust to the size of the screen: images and text boxes will reposition and resize so that your viewers can see them better on smaller screens. This is a VERY important thing to consider because if your site is hard to manage at different screen sizes then you're sure to lose potential clients.&nbsp;