// import functions

// grab DOM elements

const animalButton = document.getElementById('animal-button');
const animalData = document.getElementById('animal-info');

const carButton = document.getElementById('car-button');
const carData = document.getElementById('car-info');

const foodButton = document.getElementById('food-button');
const foodData = document.getElementById('food-info');

const hobbyButton = document.getElementById('hobby-button');
const hobbyData = document.getElementById('hobby-info');

const movieButton = document.getElementById('movie-button');
const movieData = document.getElementById('movie-info');

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

animalButton.addEventListener('click', () => {
    animalData.classList.replace('hidden', 'visible');
    carButton.classList.replace('hidden', 'visible');
    animalButton.textContent = 'Reset';
    if (animalData.classList.contains('visible')) {
        animalButton.addEventListener('click', () => {
            document.location.reload(true);
        });
    }
});

carButton.addEventListener('click', () => {
    carData.classList.replace('hidden', 'visible');
    carButton.classList.replace('visible', 'hidden');
    foodButton.classList.replace('hidden', 'visible');
});

foodButton.addEventListener('click', () => {
    foodData.classList.replace('hidden', 'visible');
    foodButton.classList.replace('visible', 'hidden');
    hobbyButton.classList.replace('hidden', 'visible');
});

hobbyButton.addEventListener('click', () => {
    hobbyData.classList.replace('hidden', 'visible');
    hobbyButton.classList.replace('visible', 'hidden');
    movieButton.classList.replace('hidden', 'visible');
});

movieButton.addEventListener('click', () => {
    movieData.classList.replace('hidden', 'visible');
    movieButton.classList.replace('visible', 'hidden');
    // movieButton.classList.replace('hidden', 'visible');
});