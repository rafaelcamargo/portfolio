title: To test or not to test an application?
date: 2021-11-28
description: Believe it or not, every software gets tested during its development. The option 'no tests' may exist in theory, but they are always made in practice. The point is how you do them.
keywords: automated tests, application, development

---

This is a recurring question in software development. Responses to this question usually lead developers to an intense debate confronting several points of view. Even though the question seems complex, the only possible answer seems very obvious to me.

Some say that tests result in additional costs to the project because they stretch development time. I see it differently. Believe it or not, every software gets tested during its development. The option "no tests" may exist in theory, but they are always made in practice. The point is *how* you do them.

Let's take the example of a developer who considers being developing an application with no tests. He implements some form fields, adds a button to submit form data, and so on. Just after writing down those lines of code, he opens the browser, fills in the form fields, and submits the data. Then he checks if something that was expected to happen actually happened. If didn't so, he makes the necessary adjustments in the code until it works. Interacting with an application on the browser to check whether it works or not may wrongly lead to the idea of "testless" development. Although they had been done manually on the Browser, he actually did tests. Notice that to implement even a few lines of code, it's still necessary to test them.

The dilemma between testing or not testing an application is false. The real one is if we should do it manually or automatically.

By choosing to test an application manually, you opt for the strategy in which a developer must open a browser to ensure not only the new functionality but also to ensure all the old ones. This strategy sounds a bit expensive to me. A variation of this strategy would be doing manual tests for the new functionality only. In this last case, it's up to the customers to check if the rest of the application keeps working as expected after the new functionality's deployment. It seems a strategy even more expensive to me...

Another approach is to test every new functionality automatically. Rather than opening a browser to ensure the expected behavior, you do it by running a suite of automated tests. The effort needed to write automated tests is very similar to the effort spent on the browser. The big difference is that a manual test must be run by a human before every deployment, is repetitive, tedious, and takes too much time. An automated test is written by a developer just once and is run thousand times by a machine in a fraction of the time a human would take to do the same job. Finally, a fair strategy.

But why do many people think that manual tests are cheaper than automated ones? In my opinion, there is a hidden and mistaken premise in such assumption. The premise that every developer is naturally equipped with all the necessary skills to write automated tests just because he is able to write some code.

Even though they share some required skills, developing an application and writing automated tests are very different activities. Programming is just one of the necessary requirements to write automated tests. Years of experience developing applications does not necessarily mean years of experience writing automated tests. Lots of experience developing large applications does not mean experience enough developing high-quality large applications. Dozens of skills needed to build an application do not necessarily represent dozens of fundamental skills to write automated tests. So the next time a developer says it will take more time to develop a new functionality because he needs to write automated tests, beware that the extra time won't be necessary because of automated tests. The developer will take more time because he still doesn't have every required skill to write automated tests productively.
