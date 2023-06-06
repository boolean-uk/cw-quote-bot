// Get the loading image HTML element
const loading = document.querySelector('.loading');

// Get the modal HTML element, and its content & close button elements
const modal = document.querySelector('.modal');
const modalContent = modal.querySelector('.modal-content');
const modalClose = modal.querySelector('.modal-close');

// Add an event listener to the close button so when its clicked, the modal disappears
modalClose.addEventListener('click', function() {
    // Add the hidden css class when clicked
    modal.classList.add('hidden');
});

// Create a function that will run when we click on a character
async function playCharacter(character) {
    // Remove the hidden class from the loading image so it shows on screen
    loading.classList.remove('hidden');

    // Define some content to display in the modal. We'll switch this out with AI dialog later!
    const content = 'You clicked a character!'

    // Add that content, as well as the character name, into the modal HTML
    modalContent.innerHTML = `
        <h2>${character}</h2>
        <p>${content}</p>
        <code>Well done!</code>
    `;

    // After 2 seconds, remove the hidden class from the modal so it shows on screen and hide the loading image
    setTimeout(function () {
        modal.classList.remove('hidden');
        loading.classList.add('hidden');
    }, 2000)
}

// Create a function to run when the page loads
function init() {
    // Get all of the character HTML elements
    const characters = document.querySelectorAll('.character');

    // Add a click event to every character
    characters.forEach((el) => {
        el.addEventListener('click', function() {
            const character = el.dataset.character;
            // When the character is clicked, run the playCharacter function using the clicked character
            playCharacter(character);
        });
    });
}

init();

