"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    cycle: for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
        while (a == "" || b == "" || a == null || b == null || a.length > 50 || b.length > 50) {
            i--;
            continue cycle;
        }
        personalMovieDB.movies[a] = b;
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Too few movies watched");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("You are classic viewer");
    } else if (personalMovieDB.count > 30) {
        alert ("You are cinephile!");
    } else {
        alert("Error");
    }
}
detectPersonalLevel();

function showMyDb(lie) {
    if (!lie) {
        console.log(personalMovieDB);
    }
}
showMyDb(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`What's your ${i+1} favorite genre?`, "");
    }
}
writeYourGenres();