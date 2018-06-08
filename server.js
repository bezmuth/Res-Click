/* this entire thing is a meme */
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
let GCSEs = 0
let kebab = 1
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Listening on port 3000!')
  loop=true
})

app.set('view engine', 'ejs')
app.get('/', function (req, res) {
  res.render('index', {amount: null, error: null});
})
app.post('/', function (req, res) {
  let city = req.body.city;
  GCSEs = GCSEs + (1 * kebab)
  let GCSEstext = `You have ${GCSEs} GCSEs!`;
  res.render('index', {amount: GCSEstext, error: null});
})


app.post('/buykebab', function (req, res) {
  let city = req.body.city;
  if(GCSEs -19 <= 0){
    console.log("nope");
    let GCSEstext = `You have ${GCSEs} GCSEs and you goofed! That costs 20 GCSEs!`;
    res.render('index', {amount: GCSEstext, error: null});
  }else{
    GCSEs = GCSEs - 20
    kebab = kebab + 1;
    let GCSEstext = `You have ${GCSEs} GCSEs and you Bought a Kebab!`;
    res.render('index', {amount: GCSEstext, error: null});
  }

})
