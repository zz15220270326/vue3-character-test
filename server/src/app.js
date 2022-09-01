const express = require('express'),
      bodyParser = require('body-parser'),
      { PORT } = require('./configs/urls');

const {
  characterRouter
} = require('./routers');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('*', (req, res, next) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    
    next();
  } catch (e) {
    res.send({
      error_code: 500,
      reason: 'Inner Error must to fixed, please wating !'
    });
  }
});

app.use('/character-exam', characterRouter);

app.listen(PORT, () => {
  console.log('app starting!!!');
  console.log(`app is running at port ${ PORT }!!!`);
});
