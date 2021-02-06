const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + '/dist/TODO-APP/browser'))
app.use(cors());
app.listen(PORT, (req,res)=>{
  console.log(`listening on port ${PORT}`);
})

app.use('', (req,res)=>{
  res.sendFile(path.join(__dirname, '/dist/TODO-APP/browser/index.html'))
})