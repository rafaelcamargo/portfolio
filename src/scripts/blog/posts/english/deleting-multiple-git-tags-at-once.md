title: Deleting multiple Git tags at once
date: 2022-10-29
description: Deleting multiple tags may become painful work for whom is not familiar enough with its corresponding Git command. This post offers some strategies that will save you a lot of time.
keywords: git, tags, delete, multiple

---

Though not common, you may face a situation in which you need to delete several Git tags from your project. See below some commands that can help you with the task and pick up the one that best fits your needs.

## Deleting *multiple* tags
There are some ways of deleting more than one tag at once. The most straightforward way is simply passing a list of tags to delete.

If you need to delete a few tags, you can pass them directly:
```
git tag -d <tag1> <tag2> <tag3> …
```

The above command will delete all the listed tags from your local Git repository. To achieve the same result in your remote repository, run:
```
git push -d <remote> <tag1> <tag2> <tag3> …
```
If the amount of tags is too big to list them one by one, it's possible to list them by filtering all the existing tags by term.

Take the following list for instance:
```
v0.1.0
v0.2.0
v0.3.0
v0.4.0
v0.5.0
v0.6.0
testing0.6.0-a
testing0.6.0-b
testing0.6.0-c
…
testing0.6.0-z
```

To delete all the tags that contain the term *testing*, you just need to run the command below. It will delete all the tags that match the term passed to the *grep* command.
```
git tag -d $(git tag | grep "testing")
```

To achieve the same result in your remote repository, run:
```
git push -d <remote> $(git tag | grep "testing")
```

As you can notice, the commands above delete every tag that **does contain** the term *testing* on their names. If you're looking for the opposite condition, that is, deleting every tag that **does not contain** some term, pass the flag *-v* to the *grep* command.

Take the following list as example:
```
fruit-apple
fruit-orange
fruit-papaya
tree-tall
tree-small
color-blue
color-yellow
color-green
```

![Animation demonstrating the deletion of multiple tags on terminal](../../images/deleting-git-tags.gif)  
_Deleting multiple Git tags at once_

To delete all the tags that **do not** contain the term *fruit*, the command to execute would be:
```
git tag -d $(git tag | grep -v "fruit")
```
To achieve the same result in your remote repository, run:
```
git push -d <remote> $(git tag | grep -v "fruit")
```

## Deleting *all* tags
In case you need to delete absolutely all tags from your project, run the following command:
```
git tag -d $(git tag)
```
To achieve the same result in your remote repository, run:
```
git push -d <remote> $(git tag)
```

Whether performing a local or remote cleanup, any of the above commands will get the job done almost instantly, saving you precious time. To learn more about the Git command responsible for managing tags, visit the [official documentation](https://git-scm.com/book/en/v2/Git-Basics-Tagging).
