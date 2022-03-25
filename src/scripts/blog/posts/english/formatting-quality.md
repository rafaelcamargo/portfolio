title: Formatting quality
date: 2020-01-17
description: It was mid-2018, and I needed to build an application for internal use at the company I was working for. The project consisted of building a panel to monitor the main application releases of the company. I was the only front-end developer in the project. I had all the powers to structure it the way I considered best. So I didn't miss the opportunity to drive it to quality.
keywords: eslint, eslint, formatting, code, quality

---

It was mid-2018, and I needed to build an application for internal use at the company I was working for. The project consisted of building a panel to monitor the main application releases of the company. I was the only front-end developer in the project. I had all the powers to structure it the way I considered best. So I didn't miss the opportunity to drive it to quality.

I have set the unit test coverage threshold in 100% for my personal and professional applications since 2017. For this project, it wasn’t different. But this time, I would like to ensure some other aspects related to quality. I wanted to find a way to avoid functions and files inflate themselves tending to the chaos. I wanted to avoid nested conditions that, little by little, make the return of a function unpredictable and terrible to read. I would like to find such an alarm that would be fired every time a module, class or function started to concentrate too much responsibility.

Looking for tools that could help me to check the code quality, I noticed how much ESLint was underused at the company where I worked. Most programmers that use ESLint drive its configuration to syntactical aspects only. At where I was, it wasn’t different. We enforced semicolon at the end of sentences, eighty columns as maximum line length, two spaces as indentation size, and so on. However, reading the tool documentation in detail, I discovered it offers the possibility not to check the code syntax only, but check quality aspects too. Personally, I liked three of those rules so much:

## Cyclomatic Complexity

Amount of linear paths some code can go through. A function that is too complex has more than one single responsibility and makes it impossible for anyone to predict what it returns just by reading its name. I set the maximum value as three for this rule. In practice, it means a function can contain one *if/else* or two *if*.

## Maximum Lines

Modules/Classes containing hundreds of lines are a code smell. They are likely embracing more responsibilities than they should. It is not rare to stumble upon some file named helper that, in practice, becomes such a bottomless chest that accepts anything and tends to inflate indefinitely. Setting one hundred as the maximum number of lines for a file, I make it hard to cumulate responsibilities and favor its distribution instead. Modules and classes should be as small as their responsibilities.

## Maximum Statements

In addition to cyclomatic complexity, a function containing too many statements is a clue that it is doing more than what it should. For this rule, I define a limit of five statements per function.

As well as the unit test coverage threshold, I can't start a project without those quality rules anymore. Those constraints reinforce such valuable concern. I am forced to reflect on how I organize my code all the time. You can successfully release some code today by only focusing on making it satisfy its requirements. But reflecting on how to organize the code even before it satisfies any requirement, helps you ensure the success of the current release and all the following ones.

P.S.: [Here](https://github.com/glorious-codes/glorious-pitsby/blob/master/.eslintrc.json), you can see a real configuration file that shows how I use to handle complexity, max-lines, and max-statements in my projects.
