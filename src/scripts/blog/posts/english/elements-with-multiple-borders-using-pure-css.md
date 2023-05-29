title: Elements with multiple borders using pure CSS
date: 2023-05-28
description: Although very powerful, even CSS has its limitations. One of the moments in which you perfectly realize this is when you need to set multiple borders for a single element. With some creativity, however, it’s quite possible to code the style you wish.
keywords: multiple borders, css, elements, outline, box-shadow

---

<style>
.example-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
}
.example {
  flex-grow: 1;
  height: 100px;
  max-width: 300px;
  box-sizing: border-box;
}
</style>

Even though CSS is extremely powerful, some visual results may be impossible to achieve by using the language in its usual way, which demands a certain degree of creativity from developers at the moment they are writing their stylesheets. Setting multiple borders to an element is a perfect example of those cases.

How good it’d be if we could set multiple borders needing nothing more than the attribute *border*. Perhaps in a few years, we’ll be allowed to write something like:
``` css
div {
  border:
    3px solid green,
    3px solid yellow,
    3px solid blue;
}
```

Meanwhile, we can take advantage of some alternatives as follows:

## Outline

If you need no more than two borders, the attribute *outline* will be securely the fastest and easier solution to go with.

``` css
.example-1 {
  border: 5px solid #f48554;
  outline: 5px solid #fdbf59;
}
```
<style>
.example-1 {
  border: 5px solid #f48554;
  outline: 5px solid #fdbf59;
}
</style>
<div class="example-wrapper">
  <div class="example example-1"></div>
</div>

## Pseudo Selectors

If you need no more than three borders, you have the pseudo elements *:before* and *:after* at your disposal. They will make the second and third borders, or the third and fourth, in case you combine this solution with the *outline* strategy.

``` css
.example-2 {
  position: relative;
  border: 5px solid #fdbf59;
}
.example-2:before {
  content: ' ';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border: 5px solid #f48554;
}
.example-2:after {
  content: ' ';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border: 5px solid #dc424e;
}
```
<style>
.example-2 {
  position: relative;
  border: 5px solid #fdbf59;
}
.example-2:before {
  content: ' ';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border: 5px solid #f48554;
}
.example-2:after {
  content: ' ';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border: 5px solid #dc424e;
}
</style>
<div class="example-wrapper">
  <div class="example example-2"></div>
</div>

## Box Shadow

However, if you need more than three borders, the least complex way to build them is by using the attribute *box-shadow*. It allows you to set several shadows and, although the final result will have nothing to do with shadows, adjust each of their values to make them mimic borders.

``` css
.example-3 {
  margin: 25px;
  box-shadow: 
    0 0 0 5px #2f030c,
    0 0 0 10px #5a071a,
    0 0 0 15px #dc424e,
    0 0 0 20px #f48554,
    0 0 0 25px #fdbf59;
}
```
<style>
.example-3 {
  margin: 25px;
  box-shadow: 
    0 0 0 5px #2f030c,
    0 0 0 10px #5a071a,
    0 0 0 15px #dc424e,
    0 0 0 20px #f48554,
    0 0 0 25px #fdbf59;
}
</style>
<div class="example-wrapper">
  <div class="example example-3"></div>
</div>
