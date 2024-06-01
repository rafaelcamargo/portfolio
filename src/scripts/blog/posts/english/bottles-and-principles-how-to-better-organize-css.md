title: Bottles and principles. How to better organize CSS.
date: 2020-07-01
description: Something curious about lots of the most popular programming concepts, principles and good practices is that they seem to disappear or, at least, keep distant, when the software we are talking about is a web client, also known as a front-end application.
keywords: component, css, stylesheet, open-closed

---

Something curious about lots of the most popular programming concepts, principles and good practices is that they seem to disappear or, at least, keep distant, when the software we are talking about is a web client, also known as a front-end application.

Very few front-end projects that I have seen in my life had a minimum of logical dignity regarding how they organized code. Most of them were just a bunch of code lines highly interdependent with bad delimited responsibilities. A real mess that didn't get even close from any of the letters S.O.L.I.D.

In the middle of that blurry and mysterious representation of what would be the web client raises something that is likely the principal cause for the despair felt by who needs to maintain and improve that mess. Style sheets. Yes, CSS. I have met programmers that felt real terror for CSS. Among other lovely statements, I have already heard:

*(a) Pure s… (b) Very easy to f… that all (c) CSS is like Lego. If you start it wrong, it gets hard to change the pieces after some later s… has been made (d) F…. confusing.*

Some developers blame the global nature of CSS. Others attack what they judge to be a universe of indecipherable symbols and relations. Even another part of them complains they cannot position a button at the exact place the designer would like in a fashion that mixes begging and despair.

CSS may have a different structure, a different syntax, may not be considered a programming language. However, I assure you it accepts great programming principles, concepts, and best practices like any real programming language.

## Before thinking about technology, think about principles.

You might try to tame styles with weird CSS classes that mix double dashes with underlines or allow hidden logics that sometimes treat CSS classes as layout, sometimes as page, and sometimes as a theme, or even commit the sacrilege to put styles in JavaScript. Instead of trying those things, just remember one of the principles listed on the SOLID acronym. The "O" letter represents the *Open-Closed* principle.

> Software entities should be open for extension, but closed for modification; that is, such entity can allow its behavior to be extended without modifying its source code.
>
> [Wikipedia](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)

That is the concept. Organize your objects in a way that they can have their behavior extended with no need to modify them.

## Defining objects

One easy way to understand it in practice is by imagining a bottle. Yes, a bottle. At this moment, you might imagine a soda bottle, beer bottle, wine bottle, or even an empty bottle. However, notice that I referred just to the bottle object, not its contents. You can fill a bottle with lots of different liquids. Soda, beer, wine, and there's no need to modify it. It's a great example of an object that respects the open-closed principle.

Now, you might be asking yourself: How the heck a bottle is going to protect me against the hell my style sheets may become? Below, I am going to repeat the example above, but in the form of code. CSS classes, more specifically.

``` html
<div class="bottle">
  <div class="bottle-content"></div>
</div>
```

What we can see here is an empty bottle. Once the bottle is an object, it has its style sheet: *bottle.css*.

## Specializing objects

After having created a bottle, your project demands a wine bottle. Now what? How to organize the code? Should I create a class named as *bottle-content-wine* and add it to the `<div>` that already contains the *bottle-content* class? Should I create a theme named as *bottle-wine* to the bottle and add it to the `<div>` that already contains the class *bottle*? Notice, every one of the above suggestions would be violating the *Open-Closed* principle because all of them would be modifying the bottle code. The best way to handle the wine bottle is by creating another object in your system that makes use of the base bottle without modifying it. Take a look:

``` html
<div class="wine-bottle">
  <div class="bottle">
    <div class="bottle-content"></div>
  </div>
</div>
```

From now on, beyond the style sheet *bottle.css*, you will have another one named as *wine-bottle.css*. The last one may extend every element of the base bottle the way it needs. Example:

``` css
.wine-bottle .bottle-content {
  background-color: red;
}
```

Done!

To make things easier to understand, ignore for now the several different colors wines could be. The most important thing here is that the bottle didn't get modified. Doing so, wherever I put a bottle in my system, it will always look the same. This same warranty should exist for the wine bottle and for any other object you create.

Also, notice that following the *Open-Closed* principle, you automatically dose your selector specificity at the exact weight for your necessity. That is an essential requirement to keep the bottle and the wine-bottle open for extension. If you *overspecify* your selectors, you may end up blocking the extension and, that way, violating the principle.

## Variations of the same object

So you may be thinking: what if a new requirement demands a small or large bottle? Should I create new objects named *small-bottle* and *large-bottle*?

No. In this case, we would be handling aspects of the bottle itself, not aspects of the context that is using the bottle. One approach to face this case would be:

``` html
<div class="bottle bottle-small">
  <div class="bottle-content"></div>
</div>
```

The CSS class *bottle-small* modifies the default bottle making it small. That said, *bottle-small* should be on the *bottle.css* style sheet. In that style sheet, every aspect that refers to the bottle should be placed, including its variations. That style sheet should not contain anything that is not directly related to the bottle. The bottle should not know any aspect other than its own. If we create a class named *bottle-wine* and write it inside *bottle.css*, we would be bringing the context into the bottle. Since you can fill a bottle with infinite different contents, we would be taking the risk of inflating the bottle object with a pile of aspects that should not be there. After some time, this object will likely become very complex and hard to maintain.

## Class name, namespace and style sheet

Intending to avoid a possible misunderstanding between CSS classes that represent an object and CSS classes that represent modifiers, three simple rules related to the markup anatomy should be respected:

``` html
<div class="application">
  <div class="application-topbar">
    <div class="application-actions-container">
      <div class="application-action application-action-close"></div>
      <div class="application-action application-action-minimize"></div>
      <div class="application-action application-action-maximize"></div>
    </div>
    <div class="application-title-container"></div>
  </div>
  <div class="application-content-container"></div>
</div>
```

1.  The object root HTML element must contain the CSS class that represents the name of that object, *application* in the example above. That CSS class works like a namespace and must prefix every other CSS class that belongs to that object.
2.  The CSS class that represents the name of the object is also the name of the stylesheet where all the object CSS classes will be.
3.  The CSS classes that perform the modifier role does not stand alone. The CSS class *application-action-close* has no effect. It only modifies something if used together *application-action*.

## In practice

Are you curious to see this concept applied in a real project? Check out one of my open-source projects called [Glorious Demo](https://gdemo.compilorama.com). As commented in this story, each one of those [style sheets](https://github.com/glorious-codes/glorious-demo/tree/master/src/styles) represents one single object and always keep themselves open for extension.
