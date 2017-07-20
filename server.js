let express = require('express')
let app = express()
let path = require('path');
 
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, 'build/index.html'));
})

app.listen(3000, function(err){
  console.log('connected to port 3000');
})