const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal'); //alternative
// const addMovieModal = document.body.children[1]; //alternative

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild; //alternative

const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild; //alternative

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input'); //alternative

const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const clearMovieInput = () => {
    for (const usrInputs of userInputs) {
        usrInputs.value = '';
    };
}

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInput();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5).');
        return;
    }
    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
