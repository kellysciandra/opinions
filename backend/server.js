const Pusher = require('pusher');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors');

const artists = require("./routes/api/artists");


const app = express();

// Bodyparser middleware
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);


// Routes
app.use("/api/artists", artists);

var pusher = new Pusher({
  appId: '977378',
  key: 'eaa5420a1b2b42547009',
  secret: 'c206021b918d4d364a79',
  cluster: 'us2',
  encrypted: true
});



const port = process.env.PORT || 5000;


app.post('/message', (req, res) => { console.log(req.body)
  const payload = req.body;
  pusher.trigger('chat', 'message', payload);
  res.send(payload)
});


app.listen(port, () => console.log(`Server up and running on port ${port} !`));