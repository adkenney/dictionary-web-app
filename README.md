# Dictionary web app

This is a solution to the [Dictionary web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot
**Light Theme**
![Dictionary Light Theme](https://user-images.githubusercontent.com/31222712/220158495-1aaf77b8-8565-4af9-8447-7987b81382d5.png)
**Dark Theme**
![Dictionary Dark Theme](https://user-images.githubusercontent.com/31222712/220158799-efbe23eb-f8f6-4814-bf6d-8cd76d97d2b3.png)

### Links

- Live Site URL: [**Here**](https://adkenney-dictionary-app.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Dictionary API](https://dictionaryapi.dev/) - For the definition data
- CSS Modules - For styles

### What I learned

I learned a few new things during this project
- Custom dropdown box and toggle switch
- Working with audio object for definition pronunciation

Some of the words from the api did not include an audio source, so I learned that the `play()` method returns a promise so it made catching errors simpler

```audioSrc.play().catch(error => console.log('No audio source'));```


### Continued development

I want to look into react context, because I noticed I was passing down the same state through multiple components and in my opinion it started to get a bit messy.

### Useful resources

- [Article by Thi Tran](https://medium.com/tinyso/how-to-create-a-dropdown-select-component-in-react-bf85df53e206) - This article gave me some inspiration on how to go about creating a custom dropdown menu for the font selector. It also helped with the logic for closing the dropdown when the area outside of it was clicked.

## Author

- Frontend Mentor - [@adkenney](https://www.frontendmentor.io/profile/adkenney)
- LinkedIn - [@arkellkenney](https://www.linkedin.com/in/arkellkenney/)

## Acknowledgments

