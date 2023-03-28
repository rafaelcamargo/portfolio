title: Usando Testing Library com ARIA roles implícitos
date: 2023-03-27
description: Um HTML semântico garante bela estrutura e boa acessibilidade ao documento. A função getByRole da Testing Library é muito útil nesse assunto, mas sem conhecer os papéis implícitos dos elementos, seu uso pode se transformar num grande desafio.
keywords: getByRole, testing library, aria-role, pepel, implícito
lang: pt-BR

---

Escrever testes que interajam com os elementos da tela através de seus papéis (*roles*) é uma boa estratégia para assegurar a correta semântica de um documento HTML.

Em termos de estrutura e acessibilidade, é crucial que um título desempenhe o papel de *heading*, que um *select* desempenhe o papel de *combobox*—ou *listbox*—, que um *textarea* desempenhe papel de *textbox*, e assim por diante. Porém, quando o atributo *aria-role* não está explicitamente declarado em um elemento, nem sempre é fácil descobrir qual papel está implicitamente associado a ele.

A seguinte tabela exibe os papéis (*roles*) que estão implicitamente associados a muitos elementos frequentemente usados em um documento HTML:

| Elemento | Variação | Papel |
|----------|----------|----------------|
| a | com *href* | *link* |
| a | sem *href* | *generic* |
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
| img | com *alt="algum texto"* | *img* |
| img | com *alt=""* | *presentation* |
| img | sem *alt* | *img* |
| input | type: *button* | *button* |
| input | type: *checkbox* | *checkbox* |
| input | type: *email* | *textbox* |
| input | type: *number* | *spinbutton* |
| input | type: *range* | *slider* |
| input | type: *search* | *searchbox* |
| input | type: *tel* | *textbox* |
| input | type: *text* | *textbox* |
| input | type: *url* | *textbox* |
| input | type: *text, search, tel, url, email* contendo atributo *list* | *combobox* |
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
| select | com *multiple* | *listbox* |
| table |  | *table* |
| tbody, tfoot, thead |  | *rowgroup* |
| time |  | *time* |
| td | contida em *role=table* | *cell* |
| td | contida em *role=grid* ou *role=treegrid* | *gridcell* |
| th | contida em *role=table* | *columnheader*, *rowheader* ou *cell* |
| th | contida em *role=grid* ou *role=treegrid* | *columnheader*, *rowheader* ou *gridcell* |
| tr |  | *row* |
| ul |  | *list* |

Conhecer o papel implícito dos elementos HTML facilita o uso da função `getByRole`, disponibilizada pela Testing Library, quando se quer obter um elemento através de seu papel:

``` javascript
it('should contain a link to the blog', () => {
  const { getByRole } = render(<MyCustomComponent />);
  const link = getByRole('link', { name: 'Blog' });
  expect(link).toHaveAttribute(
    'href',
    'https://rafaelcamargo.com/blog/l/pt-BR/'
  );
});
```

É importante estar ciente que, dependendo da quantidade de elementos presentes na tela renderizada, encontrar um elemento através de seu papel (*role*) pode retardar a execução do teste. Uma alternativa nesses casos é diminuir o escopo da varredura a ser feita pela função `getByRole` a uma pequena porção da tela através da função `within`:

``` javascript
it('should contain a link to the blog', () => {
  const { container } = render(<MyCustomComponent />);
  const section = container.querySelector('#linkSection');
  const link = within(section).getByRole('link', { name: 'Blog' });
  expect(link).toHaveAttribute(
    'href',
    'https://rafaelcamargo.com/blog/l/pt-BR/'
  );
});
```

Caso você esteja pensando em definir explicitamente atributos *aria-role* aos elementos acima contendo seus respectivos valores implícitos, saiba que isso não é recomendado. Para visualizar a lista completa dos elementos HTML e seus papéis implícitos, visite a [documentação oficial](https://www.w3.org/TR/html-aria/).
