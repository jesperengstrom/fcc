var express = require('express');
var app = express();

app.get('/',(req, res)=>{
    res.send('Hello world!')
})
app.listen(process.env.PORT, ()=>{
    console.log('Server running on port' + process.env.PORT)
});