title: Testing and implementing an in-page scroll link in React
date: 2024-01-30
description: Smooth scroll between sections of the same webpage provides a seamless and pleasant experience for visitors, but how can we test and better implement a component that is easily reusable in other places of the codebase? The solution suggested by this post uses Jest, Testing Library, and React.
keywords: scroll, smooth, navigation, page, react, jest, testing library, rtl

---

One of the most commonly used strategies to allow visitors to navigate through sections of the same page is smooth scrolling. In contrast to the strategy of simply scrolling the page through an anchor added to the URL, which immediately transports the visitor to the desired section, smooth scrolling offers a more fluid experience, guiding the visitor to the final destination in a much more pleasant way.

Let's write an automated test in order to blueprint our component. In the following example, we will use Jest and React Testing Library (RTL). The first step is to name this component and specify its main behavior:

```javascript
describe('Scroll Link', () => {
  it('should scroll the page to the element with the given id');
});
```

We'll call the component `<ScrollLink />` and pass the `id` of the element to which the page should scroll when the link is clicked. Now, let's write the test using the AAA method (Arrange, Act, Assert). In the Arrange step, we need to import modules and utilities, make any necessary mocks, and everything else that is needed for us to act (Act) and then immediately ensure (Assert) that the result was what we actually expected.

```javascript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ScrollLink from './scroll-link'

describe('Scroll Link', () => {
  beforeEach(() => {
    window.scroll = jest.fn();
  });

  function mockSection({ id, topDistance }){
    const section = document.createElement('section');
    section.setAttribute('id', id);
    section.getBoundingClientRect = jest.fn(() => ({ top: topDistance }));
    document.body.appendChild(section);
  }

  it('should scroll the page to the element with the given id', async () => {
    const id = 'intelligence';
    const label = "Intelligence";
    mockSection({ id, topDistance: 400 });
    render(<ScrollLink to={id}>{label}</ScrollLink>);
  });
});
```

Test 100% arranged! Note that it is necessary to mock the return of the `getBoundingClientRect` function since the `jsdom` still does not implement any features related to styles (as I write this post). Time to act:

```javascript
it('should scroll the page to the element with the given id', async () => {
  const id = 'intelligence';
  const label = "Intelligence";
  mockSection({ id, topDistance: 400 });
  render(<ScrollLink to={id}>{label}</ScrollLink>);
  await userEvent.click(screen.getByRole('link', { name: label }));
});
```

Immediately after clicking the link, we ensure that the scroll was executed exactly with the expected parameters:

```javascript
it('should scroll the page to the element with the given id', async () => {
  const id = 'intelligence';
  const label = "Intelligence";
  mockSection({ id, topDistance: 400 });
  render(<ScrollLink to={id}>{label}</ScrollLink>);
  await userEvent.click(screen.getByRole('link', { name: label }));
  expect(window.scroll).toHaveBeenCalledWith({
    top: 400,
    left: 0,
    behavior: 'smooth'
  });
});
```

With the test completed and failing, let's now write the implementation of `ScrollLink` that makes the designed behavior a reality:

```javascript
const ScrollLink = ({ to, children }) => {
  const navigate = evt => {
    evt.preventDefault();
    window.scroll({
      top: getElementTopDistance(to) + window.scrollY,
      left: 0,
      behavior: 'smooth'
    });
  }
  const getElementTopDistance = elementId => {
    const el = document.querySelector(`#${elementId}`);
    return el.getBoundingClientRect().top;
  }
  return (
    <a href={`#${to}`} onClick={navigate}>{children}</a>
  )
}
```

Note that in addition to the implementation being quite concise as it does not depend on any third-party code, the link respects all accessibility-related requirements.

![Animation showing the result of the initial implementation in the browser](../../images/in-page-scroll-initial.gif)

There's just a small issue with the experience. At the end of the scroll, the section title is too close to the top of the viewport. To eliminate this discomfort, we can improve `ScrollLink` by adding an optional property that we can call `offset`. This property will represent how far the target element should be away from the top of the viewport. Let's design the new use case:

```javascript
it('should optionally add an offset to the target element', async () => {
  const id = 'intelligence';
  const label = "Intelligence";
  mockSection({ id, topDistance: 400 });
  render(<ScrollLink to={id} offset={40}>{label}</ScrollLink>);
  await userEvent.click(screen.getByRole('link', { name: label }));
  expect(window.scroll).toHaveBeenCalledWith({
    top: 360,
    left: 0,
    behavior: 'smooth'
  });
});
```

Then, we enhance `ScrollLink` to make the new test pass:

```javascript
const ScrollLink = ({ to, children, offset = 0 }) => {
  const navigate = evt => {
    evt.preventDefault();
    window.scroll({
      top: getElementTopDistance(to) + window.scrollY - offset,
      left: 0,
      behavior: 'smooth'
    });
  }
  const getElementTopDistance = elementId => {
    const el = document.querySelector(`#${elementId}`);
    return el.getBoundingClientRect().top;
  }
  return (
    <a href={`#${to}`} onClick={navigate}>{children}</a>
  )
}
```

![Animation showing the result of the final implementation with the offset property in the browser](../../images/in-page-scroll-final.gif)

Well done! Our codebase now has a component that can be used on any screen of the site or application, capable of scrolling the page to any element that is properly identified by an `id`. In this [gist](https://gist.github.com/rafaelcamargo/dfd3f4b8f52534af7bfa039b7f7539a6), you will find an `index.html` containing all the necessary code to try out `ScrollLink` locally, exactly as shown by the animations used to illustrate this post.
