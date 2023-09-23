title: Mocking search params in tests for React components
date: 2023-09-23
description: The use of search params in front-end applications is common. However, testing the behavior of components that depend on these parameters may not be as simple as we'd like. Learn how to simulate the parameters found in the URL easily using the History API.
keywords: search params, react, componente, history api, push state

---

Anyone who has needed to ensure that a React component behaves correctly based on parameters passed in the URL has likely faced some level of difficulty with testing.

One of the initial strategies used to simulate this use case is attempting to set search params in the URL before the component mounts. Something like:

``` javascript
it('should show page according page search param found on url', () => {
  window.location.search = 'page=2';
  render(<Component />);
  // asserção de que a segunda página foi exibida
});
```

However, by applying the above strategy, you get an unexpected result. Tests run by Jest cound not make requests, and when you set a search param this way, the test fails throwing the following error:

```
console.error
  Error: Not implemented: navigation (except hash changes)
```

So, the challenge is to find a way to insert search params into the URL without triggering a request. One of the most popular methods to achieve this today is by using the `pushState` method from the `History API`. Introduced in Chrome version 5 in mid-2010, this technology is widely used in single-page applications (SPAs) through routing libraries, such as React Router. With the pushState method, you can change a URL without making a server request.

By rewriting the test using the History API, we'll get:
``` javascript
it('should show page according page search param found on url', () => {
  const url = `${window.location.pathname}?page=2`;
  window.history.pushState({}, '', url);
  render(<Component />);
  // asserção de que a segunda página foi exibida
});
```

If you log the value of `window.location.href` to the console immediately after setting the search param via `pushState`, you will see the following URL: `http://localhost/?page=2`. Simple, right?

Since search may be used in various components of a front-end application, I use to create a utility function in a module dedicated solely to providing functions to assist with testing. This module is stored in `src/services/testing.js`, and the utility function looks like this:
``` javascript
export function mockSearchParams(paramsString){
  const { pathname } = window.location;
  const url = paramsString ? `${pathname}?${paramsString}` : pathname;
  window.history.pushState({}, '', url);
}
```

Finally, by rewriting the test once again using the utility function, it becomes simple, straightforward, and highly readable, making future code changes easier:
``` javascript
it('should show page according page search param found on url', () => {
  mockSearchParams('page=2');
  render(<Component />);
  // asserção de que a segunda página foi exibida
});
```

If you want to see the above strategy applied in a real React application tested with Jest and RTL (React Testing Library), check out this [test suite](https://github.com/rafaelcamargo/bordiple/blob/main/src/home/views/home-view.test.js#L32) for Bordiple on GitHub. [Bordiple](https://bordiple.rafaelcamargo.com/) is a front-end application that allows developers and designers to create elements with multiple CSS borders through a user-friendly graphical interface.
