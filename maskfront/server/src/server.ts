import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
const exec = require('child_process').exec;

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({server: server});

interface ExtWebSocket extends WebSocket {
    isAlive: boolean;
}

var WebSocketServer = require('ws').Server;
console.log('WebSocketServer = ',WebSocketServer)
 var http2 = require('http');

var server1 = http2.createServer();

function wssBocast(msg : object){
    wss.clients.forEach((ws: WebSocket) => {

        const extWs = ws as ExtWebSocket;

        if (!extWs.isAlive) return ws.terminate();

        extWs.isAlive = false;
        ws.ping(null, undefined);
        ws.send(JSON.stringify(msg))
    });
}
                                          
var wss1 = new WebSocketServer({server: server1, path: '/foo'});
wss1.on('connection', function(ws :any) {
    console.log('/foo connected');
    ws.on('message', function(data :string) {
        // if (flags.binary) { return; }
        if(data!='goodbye'  && data!='hello')
        console.log('>>> ' + data);
        if (data == 'goodbye') { //console.log('<<< galaxy');
         ws.send('galaxy'); }
        if (data == 'hello') { //console.log('<<< world');
         ws.send('world'); }
        // else if(data =="there is a bitch" ){
        //     wss.clients.forEach((ws: WebSocket) => {

        //         const extWs = ws as ExtWebSocket;
        
        //         if (!extWs.isAlive) return ws.terminate();
        
        //         extWs.isAlive = false;
        //         ws.ping(null, undefined);
        //         ws.send(createMessage(`there is a bitch`))
        //     });
        // }
        else if(data.substring(3, 16) ==`"frame_id":0,` ){
            console.log('<<< frame succesed');
            ws.send('frame succesed');
            // console.log('time now : ',Math.floor(Date.now() / 1000))
            var tmp={content:"there is a bitch",
                     time    :Math.floor(Date.now() / 1000),
                     detail: JSON.parse(data)
                    }
            // console.log(tmp)
            wssBocast(tmp)

        }
        else if(data.substring(0,27) =="maskfront/src/assets/bitch/" ){
            console.log('<<< photo succesed');
            ws.send('photo succesed');
        }

        else{
        
          console.log('<<< succesed');
          ws.send('succesed');
        }
    });
    ws.on('close', function() {
      console.log('Connection closed!');
    });
    ws.on('error', function(e :any) {
    });
});
server1.listen(8126);
console.log('Listening on port 8126...');



function createMessage(content: string, isBroadcast = false, sender = 'NS'): string {
    return JSON.stringify(new Message(content, isBroadcast, sender));
}

export class Message {
    constructor(
        public content: string,
        public isBroadcast = false,
        public sender: string,
    ) { }
}

wss.on('connection', (ws: WebSocket) => {
//   console.log( 'wss.clients = ',wss.clients )

    const extWs = ws as ExtWebSocket;

    extWs.isAlive = true;

    ws.on('pong', () => {
        extWs.isAlive = true;
    });

    //connection is up, let's add a simple simple event
    ws.on('message', (msg: string) => {
      console.log('msg = ',msg)
      try{
        const message = JSON.parse(msg) as Message;
        setTimeout(() => {
            if (message.isBroadcast) {

                //send back the message to the other clients
                wss.clients
                    .forEach(client => {
                        if (client != ws) {
                            client.send(createMessage(message.content, true, message.sender));
                        }
                    });
            }
            if(message.content == 'snapshot'){
                var timeStamp = new Date().getTime();
                console.log('exec = ',exec)
                exec(`ffmpeg -f MJPEG -y -i http://localhost:8787/?action=stream -r 1 -vframes 1 -q:v 1 ../src/assets/snapshot/snapshot${timeStamp}.jpg`,
                    (error:any, stdout:any, stderr:any) => {
                        console.log(`${stdout}`);
                        console.log(`${stderr}`);
                        if (error !== null) {
                            console.log(`exec error: ${error}`);
                        }
                });
                var tmp = {content:'shotdownload',src:`./assets/snapshot/snapshot${timeStamp}.jpg`}
                setTimeout(() => {

                ws.send(JSON.stringify(tmp))
                },5000)


            }

            

             console.log('message = ',message)  
             ws.send(createMessage(`You sent -> ${message.content}`, message.isBroadcast));

        }, 1000);
      }
      catch(e){
        // console.error(e)
      }

    });

    //send immediatly a feedback to the incoming connection    
    ws.send(createMessage('Hi there, I am a WebSocket server'));

    ws.on('error', (err) => {
        console.warn(`Client disconnected - reason: ${err}`);
    })
});

// setInterval(() => {
//     wss.clients.forEach((ws: WebSocket) => {

//         const extWs = ws as ExtWebSocket;

//         if (!extWs.isAlive) return ws.terminate();

//         extWs.isAlive = false;
//         ws.ping(null, undefined);
//         ws.send(createMessage(`You sent -> fuck you very much `))
//     });
// }, 1000);

console.log( 'wss.clients = ',wss.clients )

//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});

