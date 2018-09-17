

//const cmd_command = 'start D:/javascriptProjects/express-demo-master/express-demo-master/runMVN.bat'


class ExecOperation  {
    constructor() {
        
    }
    runCmd(cmdCommand){
        return new Promise((resolve, reject)=> {
            exec(cmdCommand, (err, stdout, stderr) => {
                if (err) {
                    // node couldn't execute the command
                }
                setTimeout(() => socket.emit('testRes', { bla: 'bla' }), 1000)
                resolve({dasda:'dasda'})
            })
            
        });

    }
}


module.exports =  new ExecOperation();



