const net = require("net");

const tcpServer = net.createServer(
    (socket) => {
        console.log('a client connected');

        socket.on("data", (clientData) => {
            console.log(`client sent ${clientData}`)
        })

        socket.on('end', () => {
            console.log('Client disconnected');
        });
    }
)

tcpServer.listen(3000, 'localhost');