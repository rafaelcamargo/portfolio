import React, { Component } from 'react';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';
import { StorySpacer } from '@scripts/stories/components/story-spacer/story-spacer';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class AngularJSToReactEN extends Component {
  render() {
    return (
      <StoryViewport>
        <p>
          For those who have programmed a lot using AngularJS, the first
          impression when coming across a React component may not be the best.
          Seeing JavaScript and HTML sharing the same space is likely the most
          significant impact. But do not get carried away by appearances. React
          is far less strange than the first impression might suggest.
        </p>
        <p>
          Before we dig deeper into the differences between AngularJS and React,
          we need to have an overview of the structure that supports React.
          The JavaScript code that we will see in a React component is not
          supported natively by the language. Another still very incipient
          feature is the use of modules. Two development tools come into play
          to make those features available: <em>Webpack</em> and <em>Babel</em>.
        </p>
        <h2>
          Webpack
        </h2>
        <p>
          Webpack allows us to organize the code into <em>modules</em>. Every
          variable or function is private in a module and has to be explicitly
          exported to become public. Public content is visible and can be
          imported by the other modules. That said, popular strategies like
          IIFE <em>(Immediately Invoked Function Expression)</em> are no longer
          necessary to avoid polluting the global scope with undesired
          variables or functions.
        </p>
        <p>
          On the Webpack configuration file, we set a module as an <em>
          entry-point</em>. Then Webpack will resolve the modules imported by
          the entry-point, as well as all the other modules imported by
          subsequent modules. Through a long <em>module-by-module</em> scan,
          Webpack creates a dependency tree and connects them into a single
          file called <em>bundle</em>.
        </p>
        <img src="assets/images/story-angularjs-to-react-webpack.svg" title="webpack" />
        <p>
          As we can see in the image, all the necessary modules to resolve the
          entry-point were included in the bundle. The bundle contains <em>index.js
          (entry-point)</em>, <em>a.js</em>, <em>b.js</em> e <em>c.js</em>. Since
          no module imported <em>d.js</em> during the entry-point resolution,
          it was left out. This is nice because it means that modules that are
          not effectively used by the application are not bundled, avoiding
          unnecessary weight.
        </p>
        <h2>
          Babel
        </h2>
        <p>
          Compared to Webpack, Babel is much simpler to understand. It is a
          code transpiler and allows us to use JavaScript language features
          that are not fully supported by browsers yet. In the case of React,
          it goes a little further and, through a specific preset, makes it
          possible to use HTML within JavaScript code. This syntax is popularly
          called <em>JSX</em>.
        </p>
        <img src="assets/images/story-angularjs-to-react-babel.svg" title="Babel" />
        <p>
          In this <ExternalLink href="https://github.com/rafaelcamargo/minimal-react">
          repository</ExternalLink>, you can check the <em>.babelrc</em> and <em>
          webpack.config.js</em> configuration files containing only what is
          minimally required to bundle and run a React application.
        </p>
        <h2>
          Template Engine
        </h2>
        <p>
          The way to handle HTML is where you will see most of the differences
          between AngularJS and React. Bindings, Loops and Conditional Rendering
          work radically different in React.
        </p>
        <h3>
          Bindings
        </h3>
        <p>
          AngularJS has a philosophy called <em>Two-Way Data Binding</em>. Through
          the <em>ng-model</em> directive, AngularJS binds the controller variable to
          the template and vice versa. When the variable changes on the controller,
          the template is automatically updated. And when the user changes the
          variable on the template, the controller gets updated as well. Also,
          a child component can change the value of a property passed by its
          parent. That is, not only parents change a property value given to
          its children, but also children change the property values received
          by their parents.
        </p>
        <p>
          React treats binding differently. It is <em>One-Way Data Binding</em>.
          The value of a variable present on the controller reflects
          automatically on the template, but when the variable changes on the
          template, its value is not automatically updated on the controller.
          You need to handle this change manually. Component property values
          can only be updated upside down too. That is, from the parent to the
          child, not otherwise.
        </p>
        <p>
          Playground: <ExternalLink href="https://demo.pitsby.com/#!/components/angular/playground?tab=2&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%2BXG4gIDxsYWJlbD5cbiAgICBOYW1lXG4gIDwvbGFiZWw%2BXG4gIDxkaXY%2BXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCIkY3RybC5uYW1lXCIgLz5cbiAgPC9kaXY%2BXG4gIDxkaXY%2BXG4gICAgTmFtZToge3sgJGN0cmwubmFtZSB9fVxuICA8L2Rpdj5cbjwvZGl2PiIsImNvbnRyb2xsZXIiOiJmdW5jdGlvbiBjb250cm9sbGVyKCkge1xuICBjb25zdCAkY3RybCA9IHRoaXM7XG5cbiAgJGN0cmwubmFtZSA9ICcnO1xufVxuXG5yZXR1cm4gY29udHJvbGxlcjsiLCJzdHlsZXMiOiIucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciB7IHBhZGRpbmc6IDMwcHg7IH0ifQ%3D%3D">Two-Way Data Binding
          </ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiLy8gVGhpcyBmdW5jdGlvbiByZXByZXNlbnRzIGEgV2VicGFjayBNb2R1bGVcbmZ1bmN0aW9uKCkge1xuICBjb25zdCB7IHVzZVN0YXRlIH0gPSBSZWFjdDtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIHJlcHJlc2VudHMgYSBGdW5jdGlvbmFsIFJlYWN0IENvbXBvbmVudFxuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgpO1xuICAgIFxuICAgIGNvbnN0IG9uTmFtZUNoYW5nZSA9IGV2dCA9PiB7XG4gICAgICBzZXROYW1lKGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWw%2BXG4gICAgICAgICAgTmFtZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsgb25OYW1lQ2hhbmdlIH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBOYW1lOiB7IG5hbWUgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iLCJzdHlsZXMiOiIucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciB7IHBhZGRpbmc6IDMwcHg7IH0ifQ%3D%3D">One-Way Data Binding</ExternalLink>.
        </p>
        <h3>
          Conditional Rendering
        </h3>
        <p>
          It was also using another directive that parts of a template could
          be conditionally rendered in AngularJS. All you needed to do was
          passing a Boolean variable to the <em>ng-if</em> directive to decide
          if the element and its children would be shown or not.
        </p>
        <p>
          React uses the resources of the JavaScript language to achieve the
          same result. <em>If statements</em>, ternary and logical operators.
        </p>
        <p>
          Playground: <ExternalLink href="https://demo.pitsby.com/#!/components/angular/playground?tab=2&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%2BXG4gIDxsYWJlbD5cbiAgICBOYW1lXG4gIDwvbGFiZWw%2BXG4gIDxkaXY%2BXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCIkY3RybC52aXNpdG9yTmFtZVwiIG5nLWJsdXI9XCIkY3RybC5vbk5hbWVJbnB1dEJsdXIoJGV2ZW50KVwiIC8%2BXG4gIDwvZGl2PlxuICA8ZGl2IG5nLWlmPVwiJGN0cmwuc2hvdWxkU2hvd0dyZWV0aW5nXCI%2BXG4gICAgSGVsbG8ge3sgJGN0cmwudmlzaXRvck5hbWUgfX0hXG4gIDwvZGl2PlxuPC9kaXY%2BIiwiY29udHJvbGxlciI6ImZ1bmN0aW9uIGNvbnRyb2xsZXIoKSB7XG4gIGNvbnN0ICRjdHJsID0gdGhpcztcblxuICAkY3RybC52aXNpdG9yTmFtZSA9ICcnO1xuICBcbiAgJGN0cmwub25OYW1lSW5wdXRCbHVyID0gZXZ0ID0%2BIHtcbiAgICBzZXRHcmVldGluZ1Zpc2liaWxpdHkoISFldnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH07XG4gIFxuICBmdW5jdGlvbiBzZXRHcmVldGluZ1Zpc2liaWxpdHkoc2hvdWxkU2hvd0dyZWV0aW5nKXtcbiAgICBjb25zb2xlLmxvZyhzaG91bGRTaG93R3JlZXRpbmcpXG4gICAgJGN0cmwuc2hvdWxkU2hvd0dyZWV0aW5nID0gc2hvdWxkU2hvd0dyZWV0aW5nO1xuICB9XG59XG5cbnJldHVybiBjb250cm9sbGVyOyIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9">Ng-if
          </ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0O1xuXG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIGNvbnN0IFt2aXNpdG9yTmFtZSwgc2V0VmlzaXRvck5hbWVdID0gdXNlU3RhdGUoKTtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVOYW1lID0gZXZ0ID0%2BIHtcbiAgICAgIHNldFZpc2l0b3JOYW1lKGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGJ1aWxkR3JlZXRpbmcgPSBuYW1lID0%2BIHtcbiAgICAgIGlmKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIDxwPkhlbGxvIHsgbmFtZSB9ITwvcD47XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlncm91bmQtcHJldmlldy1jb250YWluZXJcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIE5hbWVcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkJsdXI9eyBoYW5kbGVOYW1lIH0gLz5cbiAgICAgICAgPC9kaXY%2BXG4gICAgICAgIHsgYnVpbGRHcmVldGluZyh2aXNpdG9yTmFtZSkgfVxuICAgICAgPC9kaXY%2BXG4gICAgKTtcbiAgfVxufSIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9">If Statement</ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0O1xuXG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIGNvbnN0IFt2aXNpdG9yTmFtZSwgc2V0VmlzaXRvck5hbWVdID0gdXNlU3RhdGUoKTtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVOYW1lID0gZXZ0ID0%2BIHtcbiAgICAgIHNldFZpc2l0b3JOYW1lKGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWw%2BXG4gICAgICAgICAgTmFtZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQmx1cj17IGhhbmRsZU5hbWUgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB2aXNpdG9yTmFtZSAmJiA8cD5IZWxsbyB7IHZpc2l0b3JOYW1lIH0hPC9wPiB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Iiwic3R5bGVzIjoiLnBsYXlncm91bmQtcHJldmlldy1jb250YWluZXIgeyBwYWRkaW5nOiAzMHB4OyB9In0%3D">Operador &&</ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0O1xuXG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIGNvbnN0IFt2aXNpdG9yTmFtZSwgc2V0VmlzaXRvck5hbWVdID0gdXNlU3RhdGUoKTtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVOYW1lID0gZXZ0ID0%2BIHtcbiAgICAgIHNldFZpc2l0b3JOYW1lKGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGJ1aWxkR3JlZXRpbmcgPSBuYW1lID0%2BIHtcbiAgICAgIHJldHVybiBuYW1lID8gPHA%2BSGVsbG8geyBuYW1lIH0hPC9wPiA6IDxwPkVudGVyIHlvdXIgbmFtZSBpbiB0aGUgZmllbGQgYWJvdmUuPC9wPjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWw%2BXG4gICAgICAgICAgTmFtZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQmx1cj17IGhhbmRsZU5hbWUgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyBidWlsZEdyZWV0aW5nKHZpc2l0b3JOYW1lKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Iiwic3R5bGVzIjoiLnBsYXlncm91bmQtcHJldmlldy1jb250YWluZXIgeyBwYWRkaW5nOiAzMHB4OyB9In0%3D">Operador Ternário</ExternalLink>.
        </p>
        <h3>
          Loops
        </h3>
        <p>
          Following the same way used to conditionally render parts of a
          template, loops made with the <em>ng-repeat</em> directive in
          AngularJS are done in React using plain JavaScript like <em>map</em>,
          for instance.
        </p>
        <p>
          Playground: <ExternalLink href="https://demo.pitsby.com/#!/components/angular/playground?tab=2&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%2BXG4gIDxkaXY%2BXG4gICAgRnJ1aXRzXG4gIDwvZGl2PlxuICA8Zm9ybSBuZy1zdWJtaXQ9XCIkY3RybC5oYW5kbGVGcnVpdFN1Ym1pc3Npb24oKVwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwiJGN0cmwubmV3RnJ1aXRcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIGZydWl0Li4uXCIgLz5cbiAgPC9mb3JtPlxuICA8dWw%2BXG4gICAgPGxpIG5nLXJlcGVhdD1cImZydWl0IGluICRjdHJsLmZydWl0c1wiPlxuICAgICAge3sgZnJ1aXQgfX1cbiAgICA8L2xpPlxuICA8L3VsPlxuPC9kaXY%2BIiwiY29udHJvbGxlciI6ImZ1bmN0aW9uIGNvbnRyb2xsZXIoKSB7XG4gIGNvbnN0ICRjdHJsID0gdGhpcztcblxuICAkY3RybC5mcnVpdHMgPSBbJ0JhbmFuYScsICdPcmFuZ2UnXTtcbiAgXG4gICRjdHJsLmhhbmRsZUZydWl0U3VibWlzc2lvbiA9ICgpID0%2BIHtcbiAgICBpZigkY3RybC5uZXdGcnVpdCkgYWRkRnJ1aXQoJGN0cmwubmV3RnJ1aXQpO1xuICAgICRjdHJsLm5ld0ZydWl0ID0gJyc7XG4gIH07XG4gIFxuICBmdW5jdGlvbiBhZGRGcnVpdChmcnVpdCl7XG4gICAgJGN0cmwuZnJ1aXRzLnB1c2goZnJ1aXQpO1xuICB9XG59XG5cbnJldHVybiBjb250cm9sbGVyOyIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9">Ng-repeat</ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0O1xuXG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIGNvbnN0IFtmcnVpdHMsIHNldEZydWl0c10gPSB1c2VTdGF0ZShbJ0JhbmFuYScsICdPcmFuZ2UnXSk7XG4gICAgXG4gICAgY29uc3QgaGFuZGxlRnJ1aXRTdWJtaXNzaW9uID0gZXZ0ID0%2BIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZXZ0LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignW25hbWU9XCJmcnVpdFwiXScpO1xuICAgICAgaWYoaW5wdXQudmFsdWUpIHNldEZydWl0cyhbIC4uLmZydWl0cywgaW5wdXQudmFsdWUgXSk7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlncm91bmQtcHJldmlldy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBGcnVpdHNcbiAgICAgICAgPC9kaXY%2BXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsgaGFuZGxlRnJ1aXRTdWJtaXNzaW9uIH0%2BXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZydWl0XCIgcGxhY2Vob2xkZXI9XCJBZGQgYSBmcnVpdC4uLlwiIC8%2BXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHsgZnJ1aXRzLm1hcCgoZnJ1aXQsIGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0%2BeyBmcnVpdCB9PC9saT4pIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iLCJzdHlsZXMiOiIucGxheWdyb3VuZC1wcmV2aWV3LWNvbnRhaW5lciB7IHBhZGRpbmc6IDMwcHg7IH0ifQ%3D%3D">Map</ExternalLink>.
        </p>
        <StorySpacer />
        <p>
          As we see, one of the traits that separate Rect from AngularJS so
          much is how the template is perceived. To illustrate that difference,
          some developers use to say: <em>AngularJS puts JavaScript in HTML,
          React puts HTML in JavaScript</em>.
        </p>
        <p>
          But the main differences between AngularJS and React are not limited
          to the template engine. The Component Lifecycle API changes a lot as well.
        </p>
        <h2>
          Lifecycle Hooks
        </h2>
        <p>
          Lifecycle hooks give us the necessary conditions to perform specific
          tasks. When some tasks only can be done after the component template
          has already been rendered, we can use the component initialization
          hook, for example. On the other hand, if we need to perform a task
          at the moment in which a component is removed from the DOM, we can
          use the component termination hook.
        </p>
        <h3>
          Initialization/Mounting
        </h3>
        <p>
          The hook that represents the component initialization in AngularJS
          is <em>$onInit</em>. This is the function AngularJS runs at the moment
          in which component is fully ready for use. That is, the template is
          rendered, and all the variables present on the controller are bound
          to it.
        </p>
        <p>
          Tasks that need to be performed in specific moments of the React
          component lifecycle are passed to a function called <em>
          useEffect</em>. Not so intuitive, the name of this function relates
          to the term side effect. Within <em>useEffect</em> we can be sure that
          the task will run only after the component is mounted.
        </p>
        <p>
          Playground: <ExternalLink href="https://demo.pitsby.com/#!/components/angular/playground?tab=2&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%2BXG4gIDxoMT5QbGF5Z3JvdW5kPC9oMT5cbjwvZGl2PiIsImNvbnRyb2xsZXIiOiJmdW5jdGlvbiBjb250cm9sbGVyKCkge1xuICBjb25zdCAkY3RybCA9IHRoaXM7XG5cbiAgLy8gQXQgdGhpcyBtb21lbnQsIGNvbXBvbmVudCBpcyBub3QgZnVsbHkgYnVpbHQuXG4gIGFsZXJ0UGFnZUhlYWRpbmcoKTtcbiAgXG4gICRjdHJsLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgLy8gSGVyZSB5b3UgY2FuIHJ1biB0YXNrcyB0aGF0IGRlcGVuZCBvblxuICAgIC8vIGNvbXBvbmVudCdzIG1hcmt1cCwgZm9yIGV4YW1wbGUuXG4gICAgYWxlcnRQYWdlSGVhZGluZygpO1xuICB9O1xuICBcbiAgZnVuY3Rpb24gYWxlcnRQYWdlSGVhZGluZygpe1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICAgIHJldHVybiBoZWFkaW5nID8gd2luZG93LmFsZXJ0KGhlYWRpbmcudGV4dENvbnRlbnQpIDogd2luZG93LmFsZXJ0KCdObyBoZWFkaW5nIGZvdW5kIScpO1xuICB9XG59XG5cbnJldHVybiBjb250cm9sbGVyOyIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9">$onInit</ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/angular/playground?tab=2&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%2BXG4gIDxoMT5QbGF5Z3JvdW5kPC9oMT5cbjwvZGl2PiIsImNvbnRyb2xsZXIiOiJmdW5jdGlvbiBjb250cm9sbGVyKCkge1xuICBjb25zdCAkY3RybCA9IHRoaXM7XG5cbiAgLy8gQXQgdGhpcyBtb21lbnQsIGNvbXBvbmVudCBpcyBub3QgZnVsbHkgYnVpbHQuXG4gIGFsZXJ0UGFnZUhlYWRpbmcoKTtcbiAgXG4gICRjdHJsLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgLy8gSGVyZSB5b3UgY2FuIHJ1biB0YXNrcyB0aGF0IGRlcGVuZCBvblxuICAgIC8vIGNvbXBvbmVudCdzIG1hcmt1cCwgZm9yIGV4YW1wbGUuXG4gICAgYWxlcnRQYWdlSGVhZGluZygpO1xuICB9O1xuICBcbiAgZnVuY3Rpb24gYWxlcnRQYWdlSGVhZGluZygpe1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICAgIHJldHVybiBoZWFkaW5nID8gd2luZG93LmFsZXJ0KGhlYWRpbmcudGV4dENvbnRlbnQpIDogd2luZG93LmFsZXJ0KCdObyBoZWFkaW5nIGZvdW5kIScpO1xuICB9XG59XG5cbnJldHVybiBjb250cm9sbGVyOyIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9">useEffect</ExternalLink>.
        </p>
        <h3>
          Destruction/Unmounting
        </h3>
        <p>
          Like the tasks that should be run when the component is already
          mounted, some other tasks need to run right before component unmounts.
          Consider some task adding an event listener to the document at the
          moment the component initializes. That listener must be removed from
          the document when the component is removed from the DOM. Otherwise,
          every initialization of that component will add one more listener
          causing unexpected behavior.
        </p>
        <p>
          The AngularJS hook that allows us to run a task right before a
          component is removed from the DOM is called <em>$onDestroy</em>.
        </p>
        <p>
          The hook used in React to do this keeps the same, <em>useEffect</em>.
          In the previous case - <em>initialization</em>, we just passed a
          function to the hook that will be run at the moment in which the
          component is fully mounted. When you need to run a task right before
          the component is unmounted, the function passed to <em>useEffect
          </em> must return another one. That other one should contain the
          tasks that will run right before the end of the component life.
        </p>
        <p>
          Playground: <ExternalLink href="https://demo.pitsby.com/#!/components/angular/playground?tab=2&code=eyJ0ZW1wbGF0ZSI6IjxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyXCI%2BXG4gIDxoMT5QbGF5Z3JvdW5kPC9oMT5cbjwvZGl2PiIsImNvbnRyb2xsZXIiOiJmdW5jdGlvbiBjb250cm9sbGVyKCkge1xuICBjb25zdCAkY3RybCA9IHRoaXM7XG4gIFxuICAkY3RybC4kb25Jbml0ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWxlcnRQYWdlSGVhZGluZyk7XG4gIH07XG4gIFxuICAkY3RybC4kb25EZXN0cm95ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWxlcnRQYWdlSGVhZGluZyk7XG4gIH07XG4gIFxuICBmdW5jdGlvbiBhbGVydFBhZ2VIZWFkaW5nKCl7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gICAgcmV0dXJuIGhlYWRpbmcgPyB3aW5kb3cuYWxlcnQoaGVhZGluZy50ZXh0Q29udGVudCkgOiB3aW5kb3cuYWxlcnQoJ05vIGhlYWRpbmcgZm91bmQhJyk7XG4gIH1cbn1cblxucmV0dXJuIGNvbnRyb2xsZXI7Iiwic3R5bGVzIjoiLnBsYXlncm91bmQtcHJldmlldy1jb250YWluZXIgeyBwYWRkaW5nOiAzMHB4OyB9In0%3D">$onDestroy</ExternalLink>, <ExternalLink href="https://demo.pitsby.com/#!/components/react/playground?tab=1&code=eyJjb250cm9sbGVyIjoiLy8gVGhpcyBmdW5jdGlvbiByZXByZXNlbnRzIGEgV2VicGFjayBNb2R1bGVcbmZ1bmN0aW9uKCkge1xuICBjb25zdCB7IHVzZUVmZmVjdCB9ID0gUmVhY3Q7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiByZXByZXNlbnRzIGEgRnVuY3Rpb25hbCBSZWFjdCBDb21wb25lbnRcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgYWxlcnRQYWdlSGVhZGluZyA9ICgpID0%2BIHtcbiAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICAgICAgaWYoaGVhZGluZylcbiAgICAgICAgd2luZG93LmFsZXJ0KGhlYWRpbmcudGV4dENvbnRlbnQpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhbGVydFBhZ2VIZWFkaW5nKTtcbiAgICAgIFxuICAgICAgcmV0dXJuICgpID0%2BIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhbGVydFBhZ2VIZWFkaW5nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlncm91bmQtcHJldmlldy1jb250YWluZXJcIj5cbiAgICAgICAgPGgxPlBsYXlncm91bmQ8L2gxPlxuICAgICAgPC9kaXY%2BXG4gICAgKTtcbiAgfVxufSIsInN0eWxlcyI6Ii5wbGF5Z3JvdW5kLXByZXZpZXctY29udGFpbmVyIHsgcGFkZGluZzogMzBweDsgfSJ9">useEffect</ExternalLink>.
        </p>
        <StorySpacer />
        <p>
          As we noticed, the underlying logic on how to handle a component does
          not change too much from AngularJS to React as the code appearance
          may suggest. Once you understand the differences regarding the form,
          any developer familiar with AngularJS will have no trouble developing
          React components.
        </p>
      </StoryViewport>
    );
  }
}
