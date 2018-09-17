  const socket = io.connect('http://localhost:8080');


class SocketCommunication{
    constructor(){
        // socket.on('news',  (data)=> {
        //     console.log(data);
        //     socket.emit('my other event', 'adad');
        //   });
      
    }
    sendDataToServer(data,callback){
        socket.emit('test',{data});
        socket.on('testRes',(data)=>callback(data))
    }

}



export const socketCommunication = new SocketCommunication();


