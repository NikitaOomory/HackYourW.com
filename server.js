const express = require('express');

const path = require('path');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'ejs-view', `${page}.ejs`);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) =>{
   res.render(createPath('index'));
});

app.get('/search_training', (req, res) =>{
    res.render(createPath('search_training'));
});

app.get('/search_training/answer_ai_trainings', (req, res) =>{
    res.render(createPath('answer_ai_trainings'));
});

app.get('/search_training/answer_ai_trainings/player_training', (req, res) =>{
    res.render(createPath('player_training'));
});

app.use(express.static(path.join(__dirname, 'static')));

//всегда указывать последним
app.use((req, res) => {
    res
        .status(404)
    .send('Дурачёк, ошибся ты!');
});