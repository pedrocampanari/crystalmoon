const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/html/index.html');
})

app.listen(443, '0.0.0.0', ()=>{
    console.log('Server is running on port 443');
});