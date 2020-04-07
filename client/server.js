const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var pusher = new Pusher({
  appId: '977378',
  key: 'eaa5420a1b2b42547009',
  secret: 'c206021b918d4d364a79',
  cluster: 'us2',
  encrypted: true
});

app.set('PORT', process.env.PORT || 5000);


app.post('/message', (req, res) => { console.log(req.body)
  const payload = req.body;
  pusher.trigger('chat', 'message', payload);
  res.send(payload)
});


app.listen(app.get('PORT'), () => 
  console.log('Listening at ' + app.get('PORT')))