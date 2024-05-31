title: HTML elements you might not know
date: 2023-04-29
description: Explore the power of native HTML and try out several elements that can increase your productivity and reduce the amount of code you need to write, thanks to the versatility of HTML and its harmonious integration with the operating systems of any device.
keywords: elements, html, details, dialog, math, meter, progress

---

<style>
  details {
    margin-top: 30px;
  }
  details + p {
    margin-top: 100px;
  }
  dialog p {
    margin-bottom: 20px;
  }
  label {
    display: block;
    font-size: 0.666666666666667em;
    font-weight: bold;
    text-transform: uppercase;
  }
  pre {
    margin-bottom: 0;
    border-radius: 6px 6px 0 0;
  }
  pre + p {
    padding: 5px 16px;
    background-color: #E5EBF1;
    font-size: 0.666666666666667em;
    border-radius: 0 0 6px 6px;
  }
  thead th {
    position: relative;
  }
  .browser-support-table {
    margin-top: 15px;
  }
  .browser-support-table caption {
    caption-side: bottom;
    font-size: .888888888888889em;
    margin-top: 5px;
  }
  .example {
    margin: 40px 0 55px;
  }
  .tn-article h2 ~ h2 {
    margin-top: 125px;
  }
</style>

Since I created a component library called [Taslonic](https://components.taslonic.com/#!/components/react/input), I have been discovering how native HTML is more powerful than I imagined. How versatile it is. How harmonious is its integration to the operating system of any device. In brief words, how much this technology, often underestimated, can leverage our productivity by saving us from writing hundreds of lines of code.

See below some native HTML elements which you might not have been introduced to yet.

## Details

It disclosures additional information or form controls.

<div class="example">
  <details>
    <summary>Transaction details</summary>
    <dl>
      <dt>Descriptions:</dt>
      <dd>
        Lifetime license | 
        <a href="https://typenik.compilorama.com/" rel="noreferrer noopener" target="_blank">
          Typenik
        </a>
      </dd>
      <dt>Date:</dt> <dd>Apr 29, 2023</dd>
      <dt>Price:</dt> <dd>$9</dd>
    </dl>
  </details>
</div>

``` html
<details>
  <summary>Transaction details</summary>
  <dl>
    <dt>Descriptions:</dt>
    <dd>
      Lifetime license | 
      <a href="https://typenik.compilorama.com/" rel="noreferrer noopener" target="_blank">
        Typenik
      </a>
    </dd>
    <dt>Date:</dt> <dd>Apr 29, 2023</dd>
    <dt>Price:</dt> <dd>$9</dd>
  </dl>
</details>
```

[Edit this code](https://demo.pitsby.com/#!/components/vanilla/playground?tab=0&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%252BXG4gIDxkZXRhaWxzPlxuICAgIDxzdW1tYXJ5PlRyYW5zYWN0aW9uIGRldGFpbHM8L3N1bW1hcnk%252BXG4gICAgPGRsPlxuICAgICAgPGR0PkRlc2NyaXB0aW9uczo8L2R0PlxuICAgICAgPGRkPlxuICAgICAgICBMaWZldGltZSBsaWNlbnNlIHwgXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R5cGVuaWsuY29tL1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICBUeXBlbmlrXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGQ%252BXG4gICAgICA8ZHQ%252BRGF0ZTo8L2R0PiA8ZGQ%252BQXByIDI5LCAyMDIzPC9kZD5cbiAgICAgIDxkdD5QcmljZTo8L2R0PiA8ZGQ%252BJDk8L2RkPlxuICAgIDwvZGw%252BXG4gIDwvZGV0YWlscz5cbjwvZGl2PiIsImNvbnRyb2xsZXIiOiJmdW5jdGlvbiBjb250cm9sbGVyKGVsZW1lbnQpIHt9XG5cbnJldHVybiBjb250cm9sbGVyOyIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9). Docs for [Details](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element).

<details>
  <summary>Browser Support</summary>
  <table class="browser-support-table">
    <caption>
      Source: 
      <a
        href="https://caniuse.com/?search=details" 
        rel="noreferrer noopener"
        target="_blank"
      >
        caniuse.com
      </a>
    </caption>
    <thead>
      <th>Browser</th>
      <th>Since</th>
      <th>Version</th>
    </thead>
    <tbody>
      <tr>
        <td>Chrome</td>
        <td>Jun, 6 2011</td>
        <td>69</td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>Sep, 19 2016</td>
        <td>110</td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>Jul, 24 2012</td>
        <td>12.1</td>
      </tr>
      <tr>
        <td>Edge</td>
        <td>Jan, 14 2020</td>
        <td>79</td>
      </tr>
    </tbody>
  </table>
</details>

## Dialog

It is a temporary component of an application which users interact with to carry out a specific task or obtain information. When the user is finished, the dialog box can either be automatically closed by the application or manually closed by the user.

<div class="example">
  <button onclick="nativeDialog.showModal()">
    Open Dialog
  </button>
  <dialog id="nativeDialog">
    <p>Native HTML Dialog</p>
    <form method="dialog">
      <button type="submit">Dismiss</button>
    </form>
  </dialog>
</div>

``` html
<button onclick="nativeDialog.showModal()">
  Open Dialog
</button>
<dialog id="nativeDialog">
  <p>Native HTML Dialog</p>
  <form method="dialog">
    <button type="submit">Dismiss</button>
  </form>
</dialog>
```

[Edit this code](https://demo.pitsby.com/#!/components/vanilla/playground?tab=0&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%252BXG4gIDxidXR0b24gb25jbGljaz1cIm5hdGl2ZURpYWxvZy5zaG93TW9kYWwoKVwiPlxuICAgIE9wZW4gRGlhbG9nXG4gIDwvYnV0dG9uPlxuICA8ZGlhbG9nIGlkPVwibmF0aXZlRGlhbG9nXCI%252BXG4gICAgPHA%252BTmF0aXZlIEhUTUwgRGlhbG9nPC9wPlxuICAgIDxmb3JtIG1ldGhvZD1cImRpYWxvZ1wiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI%252BRGlzbWlzczwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaWFsb2c%252BXG48L2Rpdj4iLCJjb250cm9sbGVyIjoiZnVuY3Rpb24gY29udHJvbGxlcihlbGVtZW50KSB7fVxuXG5yZXR1cm4gY29udHJvbGxlcjsiLCJzdHlsZXMiOiIucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciB7IHBhZGRpbmc6IDMwcHg7IH1cbi5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIGRpYWxvZyBwIHsgbWFyZ2luLWJvdHRvbTogMjBweDsgfSJ9). Docs for [Dialog](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element).

<details>
  <summary>Browser Support</summary>
  <table class="browser-support-table">
    <caption>
      Source: 
      <a
        href="https://caniuse.com/?search=dialog" 
        rel="noreferrer noopener"
        target="_blank"
      >
        caniuse.com
      </a>
    </caption>
    <thead>
      <th>Browser</th>
      <th>Since</th>
      <th>Version</th>
    </thead>
    <tbody>
      <tr>
        <td>Chrome</td>
        <td>Aug, 25 2014</td>
        <td>37</td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>Mar, 7 2022</td>
        <td>98</td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>Mar, 13 2022</td>
        <td>15.4</td>
      </tr>
      <tr>
        <td>Edge</td>
        <td>Jan, 14 2020</td>
        <td>79</td>
      </tr>
    </tbody>
  </table>
</details>

## Math

It is used to express mathematical notations and is filled with a set of especific elements specified by the MathML *(Mathematical Markup Language)*.

<div class="example">
  <math>
    <mi>x</mi>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mo>-</mo>
        <mi>b</mi>
        <mo>±</mo>
        <msqrt>
          <msup>
            <mrow>
              <mi>b</mi>
            </mrow>
            <mn>2</mn>
          </msup>
          <mo>-</mo>
          <mi>4</mi>
          <mi>a</mi>
          <mi>c</mi>
        </msqrt>
      </mrow>
      <mrow>
        <mi>2</mi>
        <mi>a</mi>
      </mrow>
    </mfrac>
  </math>
</div>

``` html
<math>
  <mi>x</mi>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <mo>-</mo>
      <mi>b</mi>
      <mo>±</mo>
      <msqrt>
        <msup>
          <mrow>
            <mi>b</mi>
          </mrow>
          <mn>2</mn>
        </msup>
        <mo>-</mo>
        <mi>4</mi>
        <mi>a</mi>
        <mi>c</mi>
      </msqrt>
    </mrow>
    <mrow>
      <mi>2</mi>
      <mi>a</mi>
    </mrow>
  </mfrac>
</math>
```

[Edit this code](https://demo.pitsby.com/#!/components/vanilla/playground?tab=0&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%252BXG4gIDxtYXRoPlxuICAgIDxtaT54PC9taT5cbiAgICA8bW8%252BPTwvbW8%252BXG4gICAgPG1mcmFjPlxuICAgICAgPG1yb3c%252BXG4gICAgICAgIDxtbz4tPC9tbz5cbiAgICAgICAgPG1pPmI8L21pPlxuICAgICAgICA8bW8%252BsTwvbW8%252BXG4gICAgICAgIDxtc3FydD5cbiAgICAgICAgICA8bXN1cD5cbiAgICAgICAgICAgIDxtcm93PlxuICAgICAgICAgICAgICA8bWk%252BYjwvbWk%252BXG4gICAgICAgICAgICA8L21yb3c%252BXG4gICAgICAgICAgICA8bW4%252BMjwvbW4%252BXG4gICAgICAgICAgPC9tc3VwPlxuICAgICAgICAgIDxtbz4tPC9tbz5cbiAgICAgICAgICA8bWk%252BNDwvbWk%252BXG4gICAgICAgICAgPG1pPmE8L21pPlxuICAgICAgICAgIDxtaT5jPC9taT5cbiAgICAgICAgPC9tc3FydD5cbiAgICAgIDwvbXJvdz5cbiAgICAgIDxtcm93PlxuICAgICAgICA8bWk%252BMjwvbWk%252BXG4gICAgICAgIDxtaT5hPC9taT5cbiAgICAgIDwvbXJvdz5cbiAgICA8L21mcmFjPlxuICA8L21hdGg%252BXG48L2Rpdj4iLCJjb250cm9sbGVyIjoiZnVuY3Rpb24gY29udHJvbGxlcihlbGVtZW50KSB7fVxuXG5yZXR1cm4gY29udHJvbGxlcjsiLCJzdHlsZXMiOiIucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciB7IHBhZGRpbmc6IDMwcHg7IH0ifQ%253D%253D). Docs for [Math](https://html.spec.whatwg.org/multipage/embedded-content-other.html#mathml).

<details>
  <summary>Browser Support</summary>
  <table class="browser-support-table">
    <caption>
      Source: 
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/MathML#browser_compatibility" 
        rel="noreferrer noopener"
        target="_blank"
      >
        developer.mozilla.org
      </a>
    </caption>
    <thead>
      <th>Browser</th>
      <th>Since</th>
      <th>Version</th>
    </thead>
    <tbody>
      <tr>
        <td>Chrome</td>
        <td>Jan, 10 2023</td>
        <td>109</td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>Mar, 22 2011</td>
        <td>4</td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>Jul, 20 2011</td>
        <td>5.1</td>
      </tr>
      <tr>
        <td>Edge</td>
        <td>Jan, 12 2023</td>
        <td>109</td>
      </tr>
    </tbody>
  </table>
</details>

## Meter

It represents the current measure within a known range. For example, storage usage, statistical confidence interval, performance, among other cases.

<div class="example">
  <label for="fuel">Fuel level</label>
  <meter
    id="fuel"
    min="0"
    max="100"
    low="10"
    high="80"
    optimum="85"
    value="50"
  >
    at 50/100
  </meter>
</div>

``` html
<label for="fuel">Fuel level</label>
<meter
  id="fuel"
  min="0"
  max="100"
  low="10"
  high="80"
  optimum="85"
  value="50"
>
  at 50/100
</meter>
```

[Edit this code](https://demo.pitsby.com/#!/components/vanilla/playground?tab=0&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%252BXG4gIDxsYWJlbCBmb3I9XCJmdWVsXCI%252BRnVlbCBsZXZlbDwvbGFiZWw%252BXG4gIDxtZXRlclxuICAgIGlkPVwiZnVlbFwiXG4gICAgbWluPVwiMFwiXG4gICAgbWF4PVwiMTAwXCJcbiAgICBsb3c9XCIxMFwiXG4gICAgaGlnaD1cIjgwXCJcbiAgICBvcHRpbXVtPVwiODVcIlxuICAgIHZhbHVlPVwiNTBcIlxuICA%252BXG4gICAgYXQgNTAvMTAwXG4gIDwvbWV0ZXI%252BXG48L2Rpdj4iLCJjb250cm9sbGVyIjoiZnVuY3Rpb24gY29udHJvbGxlcihlbGVtZW50KSB7fVxuXG5yZXR1cm4gY29udHJvbGxlcjsiLCJzdHlsZXMiOiIucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4ucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuNjY2NjY2NjY2NjY2NjY3ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJ9). Docs for [Meter](https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element).

<details>
  <summary>Browser Support</summary>
  <table class="browser-support-table">
    <caption>
      Source: 
      <a
        href="https://caniuse.com/?search=meter" 
        rel="noreferrer noopener"
        target="_blank"
      >
        caniuse.com
      </a>
    </caption>
    <thead>
      <th>Browser</th>
      <th>Since</th>
      <th>Version</th>
    </thead>
    <tbody>
      <tr>
        <td>Chrome</td>
        <td>Dez, 1 2010</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>Aug, 27 2012</td>
        <td>16</td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>Jul, 24 2012</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Edge</td>
        <td>Nov, 11 2015</td>
        <td>13</td>
      </tr>
    </tbody>
  </table>
</details>

## Progress

It represents the completion progress of a task.

<div class="example">
  <label for="reviewedArticles">Reviewed articles</label>
  <progress id="reviewedArticles" min="0" max="100" value="70">70%</progress>
</div>

``` html
<label for="reviewedArticles">
  Reviewed articles
</label>
<progress
  id="reviewedArticles"
  min="0"
  max="100"
  value="70"
>
  70%
</progress>
```

[Edit this code](https://demo.pitsby.com/#!/components/vanilla/playground?tab=0&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%252BXG4gIDxsYWJlbCBmb3I9XCJyZXZpZXdlZEFydGljbGVzXCI%252BXG4gICAgUmV2aWV3ZWQgYXJ0aWNsZXNcbiAgPC9sYWJlbD5cbiAgPHByb2dyZXNzXG4gICAgaWQ9XCJyZXZpZXdlZEFydGljbGVzXCJcbiAgICBtaW49XCIwXCJcbiAgICBtYXg9XCIxMDBcIlxuICAgIHZhbHVlPVwiNzBcIlxuICA%252BXG4gICAgNzAlXG4gIDwvcHJvZ3Jlc3M%252BXG48L2Rpdj4iLCJjb250cm9sbGVyIjoiZnVuY3Rpb24gY29udHJvbGxlcihlbGVtZW50KSB7fVxuXG5yZXR1cm4gY29udHJvbGxlcjsiLCJzdHlsZXMiOiIucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4ucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuNjY2NjY2NjY2NjY2NjY3ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJ9). Docs for [Progress](https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element).

<details>
  <summary>Browser Support</summary>
  <table class="browser-support-table">
    <caption>
      Source: 
      <a
        href="https://caniuse.com/?search=progress" 
        rel="noreferrer noopener"
        target="_blank"
      >
        caniuse.com
      </a>
    </caption>
    <thead>
      <th>Browser</th>
      <th>Since</th>
      <th>Version</th>
    </thead>
    <tbody>
      <tr>
        <td>Chrome</td>
        <td>Dez, 1 2010</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>Aug, 15 2011</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>Jul, 24 2012</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Edge</td>
        <td>Jul, 28 2015</td>
        <td>12</td>
      </tr>
    </tbody>
  </table>
</details>

HTML is an involving technology, evolves rapidly and, above all, it has shown me that may be already available some component I'd start to implement from scratch.
