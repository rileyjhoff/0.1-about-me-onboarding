// import functions

// grab DOM elements

const button = document.getElementById('animal-button');
const animalData = document.getElementById('animal-info');

// console.log(button, animalData);

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

button.addEventListener('click', () => {
    animalData.classList.replace('hidden', 'visible');
    button.textContent = 'Hide Favorite Animal';
    if (animalData.classList.contains('visible')) {
        button.addEventListener('click', () => {
            document.location.reload(true);
        });
    }
});