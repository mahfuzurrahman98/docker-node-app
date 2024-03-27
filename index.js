const express = require('express');

const app = express();

const people = [
    {
        id: 1,
        name: 'Leanne Graham',
        age: 30,
    },
    {
        id: 2,
        name: 'Ervin Howell',
        age: 31,
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        age: 32,
    },
];

const books = [
    {
        id: 1,
        title: 'Clean Code',
        author: 'Robert C. Martin',
    },
    {
        id: 2,
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
    },
    {
        id: 3,
        title: 'Design Patterns',
        author: 'Erich Gamma',
    },
];

const movies = [
    {
        id: 1,
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
    },
    {
        id: 2,
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
    },
    {
        id: 3,
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
    },
];

app.get('/', (req, res) => {
    res.json(books);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
