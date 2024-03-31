title: Reducing data with a shell-pipe-like sequence of operations in JavaScript
date: 2024-03-31
description: One of the most remarkable features of the command-line interface is the pipe operator. Could it be possible to reach with JavaScript an approach that mirrors the intuitiveness and simplicity provided by the pipe operator?
keywords: command-line, pipe, operator, reduce, javascript

---

One of the most remarkable features of the command-line interface is the pipe operator. The ability to use the data resulting from one operation as input for the next one makes the process intuitive, while significantly abbreviating the amount of written code, thus making the development flow extremely productive.

Consider the following command sequence, for example. It reads the contents of a file named contacts.txt, sorts it, removes duplicate contacts, and finally saves the result in a new file named ordered_unique_contacts.txt.

```bash
cat ./contacts.txt | sort | uniq > ./ordered_unique_contacts.txt
```

A relatively common operation in website development is converting text into a URL slug. To achieve this result, we need to ensure that any accents are replaced by their unaccented equivalents, unnecessary spaces and special characters are removed, and finally, spaces are replaced by dashes. For example, for the input "*== Don't you like  Slavoj Žižek's books? ==*" we would have "*dont-you-like-slavoj-zizeks-books*".

The implementation of this type of treatment usually follows a step-by-step process similar to this:

```javascript
function buildSlug(text){
  let slug = text.toLowerCase().trim();
  slug = removeAccents(slug);
  slug = removeUnnecessarySpaces(slug);
  slug = removeSpecialChars(slug);
  return replaceSpacesWithDashes(slug);
}
```

Although the solution is readable and intuitive, the code is not succint. Additionally, the same variable has its value reassigned three times throughout the process, an approach that is not considered favorable from a functional perspective.

An alternative to this solution would be to use the result of one operation as the input for the next operation directly, without intermediaries, that is, without needing a temporary state variable:

```javascript
function buildSlug(text){
  return replaceSpacesWithDashes(
    removeSpecialChars(
      removeUnnecessarySpaces(
        removeAccents(
          text.toLowerCase().trim()
        )
      )
    )
  );
}
```

We now have a much more compact and functional code, but readability and intuitiveness have suffered a significant degradation. Instead of simply reading the operations line by line, we need to advance the reading to the `removeAccents` function and only then understand that its return will feed the `removeUnnecessarySpaces` function, and so on.

Would there be a third approach capable of combining readability and brevity? For some time now, I have noticed the tremendous power offered by JavaScript's native `reduce` method. I realized that for cases like the one described here, it can be a great option. To do this, we reduce an initial data to the result of this chain of operations:

```javascript
function buildSlug(text){
  return [
    removeAccents,
    removeUnnecessarySpaces,
    removeSpecialChars,
    replaceSpacesWithDashes
  ].reduce((result, perform) => perform(result), text.toLowerCase().trim());
}
```

With this solution, all operations are easily identified sequentially in a list, thus improving the code's readability and, subsequently, each operation is executed receiving as input the exact output of the previous operation, without the need for any state variable, and expressed in just a single line of code.

If you are now eager for knowing more about the power of the reduce method, visit its [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) and learn more about its details and usage.
