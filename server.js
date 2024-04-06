const express = require('express');

const path = require('path');

const app = express();

const PORT = 3000;



const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

//app.get('/', (req, res) =>{
//   res.send('Hello world'); 
//});

app.get('/', (req, res) =>{
   res.sendFile(createPath('index')); 
});

app.use(express.static(path.join(__dirname, 'public')));

//всегда указывать последним
app.use((req, res) => {
    res
        .status(404)
    .send('Дурачёк, ошибся ты!');
});