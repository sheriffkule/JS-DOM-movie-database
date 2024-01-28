const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal'); //alternative
// const addMovieModal = document.body.children[1]; //alternative

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild; //alternative

const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild; //alternative

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const cancelAddMovie = () => {
    toggleMovieModal();
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
