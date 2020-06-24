/* Практика часть 2

Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания



/* Практика часть 3

Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

//start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastViewFilm,
    rating;

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        lastViewFilm = prompt("Какой последний фильм вы посмотрели?", "");
        while (lastViewFilm == "" || lastViewFilm == null || lastViewFilm.length > 50) {
            lastViewFilm = prompt("Какой последний фильм вы посмотрели?", "");
        } 
        rating = prompt("На сколько вы его оцените?", "");
        while (rating == "" || rating == null || rating.length > 50) {
            rating = prompt("Какой последний фильм вы посмотрели?", "");
        }
        personalMovieDB.movies[lastViewFilm] = rating;
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

//detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

let genresPersonal;

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let y = i + 1;
        genresPersonal = prompt(`Ваш любимый жанр под номером ${y}?`, "");
        personalMovieDB.genres[i] = genresPersonal;
    }
}

writeYourGenres()
showMyDB()