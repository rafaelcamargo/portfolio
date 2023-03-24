title: Component maturity model
date: 2019-11-30
description: Think you are a programmer, a front-end programmer. You collaborate with the development of a web product. Your workmates are back-end programmers, designers, and product owners. So, on an ordinary day, in a casual meeting, in a simple presentation or in a regular chat among team members, you make use of a word, a much simple word: Component.
keywords: component, maturity, front-end

---

Think you are a programmer, a front-end programmer. You collaborate with the development of a web product. Your workmates are back-end programmers, designers, and product owners. So, on an ordinary day, in a casual meeting, in a simple presentation or in a regular chat among team members, you make use of a word, a much simple word: *Component*.

You could be sharing something you learned on your latest reading, making a suggestion about the way of developing user interfaces, or just making a joke. Regardless of what you were doing, at the moment you finished to pronounce the last syllable of that much simple word called *component*, something complex is gonna start to happen.

The designers will invoke the powers of the Design System god, blessed with the glory of the Atomic Design and baptized with each variable contained in his set of Design Tokens. The Product Owner, bewitched by the reusability magic, and suffocated by the Gantt chart that demands him to ship dozens of new feature, will ask you a thousand times: *So does it allow us to deliver more features in less time?* Finally, the back-end programmer will say nothing more than: *I already used Bootstrap once. I hate CSS*.

Even though it has just three syllables, the word *component* causes zillions of different interpretations and expectations. So easy to say it, so hard to define it.

At this moment, you might be convinced that I am gonna introduce a definition for the word *component* that will cause you a *mind quake*. A definition that can incinerate any ambiguity.

No man, I’m sorry. Unfortunately, I haven't found that one-and-only definition, but I’ll try to help you offering three! They represent what I called Component Maturity Model.

## Level Zero: Chaos

Welcome to the chaos. At this level, anyone of those zillions of different interpretations not even exist. Everything is reduced to blood, sweat and tears. Nothing can be reused, and any change is too expensive.

### Anatomy

- No predefined HTML structure can be replicated.
- No predefined CSS classes can be used together with those predefined HTML structures.
- Markup, styles, and logic are not encapsulated.

### Side Effects

- **Unnecessary CSS**. With no predefined CSS classes, already existing styles are redundantly written as new classes. Within a short time, you end up with different classes in different stylesheets doing the exact same thing.
- **Unnecessary scripts**. Since the existing logic is not encapsulated, the same behavior is replicated all around the system.
- **Zero reuse**. With no predefined HTML structures, those different CSS Classes multiply themselves at the same speed in which new random HTML structures are created.
- **Too expensive changes**. With the same responsibility replicated in several other parts of the application, even the smallest change could become the worst nightmare since you do not have any idea of how many parts of the system need to be changed.

### Example

``` html
<div class="finance-btn-attach-file glyphicons paperclip">
  <i></i>Attach documents
</div>
```

A generic button for uploading files got coupled to a stylesheet already connected to a business domain (*finance*). Markup and logic are not encapsulated and will be replicated with other classes and markup on every part of the system that needs a file upload button.

## Level One: CSS Components

The Stage in which predefined HTML structures are available and CSS classes can be reused.

### Anatomy

- Predefined HTML structures.
- Predefined CSS classes.
- Markup, styles, and logic still not encapsulated.

### Side Effects

- **Less CSS**. With predefined HTML structures, CSS classes can be reused from now on. New CSS classes are drastically avoided, and much less CSS needs to be written.
- **Unnecessary markup**. Although you already have predefined HTML structures, they are not encapsulated. That said, unnecessary markup still continues to be replicated along with the system.
- **Unnecessary scripts**. Same as markup, the lack of encapsulation still makes the behavior to be replicated in different parts of the system.
- **Expensive changes**. At least on CSS, changes become less expensive. However, any change related to the markup or the behavior still costs a lot.

### Example

``` html
<button class="btn btn-primary">
  <i class="glyphicons glyphicons-download-alt"></i>Download
</button>
```

This is a predefined HTML structure for a button styled as primary and containing an icon at the left of its text. Every part of the system that requires a button like this can achieve the same result replicating that HTML structure with those CSS classes.

## Level Two: Custom Elements

Welcome, productivity! This is the stage in which everything, absolutely everything, is encapsulated in its own component.

### Anatomy

- Predefined HTML structures.
- Predefined CSS classes.
- Markup, style, and logic are encapsulated.

### Side Effects

- Each component becomes the single authority about one only responsibility within the system.
- Everything becomes reusable.
- Changes are cheap.

### Example

``` html
<my-button data-theme="primary" data-icon-name="paperclip">
  Attach Documents
</my-button>
```

The custom element above, *my-button*, is the single part of the system where anything related to all application buttons is handled.

As you can see, that one-and-only definition, I really cannot offer at this time. But I hope these three levels of maturity may help you to explain to your workmates what kind of components are you talking about, what maturity level you expected to have and which level you would like to reach.
