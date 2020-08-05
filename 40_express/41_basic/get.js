const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Server running at http://127.0.0.1:%d', port);
});

// app.get('/', (req, res) => {
//     res.send('<h1>Hello, Express</h1>');
//     console.log (req, res);
// });

app.get('/', (req, res) => {
    console.log('req.query:', req.query);
    
    data = "<h1>query string</h1>\n"

    for (query in req.query)
        data += `${query} : ${req.query[query]}<br>`;

    res.send(data);
});


app.get('/hello', (req, res) => {
    res.send('<h1>안뇽?</h1>');
});


app.get('/:title/:singer', function(req, res) {
    console.log('req.params:', req.params);
    var title = req.params.title;
    var singer = req.params.singer;
    
    res.send('url parameter(get) -> title:' + title + ', singer:' + singer);
});
