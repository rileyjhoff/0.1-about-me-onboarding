## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
    * ![my initial drawing of the app](/assets/app-drawing.png)
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
    * header, main, footer, section, h1, p, button, div
1. **For each HTML element ask: Why do I need this?**
    * header/main/footer to segment the page in an orderly fashion
    * section will be where I put the about me info
    * h1 will be where I put my name
    * p is where I will put my pronouns & where I live
    * button so a click will show the hidden animal data
    * div so I can hide the animal data
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
    * add all the html elements and text
    * then add IDs & classes
    * then hide the animal data
    * then add an event listener to the button click that makes the animal data appear
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
    * there will be an event when the user clicks the button. when this happens, the animal data will appear on the page
1. **Think about how to validate each of your features according to a Definition of Done**
    * need to validate that all of the text is showing up as intended
    * need to validate that the animal data is hidden on initial page load
    * need to validate that clicking the button will make the animal data appear
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
    * button click revealing animal data depends on animal data being hidden

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

## Rubric

| App should include . . .                                                            |  10 |
| :---------------------------------------------------------------------------------- | --: |
| Bio data shows on page, including name, pronouns, and where you live                |   1 |
| Favorite animal is hidden on page load                                              |   2 |
| Button with event listener shows favorite animal data                               |   2 |
| README file with plan                                                               |   2 |
| Repo has a commit history with multiple commits and commit messages that make sense |   1 |
| Link in About section of repo to deployed site in Netlify                           |   1 |
| Work is done on a dev branch and a PR link is submitted to Canvas                   |   1 |