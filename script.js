"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastViewFilm = prompt("Какой последний фильм вы посмотрели?", ""),
    rating = prompt("На сколько вы его оцените?", "");

personalMovieDB.movies[lastViewFilm] = rating;
lastViewFilm = prompt("Какой последний фильм вы посмотрели?", "");
rating = prompt("На сколько вы его оцените?", "");
personalMovieDB.movies[lastViewFilm] = rating;

console.log(numberOfFilms);
console.log(personalMovieDB);