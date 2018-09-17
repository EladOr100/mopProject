// const { exec } = require('child_process');
// const express = require('express')
// const app = express()
// var cmd_command = 'start D:/javascriptProjects/express-demo-master/express-demo-master/runMVN.bat'


// app.get('/exec/', (req, res) => {
//     // your code here
//     if (req.query.what){
//         return res.send(`got what=${req.query.what}`);
//     }
//     exec(cmd_command, (err, stdout, stderr) => {
//         if (err) {
//           // node couldn't execute the command
//           return res.status(500).send(`can not run the test=${err}`);
//         }
//         res.send(stdout);
//       })

// })

// app.use(express.static('public'))


// app.listen(3000, () => console.log('Example app listening on port 3000!'))


const { exec } = require('child_process');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const execOperation = require('./exec-operation');
// WARNING: app.listen(80) will NOT work here!


app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/public/index.html');
});




app.get('/exec/', (req, res) => {
    // your code here
    if (req.query.what){
        return res.send(`got what=${req.query.what}`);
    }
    exec(cmd_command, (err, stdout, stderr) => {
        if (err) {
          // node couldn't execute the command
          return res.status(500).send(`can not run the test=${err}`);
        }
        
        res.send(stdout);
      })

})

app.use(express.static(__dirname + '/public'));  

io.on('connection',  (socket)=> {
  socket.emit('news', { hello: 'world' });
  socket.on('test', async (data)=> {
   const res = await execOperation.runCmd(data)
    
   setTimeout(()=>socket.emit('testRes',{bla:'bla'}),1000)      
  
});



server.listen(8080);
