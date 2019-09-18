const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const checkoutRoutes = require('./routes/checkout');
const coursesRoutes = require('./routes/courses');
const contactsusRoutes = require('./routes/contactsus');
const feedbacksRoutes = require('./routes/feedbacks');
const enquiriesRoutes = require('./routes/enquiries');
const messagesRoutes = require('./routes/messages');
const postsRoutes = require('./routes/posts');
const ordersRoutes = require('./routes/orders');
const userRoutes = require('./routes/user');

mongoose
  .connect(
    "mongodb+srv://Ade:" +
      process.env.MONGO_ATLAS_PW +
      "@cluster0-ksiqo.mongodb.net/node-angular",
      { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/', express.static(path.join(__dirname,'angular')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// const io = require('socket.io').listen(server);
const server = require('http').Server(app)
const io = require('socket.io')(server)


io.on('connection', (socket) => {
  let user = '';

  socket.on('new message', (data) => {
    const message = new Message({
      _id: mongoose.Types.ObjectId(),
      message: data,
      user: user
    })
    message.save().then(rec => {
      if (rec) {
        io.emit('message recieved', rec)
      } else {
      }
    })
  })

  socket.on('new user', (data) => {
    user = data;
    console.log("new user connected");
    socket.broadcast.emit('user connected', data);
    Message.find().then(rec => {
      if (rec) {
        socket.emit('all messages', rec)
      } else {
      }
    })
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('user disconnected', user);
  })
});

app.use('/api/checkout', checkoutRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/contactsus', contactsusRoutes);
app.use('/api/feedbacks', feedbacksRoutes);
app.use('/api/enquiries', enquiriesRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);


app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'angular', 'index.html'));
});

module.exports = app;

