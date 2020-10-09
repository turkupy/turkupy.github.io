# Contributing

# Code of conduct

Make sure you read our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, it is assumed you uphold this code. 

Also, a note about language: As Turku.py is a community for women and non-binaries, it is especially important to keep the language inclusive. This means avoiding for example the general masculine, and includes words and expressions like, but not limited to, "hey guys", "what do you guys think", assuming a developer is "he" and other similar expressions. To ensure this in our codebase, we use [AlexJS](https://alexjs.com) to lint the code, and it is run before committing. 

# How can I contribute?

There are several ways to contribute:

## Reporting bugs

If you find something that is not working, you can report a bug by opening an issue. Remember to provide enough context, and if possible, reproduction of the bug. 

## Suggesting a feature 

It is also possible to suggest a feature that you think is lacking from the website. For this, open an issue starting with "Feature request:" and add a descriptive but compact name of the request to the title of request. Provide also a more lengthy description to issue.

It should include:
- What this feature is?
- Why that feature should be added?
- Are there anything else you'd like to say about the feature?

## Contributing with code

To contribute code to the repository, first, check issues and choose one unassigned. Let us know you'd like to work on the issue. 

### Fork the repository

First, fork the repository. You can find the fork button from the right upper corner of the repository page. You can find more detailed instructions from [Github's forking guide](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo).

After completing the steps, you should have the cloned repo on your computer. :tada:

### Get things up and running

First, make sure you have the following versions of Node and Yarn installed:

- Node v. 12.x
- Yarn v. 1.22.x

In the root folder of the cloned repo (it should be something like `path-to-repo/turkupy.github.io/`) run `yarn` to install the dependencies. 

After the script has been run, you should be able to start the dev server with `yarn develop`. It will start the development server in port 8000, so you can visit the site in `http://localhost:8000`.

We are using [Gatsby](https://gatsbyjs.com), so if you have never encountered it, it would be beneficial to read the [Getting started guide](https://www.gatsbyjs.com/docs/). 

If you have any problems, reach us and we try to help!

### Create a branch to your fork

After you have completed the steps in Github's guide, you should have the repository locally on your computer. Now it's time to create a branch. Note, that the base branch is `dev`, so be sure to check out the new branch from that branch.

It's a good convention to name the branch descriptively, and with a prefix, which is the type of thing you are doing. So, for example, for adding a Finnish translation of an event named "Robotics day" the branch could be something like `translation/finnish-translation-for-robotics-day`. Another example would be a feature adding contact-info and the branch could be `feature/add-contact-info`. If you have any questions or get stuck with naming (It can be the hardest part of programming!), please write a comment into the issue and we will help you.

### Read the documentation

There are relevant (depending on what you are going to do) docs in [./docs](./docs)-folder. Also, please read anyway [about technologies and practices](./docs/technologies-and-practices.md)

### Implement the changes

So, this part is about coding (or writing, if the issue is about translating). If you get stuck, please add a message to the issue, so we can help you!

### Creating a commit

You have done a set of things, and it is time to commit the changes. Yay! Something to note in this part, is that good commit messages are always preferred. It should explain what has been done, and if possible, why that has been done. So, for example, `Fixed a typo in README.md`. If, however, the commit needs more description, you can use `git commit` and write the description to the editor that has opened. See more [details about longer commit messages here.](https://medium.com/@haydar_ai/learning-how-to-git-creating-a-longer-commit-message-16ca32746c3a)

When you have done everything, push the changes to Github, and the next step is to create a PR.


### Create a PR

To create a PR, navigate to your repository in Github. Above the code files, there should be a gray notification, informing that your branch is *insert count of your commits* ahead of turkupy:dev, and on the right side there is a link/button "Pull request". Click that. 

It then opens an interface for creating a pull request, and you can make the PR. Some notes, and information that is needed:

- Which issue this PR is related to? You can link it with # and issue name, and if you write something like "Resolves #123" it will automatically close the issue when the PR has been merged.
- Describe, what you have done and what the PR would add

Then you can click the "Create pull request"-button. We will review it as soon as we have time!

A note: We kindly request, that you create a one PR per issue, as it is easier to track and review, when there is only one issue per PR.