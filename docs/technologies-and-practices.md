# About technologies and practices

In this file, you can find info about following things: 

- [Folder structure](#folder-structure)
- [Styling](#styling)
- [Accessibility](#accessibility)
- [Reasons for technology choises](#reasons-for-technology-choises)

## Folder structure

So, what you can expect to find, and from where? 

### root

Here are important documents, such as README.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md and LICENCE. Also, some configuration-files can be found here.

### .github

In this folder, there are github-related files: Issue and pull request-templates, and also Github Action workflows.

### content

This folder contains events in markdown-files, divided into languages. 

### docs

This is the folder to look for help. It is containing documentation (such as this file).

### src

React code lives under this folder. It consists of four folders:

1. components - React components are stored here. Currently, all of them are in this folder without any division, but in the future we might do some separation.
2. pages - This folder contains page-files divided by languages (english being in the root)
3. templates - here templates of files are stored. Currently, there is only a template for the Event-pages. (These are used to generate routes from the contents of the `content`-folder)
4. utils - this one contains utility functions, style-related things and translations

### static

Files used in the static site live in here.

## Styling

This project uses [Styled components](https://styled-components.com/docs). This means, that every component, which is styled, is either a component (in the React-component file or shared (currently none)) or in the global styles.

If there is a _global style_ to 

This also means, that we _do not_ use the following:

- inline css
- css-in-js
- class names (see next parahraph for exceptions)

There are some exceptions for usage of class names (or ids, when they are used for styling). For example usage of a `.visually-hidden`-class name is ok, if adding a text that is visually hidden. That class should be added to global styles, _not_ to the Styled component. 

## Accessibility

TODO

## Reasons for technology choises

TODO

### Gatsby

### Styled components

### State management (or lack of)

