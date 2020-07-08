---
layout: blog
title: Easy CSS Tricks Every Web Developer Needs to Know
featured_image: /uploads/here-is-an-element-with-lots-of-padding-green.gif
date: 2020-06-24 00:04:00
---

Years into my own web design/development journey, I have to admit, I am always learning new css tricks. It seems like every day I stumble onto something new and exciting to add to the never-ending list of incredible online features.&nbsp;

&nbsp;

If you're new to the game, CSS, cascading stylesheets, is what controls the visual and stylistic design of your website. Even if you're using a drag-and-drop web editor like Squarespace or Wix, you'll still need to know some basic CSS in order to make your website completely your own.&nbsp;

&nbsp;

\*in Squarespace you can head to the design settings and click on 'Custom CSS' to access the CSS stylesheet for your website. This is were you can customize those pesky template designs that you don't like\!

&nbsp;

First things first, once you've set up your CSS stylesheet in your coding program (or you've opened up the Custom CSS panel), this is how you'll be writing your CSS code:&nbsp;

&nbsp;

> .class-name\{
>
>
> property: value;
>
>
> \}

&nbsp;

You'll use a "." followed by a class to target the specific piece of code in your HTML (if you want to target a whole element, skip the "." and target the element itself).&nbsp;

&nbsp;

Next, you'll state a command--"property"--and how you want your code to present this property--"value".&nbsp;

&nbsp;

For example if I wanted the title text (h1) in my header to have a font of 25px and be blue, I would write it as such

&nbsp;

> .header h1\{
>
>
> font-size: 25px;
>
>
> color: blue;
>
>
> \}

&nbsp;

I chose my class "header", further specified that I wanted the title text to be targeted, and then added in commands.&nbsp;

&nbsp;

So now that we've covered the basics, here are my top 7 CSS styling tricks that every developer should know.&nbsp;

&nbsp;

### 1\. How to Change Font vs. Background Colors&nbsp;

&nbsp;

This one seems straightforward, but I still find myself mixing up the CSS target command to change a background-color vs. font color.&nbsp;

&nbsp;

To change the font color you want to change, select the text and then apply a color property.&nbsp;

&nbsp;

For example, to change the color of all your titles (h1) to color blue you would:

&nbsp;

> h1\{
>
>
> color: blue;
>
>
> \}

&nbsp;

You can use any color values, whether it's a hex code or rgb code:

&nbsp;

> h1\{
>
>
> color: \#c3e0d9;
>
>
> \}

&nbsp;

Now, this is not to be confused with the background color of your element, which uses the property "background-color".&nbsp;

&nbsp;

Using this property you can target anything from small elements like the box holding your title to entire pages.

&nbsp;

For example, to change the background of your page you would write it as such:&nbsp;

&nbsp;

> body\{
>
>
> background-color: \#c3e0d9;
>
>
> \}

&nbsp;

&nbsp;

2\. Get Rid of Pesky Default Styling on Links

&nbsp;

I know I'm not the only one annoyed by the underline and blue coloring on all links. But never fear, you can easily change that with just a couple lines of code\!

&nbsp;

Target you all the links in your code (a), remove the underline using "text-decoration", and add a font color:&nbsp;

&nbsp;

> a\{
>
>
> text-decoration: none;
>
>
> color: black;
>
>
> \}

&nbsp;

&nbsp;

3\. Adding in New Fonts

&nbsp;

There are two ways to add in a new font: the insanely straightforward way and a tricker but more flexible way.&nbsp;

&nbsp;

#### <u>The Straightforward Way:&nbsp;</u>

&nbsp;

While there are a handful of default font styles you can use in your web project, but they're probably not what you're looking for. Instead, you can use custom fonts with providers like [Google Fonts](https://fonts.google.com/) or [Adobe Fonts](https://fonts.adobe.com/).&nbsp;

&nbsp;

Once you've selected your font, your font provider will [offer an embed link for you to add into the &lt;head&gt; of your code](https://designshack.net/articles/css/a-beginners-guide-to-using-google-web-fonts/).&nbsp;

&nbsp;

***\-Pro-tip:*** I always add notes in code to tell me where each embed code goes and which piece of code belongs to what. To do that in Atom, click "command" + "/" and then write in your note ("Google Fonts" or "Adobe Fonts").&nbsp;

&nbsp;

Once you've imported the font, use the CSS rule provided in your stylesheet. It will look something like this:&nbsp;

&nbsp;

> h1\{
>
>
> font-family: 'Merriweather', sans-serif;
>
>
> \}

&nbsp;

&nbsp;

#### <u>The Harder Way</u>

&nbsp;

Sometimes you'll have a font in mind that you can't find with an online provider. When thats the case, you'll want to use @font-face.&nbsp;

&nbsp;

Once you've downloaded you font files (here we're using .otf files), create a folder titled "fonts".&nbsp;

&nbsp;

Head to your CSS stylesheet and then add in the following code:

&nbsp;

> @font-face\{<br>&nbsp; src:url("/fonts/BOSQUE.otf");<br>&nbsp; font-family:bosque;<br>\}

&nbsp;

Make sure you replace "bosque" with whichever font you've uploaded into your files.&nbsp;

&nbsp;

Finally, we'll use the same command as we did in the straightforward method to change specific kinds of text:&nbsp;

&nbsp;

> h1\{<br>&nbsp; font-family:bosque;<br>\}

&nbsp;

&nbsp;

### 4\. Centering Text

&nbsp;

Traditionally, there are two ways to center your text. You could either target all the content in a particular element/page or you can target specific elements. Whichever you choose, you'll then use the "text-align" command to center your text.&nbsp;

&nbsp;

<u><strong>All Content:&nbsp;</strong></u>

&nbsp;

> div\{
>
>
> text-align: center;
>
>
> \}

&nbsp;

<u><strong>Some Content</strong></u>

&nbsp;

> h1\{
>
>
> text-align: center;
>
>
> \}

&nbsp;

OR

&nbsp;

> .header h1\{
>
>
> text-align: center;
>
>
> \}

&nbsp;

HOWEVER, I like to create a helper class to make this process even easier. A helper class is a single targeted class you've written into your CSS that you can add to the class of any element in your HTML code so you don't have to write unique CSS commands for each element you want centered.&nbsp;&nbsp;

&nbsp;

For example, if I have a div I'm using for my services with a paragraph of text I want centered, this is how I would write it:&nbsp;

&nbsp;

<u><strong>HTML:&nbsp;</strong></u>

&nbsp;

> &lt;div class="services centered"&gt;
>
>
> &lt;p&gt; Here is where my paragraph would go...&lt;/p&gt;
>
>
> &lt;/div&gt;

&nbsp;

<u><strong>CSS:&nbsp;</strong></u>

&nbsp;

> .centered\{
>
>
> text-align: centered;
>
>
> \}

&nbsp;

&nbsp;

### 5\. Adding a Border

&nbsp;

The great thing about learning this particular piece of CSS styling is how many ways you can use it.&nbsp;

&nbsp;

Learning to add a border means you'll also know how to add a side border or even an underline to any element.&nbsp;

&nbsp;

To add a border, you just need to specify the thickness, the line style, and the color:&nbsp;

&nbsp;

> div \{
>
>
> border: 2px solid black;
>
>
> \}

&nbsp;

Pro-Tip: you can also use RGB and hex codes for color here too\!

&nbsp;

Now, if you only want a border on the bottom you would specify your code like this:&nbsp;

&nbsp;

div\{

boder-bottom: 2px solid black;

\}

&nbsp;

For a top border, use "border-top". For the right or left, you would write: "border-left" or "border-right".

&nbsp;

Easy as pie.&nbsp;

&nbsp;

&nbsp;

### 6\. Add a background Image to your Element

&nbsp;

To add a background image to any element in your code, you will use the "background-image" property:&nbsp;

&nbsp;

> div\{
>
>
> background-image: url("/images/catpic.jpg");
>
>
> \}

&nbsp;

\-Pro-tip: want your image to be centered and non-repeating? Add:&nbsp;

&nbsp;

> div\{
>
>
> background-image: url("/images/catpic.jpg");
>
>
> background-position: center;
>
>
> background-size: cover;
>
>
> \}

&nbsp;

&nbsp;

### 7\. Add a Hover Effect to Your Links

&nbsp;

Adding a hover effect lets your audience know when certain links or buttons (or even images) are clickable. And it's super easy to do.&nbsp;

&nbsp;

In your CSS, add ":hover" to your "a" selector. This tells your browser to add this style ONLY when a mouse hovers over your link. Your link will otherwise look the same.&nbsp;

&nbsp;

> a:hover\{
>
>
> color:\#c3e0d9;
>
>
> \}

&nbsp;

Happy coding\!

X

Tash

&nbsp;

[![](/uploads/screen-shot-2020-07-08-at-11-44-49-am.png){: width="350" height="528"}](https://ar.pinterest.com/natasha_joann/){: target="_blank"}