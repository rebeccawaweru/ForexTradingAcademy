require('dotenv').config()
const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
require('express-async-errors')
const app = express();
const connectDB = require('./db/connect')
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
var bodyParser = require('body-parser');
const methodOverride = require('method-override');
const crypto = require("crypto"); //for generating  the key
const { URLSearchParams } = require("url");



//routes
const promotionRouter = require('./routes/promotion')
const authRouter = require('./routes/auth')
const paymentRouter = require('./routes/payment')
const courseRouter = require('./routes/courses')
const enrollRouter = require('./routes/enroll')
const chatsRouter = require('./routes/chat')
const uploadRouter = require('./routes/uploads')
const mpesaRouter = require('./routes/mpesa')
const ipayRouter = require('./routes/i-pay')
const referralRouter = require('./routes/referral')
const messageRouter = require('./routes/messages')
const uploadsRouter = require('./routes/uploadfile')
const botRouter = require('./routes/bot')
const freeRouter = require('./routes/free')
const subscriptionRouter = require('./routes/subscriptions')
//errors
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('view engine', 'ejs')

app.use(bodyParser.raw({type:'application/octet-stream'}));
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.use(express.json())

app.use(bodyParser.json());// put true for nested objects/arrays inputs
app.use(methodOverride('_method'));

app.use('/forexarena', promotionRouter)
app.use('/forexarena', authRouter)
app.use('/forexarena', paymentRouter)
app.use('/forexarena', courseRouter)
app.use('/forexarena', enrollRouter)
app.use('/forexarena', chatsRouter)
app.use('/forexarena', uploadRouter)
app.use('/forexarena', freeRouter)
app.use('/mpesa', mpesaRouter)
app.use('/forexarena', ipayRouter)
app.use('/forexarena', referralRouter)
app.use('/forexarena', messageRouter)
app.use('/forexarena', botRouter)
app.use('/forexarena', subscriptionRouter)
app.use('/', uploadsRouter)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const { addUser, removeUser, getUser, getUsersInCourse,privateUser} = require('./helpers/users')
const port = process.env.PORT || 5000
const server = http.createServer(app);
const users={};
// const io = socketio(server,{
//   cors:{
//       origin:port,
//       methods:["GET","POST"],
//       transports: ['websocket', 'polling'],
//       credentials:true,
//   },
//   allowEIO3: true
// })

// global.onlineUsers = new Map();
// io.on('connection',(socket)=>{
// console.log(socket.id);

// global.chatSocket = socket;
// socket.on("add-user", (userId) => {
//   onlineUsers.set(userId, socket.id);
// });

// socket.on("send-msg", (data) => {
//   const sendUserSocket = onlineUsers.get(data.to);
//   if (sendUserSocket) {
//     socket.to(sendUserSocket).emit("msg-recieve", data.msg);
//   }
// });

// socket.on('join', ({name,course}, callback)=>{
// const {user,error} = addUser({id:socket.id, name, course});
// if(error) return callback(error);
// socket.emit('message', { user: 'admin', text: `${user.name}, welcome to forum for ${user.course}.`});
// socket.broadcast.to(user.course).emit('message', { user: 'admin', text: `${user.name} has joined!` });
// socket.join(user.course);
// io.to(user.course).emit('courseData', { course: user.course, users: getUsersInCourse(user.course) });
// callback();
// })

// socket.on('privateUser', ({name,course}, callback)=>{
//   const {user,error} = addUser({id:socket.id, name, course});
//   if(error) return callback(error);
//   socket.emit('message', { user: 'mentor', text: `${user.name}, welcome `});
//   socket.broadcast.to(user.course).emit('message', { user: 'admin', text: `${user.name} has joined!` });
//   socket.join(user.course);
//   io.to(user.course).emit('courseData', { course: user.course, users: getUsersInCourse(user.course) });
//   callback();
// })

//   socket.on('private message', function(data,callback){
//       if(data in users){
//         callback(false)
//       }else{
//         callback(true)
//         socket.nickname = data;
//         users[socket.nickname] = socket;
//         updateNicknames();
//       }
//     })
//     function updateNicknames(){
//       io.sockets.emit('usernames',Object.keys(users))
//     }

// // socket.on("private", function(data) {       
// //   io.sockets.sockets[data.to].emit("private", { from: client.id, to: data.to, message: data.message });
// //   socket.emit("private", { from: client.id, to: data.to, message: data.message });
// // });
// socket.on('sendPrivateMessage', function(data){
//   io.sockets.emit('new message', {msg:data, nick:socket.nickname})
// })


// socket.on('sendMessage', (message, callback) => {
//     const user = getUser(socket.id);
//     io.to(user.course).emit('message', { user: user.name, text: message });
//     callback();
//    });

// socket.on('disconnect', ()=>{
//  const user = removeUser(socket.id);
//  delete users[socket.nickname];
//  if(user) {
//   io.to(user.course).emit('message', { user: 'Admin', text: `${user.name} has left.` });
//   // io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
// }
//   })
// })



const start = async()=>{
    try{
     connectDB(process.env.MONGO_URI)
     server.listen(port, ()=>{
        console.log(`Server is listening on port ${port}.......`);
     })
    }catch(err){
        console.log(err);
    }
}
start()



