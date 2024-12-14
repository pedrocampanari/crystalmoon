const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.listen(443, '0.0.0.0', ()=>{
    console.log('Server is running on port 80');
});