title: Handling leading zeros with JavaScript
date: 2024-02-28
description: Leading zeros never really meant much and are often unnecessary. But believe it or not, there are some cases where they are crucial. So, for these latter cases, how would you easily format strings that need one or more leading zeros? Find out how some native JavaScript methods can help you with that task.
keywords: zeros, leading, string, padStart, padEnd, javascript

---

There are countless cases where a leading zero means nothing. It's useless. Its existence is perfectly dispensable. But there are some cases where it is crucial.

A common scenario in a programmer's daily life is constructing dates from a standard ISO string. The absence of leading zeros disrespects the standard and, consequently, prevents the construction of a date using JavaScript. See in the example below what happens if we skip the leading zero in the numbers representing the month and day of the date to be constructed:
```javascript
new Date('2024-2-4T05:00:00.000Z');
// Invalid Date
```

Another case, also based on a predefined format, that requires the use of leading zeros is the Postal Code (CEP) in Brazil. If I define a CEP as 89203-85, it will be invalid, and any searches for this code will not return results. The predefined format for CEP requires the code to have 5 digits followed by another 3, separated by a hyphen. To make the CEP valid, it is necessary to add a leading zero to the number 85: 89203-085.

But what would be the easiest way to handle a string that necessarily needs to have a certain number of characters? Until recently, I used to create a helper function that looked something like this:
```javascript
function formatLeadingZero(text) {
  return parseInt(text) < 10 ? `0${text}` : text;
}
```
Then, all I had to do was execute the function passing any text that needed to have exactly two characters:
```javascript
formatLeadingZero('2');
// "02"
```

But as you can immediately notice, this function is limited to texts that need to have at least 2 characters. If I needed to ensure the case of *085* for the CEP, it would no longer be sufficient. That's when recently, in a pull request opened by a workmate, I discovered the `String.prototype.padStart()` method, supported by the most popular browsers since at least 2017. This method not only solves the month and day format respecting the leading zero but would also solve the CEP case. A real lifesaver:
```javascript
'2'.padStart(2, '0');
// "02"

'85'.padStart(3, '0');
// "085"
```

The method has a very intuitive signature. First, we inform the length that the final string must have, then we inform the character that will pad the missing characters at the left of the given string. If characters are missing at the right of the string, you can use the `String.prototype.padEnd()` method instead.

Looking a bit more into the signature of these two methods, we realize that both methods can satisfy many other use cases beyond adding leading or trailing zeros to a string. It's possible, for example, to obfuscate sensitive data, such as tokens or credit card numbers:
```javascript
token.slice(-4).padStart(24, '*');
// "********************6fgh"
```

In the documentation available on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String), you can learn more about these and other string helper methods that can make your daily life easier, making your code radically simpler.
