const filmForm = document.getElementById('film-form');
const filmTitleInput = document.getElementById('film-title');
const filmGenreInput = document.getElementById('film-genre');
const filmYearInput = document.getElementById('film-year');
const filmList = document.getElementById('film-list');
const errorMessage = document.getElementById('error-message');
const sortSelect = document.getElementById('sort');
const filterInput = document.getElementById('filter-input');
const filterSelect = document.getElementById('filter-select');
const deleteAllButton = document.getElementById('delete-all');

let films = JSON.parse(localStorage.getItem('films')) || [];

// отображение фильмов
function displayFilms(filter = '') {
    filmList.innerHTML = '';
    const filteredFilms = films.filter(film => {
        return (
            film.title.toLowerCase().includes(filter.toLowerCase()) ||
            film.genre.toLowerCase().includes(filter.toLowerCase()) ||
            film.year.toString().includes(filter)
        );
    });

    filteredFilms.forEach((film, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.year}</td>
            <td>
                <button onclick="editFilm(${index})">Редактировать</button>
                <button onclick="deleteFilm(${index})">Удалить</button>
            </td>
        `;
        filmList.appendChild(row);
    });
}

// Добавление фильма
filmForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = filmTitleInput.value.trim();
    const genre = filmGenreInput.value.trim();
    const year = filmYearInput.value.trim();

    if (!title || !genre || !year) {
        errorMessage.textContent = 'Все поля должны быть заполнены!';
        errorMessage.classList.remove('hidden');
        return;
    }

    errorMessage.classList.add('hidden');

    const newFilm = { title, genre, year };
    films.push(newFilm);
    localStorage.setItem('films', JSON.stringify(films));
    displayFilms();

    filmForm.reset();
});

// Удаление фильма
function deleteFilm(index) {
    films.splice(index, 1);
    localStorage.setItem('films', JSON.stringify(films));
    displayFilms();
}

// Удаление всех фильмов
deleteAllButton.addEventListener('click', function() {
    if (confirm('Вы уверены, что хотите удалить все фильмы?')) {
        films = [];
        localStorage.setItem('films', JSON.stringify(films));
        displayFilms();
    }
});

// Редактор фильма
function editFilm(index) {
    const film = films[index];
    filmTitleInput.value = film.title;
    filmGenreInput.value = film.genre;
    filmYearInput.value = film.year;

    deleteFilm(index);
}

filterInput.addEventListener('input', function() {
    displayFilms(filterInput.value);
});

window.onload = displayFilms;
