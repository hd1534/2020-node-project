const port = 3000;

const app = require('express')();


const module_test = require('./module/module_test');
app.use('/test', module_test);
app.use('/movie', require('./module/module_movie'));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, (req, res) => {
    console.log(`server running on 127.0.0.1:${port}`);
})


app.get('/', function (req, res) {
    res.send('GET 방식 호출');
});


app.post('/', function (req, res) {
    res.send('POST 방식 호출');
});


app.put('/', function (req, res) {
    res.send('PUT 방식 호출');
});


app.delete('/', function (req, res) {
    res.send('DELETE 방식 호출');
})


app.all('/all', (req, res, next) => {
    res.send('ALL 호출');
    next();
})

app.use("/api", require("./api"))  // == api/index.js