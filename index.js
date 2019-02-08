const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



app.use(express.static('public'))
app.get('/image', (req, res) => {
    console.log('path.resolve()',path.resolve())
    res.download(
    './public/123.png', 
    (err) => {
        if (err) {
            console.log('ОШИБКА СКАЧИВАНИЯ КАРТИНКИ ', err)
        } else {
            console.log('картинка загружена ')
        }
    }
)})

const myMiddleware = (req, res, next) => {
    // res.send({ myMiddleware: 'myMiddleware' })
    req.locals.name = 'Flavio'

    console.log('myMiddleware')
    next()
}

app.get('/middleware', myMiddleware, (req, res) => {
    res.send({ userName: 'obj' })
});

app.get('/about', (req, res) => {
    res.render('Template', { name: 'Flavio' })
});


app.get('/', (req, res) => {
    console.log('req.body ', req.body);
    console.log('req.baseUrl ', req.baseUrl);
    console.log('req.ip ', req.ip);
    console.log('req.method ', req.method);
    console.log('req.protocol ', req.protocol);
    console.log('req.params ', req.params);
    console.log('req.query ', req.query);
    res.send('Hello ALAN!')
})
app.get('/form', (req, res) => res.send({
    strangeThing: 'POST POST POST!'
}))
app.get('/505', (req, res) => {
    res.status('505').send('505')
})
app.get('/obj', (req, res) => {
    res.send({ userName: 'obj' })
})
app.get('/json', (req, res) => {
    res.set('Awesome-Header', 'Fucking')
    console.log('Awesome-Header', req.header('Awesome-Header'))
    console.log('User-Agent', req.header('User-Agent'))
    res.json({
        userName: 'json',
        header: req.header('User-Agent')
    })
})
app.get('/redirect', (req, res) => {
    res.redirect('/go-there')
})
app.get('/go-there', (req, res) => {
    res.send({
        userName: 'json',
        header: req.header('User-Agent')
    })
})
app.get('/namedParams/:theValue', (req, res) => {
    res.send(req.params.theValue)
})
app.listen(3000, () => console.log('Server ready'))