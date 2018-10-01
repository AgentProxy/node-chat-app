const path = require('path');
const publicPath = path.join(__dirname,'../public');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(publicPath));
const port = process.env.PORT || 3000;
// app.get('/home', (req,res) => {
//     res.sendFile(path.join(publicPath + '/index.html'));
// })

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
})

console.log(__dirname + '/../public');
console.log(publicPath);