const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/farm', (req, res) => {
    res.send([
        {
            'name':'김영우',
            'number':3
        },
        {
            'name':'김영우1',
            'number':2
        },
    ])
});


app.listen(port, () => console.log(`Listening on port ${port}`));