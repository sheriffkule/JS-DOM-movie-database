const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal'); //alternative
// const addMovieModal = document.body.children[1]; //alternative

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild; //alternative

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
}


startAddMovieButton.addEventListener('click', toggleMovieModal);