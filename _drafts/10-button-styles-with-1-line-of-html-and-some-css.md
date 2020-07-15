---
layout: blog
title: 10 Button Styles With 1 Line of HTML and Some CSS
featured_image: /uploads/ezgif-com-gif-maker-3.gif
date: 2020-07-08 00:04:00
---

In a [previous post](https://natashaverdon.com/2020/07/08/easy-css-tricks-every-web-developer-needs-to-know.html){: target="_blank"}, I briefly mentioned a quick and easy CSS style (the Hover Effect) you could add to your links to make them stand out as clickable text.

&nbsp;

When it comes to creating buttons with code, there are literally thousands of cool and fun ways you can create unique and memorable experiences for your users\! Not only will each of these be unique button styles on their own, I'll also be throwing in additional hover styles I like to use for each\!

&nbsp;

Let's dive in…

&nbsp;

#### 1 Line of HTML

&nbsp;

Create your button and give it a class to target with CSS

&nbsp;

> a&lt;href="www.natashaverdon.com" class="button-style"&gt; Click Here &lt;/a&gt;

&nbsp;

&nbsp;

***Pro-tip:*** I add a transition property to *ALL* of my CSS properties so that they go into their effects more smoothly. The transition property is attached to your regular CSS command section, not the hover commands. You can add a whole slew of extra styling features but for the sake of this I'm gonna keep it simple:

&nbsp;

> .button-style\{
>
>
> transition: 0.5s;
>
>
> \}

&nbsp;

&nbsp;

Now let's have some fun...

&nbsp;

&nbsp;

### 1\. Simple Underline Button

&nbsp;

Target the border command to create an appearing/disappearing underline under your button. They key is to add in a transparent border in your regular CSS so that your content doesn't shift down when your hover border appears.&nbsp;

&nbsp;

#### The CSS:&nbsp;

&nbsp;

> .button-style\{
>
>
> border-bottom: 2px solid rgba(250, 250, 250, 0);
>
>
> \}

&nbsp;

#### The Hover Effect:&nbsp;

&nbsp;

> .button-style: hover\{
>
>
> border-bottom: 2px solid \#E2B600;
>
>
> \}

&nbsp;

&nbsp;

&nbsp;

### 2\.&nbsp; Bordered Button&nbsp;

&nbsp;

#### The CSS:&nbsp;

&nbsp;

> .button-style\{
>
>
> border: 1px solid \#e5bc5c;
>
>
> color: \#e5bc5c;
>
>
> padding:7px;
>
>
> transition: 1s;
>
>
> \}

&nbsp;

&nbsp;

#### The Hover Effect:&nbsp;

&nbsp;

&nbsp;

> .button-style: hover\{
>
>
> background-color:\#e5bc5c;
>
>
> color: white;
>
>
> \}

&nbsp;

&nbsp;

### 3\. Rounded

&nbsp;

To get rounded edges on your element, you'll use "border-radius". No need to go too big with your value, a small number like 5px will work great\!

&nbsp;

> .button-style\{
>
>
> border: 1px solid \#e5bc5c;
>
>
> border-radius: 5px;
>
>
> width:30%;
>
>
> color: \#e5bc5c;
>
>
> padding:3px;
>
>
> transition: 0.5s;
>
>
> \}

&nbsp;

#### The Hover: see any of the above hover styles.&nbsp;

&nbsp;

&nbsp;

### 4\. Partial-Highlight + changing color hover

&nbsp;

Remember [this tutorial on creating partial highlights](https://natashaverdon.com/2020/06/19/add-a-partial-highlight-to-your-titles.html){: target="_blank"}? This trick also works great as a button style\! Add a color-based hover effect to indicate to your audience that it's a clickable button:&nbsp;

&nbsp;

#### The HTML and CSS can be found [here](https://natashaverdon.com/2020/06/19/add-a-partial-highlight-to-your-titles.html){: target="_blank"}.&nbsp;

&nbsp;

&nbsp;

Your hover will use the exact same CSS just with a new background color.&nbsp;

&nbsp;

#### The Hover Effect:&nbsp;

&nbsp;

> &nbsp;highlight:hover\{
>
>
> background: linear-gradient(180deg,rgba(255,255,255,0) 50%, \#E2B600 50%);
>
>
> \}

&nbsp;

&nbsp;

### 5\. Sinking Button&nbsp;&nbsp;

&nbsp;

Creating a sinking button effect is a lot easier than you would think. It's just a matter of aligning your colors properly.&nbsp;

&nbsp;

Essentially, you will swap the colors from dark to light (except the border) and then add lighter shadows to the entire element and to the text.&nbsp;

&nbsp;

#### The CSS

> .button-style5\{<br>&nbsp; border:2px solid \#c28e2f;<br>&nbsp; background-color:\#e3b053;<br>&nbsp; box-shadow: 1px 2px \#c28e2f;<br>&nbsp; color:white;<br>&nbsp; transition: 0.3s;<br>\}

&nbsp;

#### The Hover Effect

> <br>.button-style5:hover\{<br>&nbsp; border: 2px solid \#c28e2f;<br>&nbsp; background-color: \#faebd0;<br>&nbsp; box-shadow: 1px 2px \#e7ddaf;<br>&nbsp; text-shadow: -1px -1px 0 \#c28e2f;<br>&nbsp; color: \#e7ddaf;<br>\}

&nbsp;

&nbsp;

### 6\. Box-shadow Button

&nbsp;

Add a retro box-shadow to your button then use a hover effect to change the color of the button or even just the shadow\!

#### &nbsp;

#### The CSS

&nbsp;

> .button-style\{
>
>
> &nbsp; background-color:\#E2B600;&nbsp; padding:10px;&nbsp; box-shadow: 5px 5px \#888888;
>
>
> transition: 0.5s;
>
>
> \}

&nbsp;

&nbsp;

#### The Hover Effect

&nbsp;

> .button-style:hover\{
>
>
> background-color:\#D9EFE9;
>
>
> \}

&nbsp;

&nbsp;

### 7\. Letter Spacing

&nbsp;

This one is all about the hover. We're simply going to bump up the spacing between letters:

&nbsp;

> .button-style:hover\{
>
>
> letter-spacing: 5px;
>
>
> \}

&nbsp;

&nbsp;

### 8\.&nbsp; Display Hidden Icon on Hover

&nbsp;

I've come across plenty of versions of this same piece of code that have always seemed a bit too complicated for what it is\! I'm dialing it way back with this CSS trick by just adding in arrows (*using the code "\\00bb"*) and the *":after"* effect. This will add in a new child element at the end of your parent element. That's it\! One line of code.&nbsp;

&nbsp;

> .button-style:hover:after\{
>
>
> content: '\\00bb';
>
>
> \}

&nbsp;

&nbsp;

### 9\. Fill to the Right

Now that we've conquered fills, transitions, and :after commands, let put them all together.&nbsp;

&nbsp;

#### Add in your button styling:&nbsp;

&nbsp;

> .button-style9\{<br>&nbsp; border: 2px solid \#333;<br>&nbsp; position: relative;<br>&nbsp; transition:.4s;<br>\}

&nbsp;

&nbsp;

#### Create the filling effect with styling and coloring:&nbsp;

&nbsp;

> .button-style9:after\{<br>&nbsp; position: absolute;<br>&nbsp; content: "";<br>&nbsp; top: 0;<br>&nbsp; left: 0;<br>&nbsp; width: 0;<br>&nbsp; height: 100%;<br>&nbsp; background: \#ff003b;<br>&nbsp; transition: all .35s;<br>\}

&nbsp;

#### Pro-tip: make sure your fill takes up the space of the whole element by creating a width:&nbsp;

&nbsp;

> .button-style9:hover:after\{<br>&nbsp; width: 100%;<br>\}<br>&nbsp;

&nbsp;

&nbsp;

### 10\. Growing Borders

&nbsp;

&nbsp;

This one starts off like button style 7 but then adds a bit more styling to make it really pop. Alternatively, ditch the letter spacing because to be honest, this one is cool all on its own.&nbsp;

&nbsp;

&nbsp;

This particular style is a bit more complex than the others but it's worth playing around with to make it work. We're using hover, :after, and :before commands. the :before and :after will serve to add in the lines on top and below, and they will each need separate commands as well as additional hover commands.&nbsp;

&nbsp;

&nbsp;

First, we'll need to add some commands to the button as a whole:

&nbsp;

> .button-style9 \{&nbsp; &nbsp;
>
>
> flex-direction: column;&nbsp; &nbsp;
>
>
> text-align: center;&nbsp;
>
>
> &nbsp; width:20%;&nbsp;
>
>
> &nbsp; transition: 0.5s ease-in-out;
>
>
> \}

&nbsp;

Adding in "flex-direction:column" will keep your pretty lines from becoming two rectangles on either side of your button.&nbsp;

&nbsp;

Now we add in the preliminary hover commands:&nbsp;

&nbsp;

> .button-style9:hover,.button-style9:active \{&nbsp;
>
>
> letter-spacing: 5px;&nbsp;
>
>
> &nbsp;transition:0.5s ease-in-out;
>
>
> \}

&nbsp;

\*remember when I mentioned that you can add all kinds of fun features to your transitions? Here's a prime example of that.&nbsp;

&nbsp;

Now, we'll add the styling for your two before/after lines. One thing to note, make sure you create a transparent border of the same size your eventual lines will be. Without this border, when you hover over your cool button, it will shift your surrounding content as it makes space for the new border. Adding in this transparent border will give your hover a place to fill in without making everything else shift around.&nbsp;

&nbsp;

> .button-style9:after,.button-style9:before \{&nbsp;
>
>
> border: 1px solid rgba(250,250,250,0);&nbsp;
>
>
> content: " ";&nbsp;
>
>
> margin: 0 auto;&nbsp;
>
>
> transition: all 0.3s ease-in-out;&nbsp;
>
>
> width: 0;\}

&nbsp;

&nbsp;

Add in your hover styling:&nbsp;

&nbsp;

> .button-style9:hover:after, .button-style9:hover:before \{&nbsp;
>
>
> border: 1px solid blue;&nbsp;
>
>
> width: 70%;&nbsp;
>
>
> transition: width 0.5s ease-in-out;
>
>
> \}

&nbsp;

> .button-style9:hover:before \{&nbsp; width: 70%;\}

&nbsp;

&nbsp;

&nbsp;

&nbsp;