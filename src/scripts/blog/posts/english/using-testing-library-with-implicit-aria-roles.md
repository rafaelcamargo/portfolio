title: Using Testing Library with implicit ARIA roles
date: 2023-03-27
description: Semantic HTML ensures neat structure and good accessibility to the document. Testing Library’s getByRole function is very helpful with this, but, not knowing elements’ implicit roles, its use can become a huge hurdle.
keywords: getByRole, testing library, aria-role, role, implicit

---

Writing tests that interact with screen elements through their roles is a good strategy to ensure the proper semantics of an HTML document.

Regarding structure and accessibility, it’s essential that the page headline has a *heading* role, that a select has a *combobox*—or *listbox*—role, that a textarea has a *textbox* role, and so on. However, when the *aria-role* attribute is not explicitly set to an element, it’s not easy to find out which role is implicitly associated with that.

The following table presents the roles that are implicitly tied to several elements commonly used in an HTML document:

| Element | Variation | Role |
|----------|----------|----------------|
| a | with *href* | *link* |
| a | without *href* | *generic* |
| article |  | *article* |
| aside |  | *complementary* |
| blockquote |  | *blockquote* |
| button |  | *button* |
| caption |  | *caption* |
| code |  | *code* |
| datalist |  | *listbox* |
| details |  | *group* |
| dialog |  | *dialog* |
| form |  | *form* |
| h1–h6 |  | *heading* |
| hr |  | *separator* |
| html |  | *document* |
| img | with *alt="some text"* | *img* |
| img | with *alt=""* | *presentation* |
| img | without *alt* | *img* |
| input | type: *button* | *button* |
| input | type: *checkbox* | *checkbox* |
| input | type: *email* | *textbox* |
| input | type: *number* | *spinbutton* |
| input | type: *range* | *slider* |
| input | type: *search* | *searchbox* |
| input | type: *tel* | *textbox* |
| input | type: *text* | *textbox* |
| input | type: *url* | *textbox* |
| input | type: *text, search, tel, url, email* with *list* attribute | *combobox* |
| li |  | *listitem* |
| menu |  | *list* |
| meter |  | *meter* |
| nav |  | *navigation* |
| ol |  | *list* |
| optgroup |  | *group* |
| option |  | *option* |
| output |  | *output* |
| p |  | *paragraph* |
| progress |  | *progressbar* |
| select |  | *combobox* |
| select | with *multiple* | *listbox* |
| table |  | *table* |
| tbody, tfoot, thead |  | *rowgroup* |
| time |  | *time* |
| td | within *role=table* ancestor | *cell* |
| td | within *role=grid* or *role=treegrid* ancestor | *gridcell* |
| th | within *role=table* ancestor | *columnheader*, *rowheader* or *cell* |
| th | within *role=grid* or *role=treegrid* ancestor | *columnheader*, *rowheader* or *gridcell* |
| tr |  | *row* |
| ul |  | *list* |

Knowing the respective implicit role of each HTML element makes the use of Testing Library’s `getByRole` function easy when you want to get them by their roles:

``` javascript
it('should contain a link to the blog', () => {
  const { getByRole } = render(<MyCustomComponent />);
  const link = getByRole('link', { name: 'Blog' });
  expect(link).toHaveAttribute(
    'href',
    'https://rafaelcamargo.com/blog/l/en-US/'
  );
});
```

Important to notice that, depending on the number of elements rendered on the screen, getting elements by their roles can slow down the test execution. In those cases, the area scanned by the `getByRole` function can be drastically reduced to a small region of the screen by using the helper function `within`:

``` javascript
it('should contain a link to the blog', () => {
  const { container } = render(<MyCustomComponent />);
  const section = container.querySelector('#linkSection');
  const link = within(section).getByRole('link', { name: 'Blog' });
  expect(link).toHaveAttribute(
    'href',
    'https://rafaelcamargo.com/blog/l/en-US/'
  );
});
```

In case you are considering making those implicit role values explicit by setting *aria-role* attributes to those elements, be aware it is not recommended. To view the full list of HTML elements and their respective implicit roles, visit the [ARIA official documentation](https://www.w3.org/TR/html-aria/).
