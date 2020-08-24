/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +

2) Изменить жанр фильма, поменять "комедия" на "драма" +

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. +
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelector('.promo__adv').remove();

document.querySelector(".promo__genre").textContent = "Драма";

document.querySelector(".promo__bg").style.backgroundImage = "url('img/bg.jpg')";

console.log(document.querySelector(".promo__interactive-list"));

let nameFilms = document.querySelectorAll(".promo__interactive-item");

nameFilms.forEach((item, i) => {
    item.remove();
});

let listNameFilms = document.querySelector(".promo__interactive-list");

for (let i = 0; i < movieDB.movies.length; i++) {
    let nameFilm = document.createElement("li");
    nameFilm.innerHTML = `${movieDB.movies[i]}<div class="delete"></div>`;
    listNameFilms.append(nameFilm);
    nameFilm.classList.add("promo__interactive-item");

    console.log(i);
    console.log(nameFilm);
    console.log(movieDB.movies[i]);
}

console.log(nameFilms);

console.log(movieDB.movies[1]);



