# TCP Server
This is a simple Node.js project that implements a basic TCP server using the net module. The server listens for incoming client connections and logs any data sent by the client to the console.

### Features
Accepts TCP connections from clients.
Logs data sent by the client.
Detects when a client disconnects.
### Requirements
```
Node.js (v12 or later)
```
### Setup and Usage
Clone the repository or copy the code.
Ensure you have Node.js installed on your system.
Save the code in a file, e.g., server.js.
Open a terminal and navigate to the directory containing the file.
Run the following command to start the server:
```bash
node server.js
```
The server will start listening on localhost at port 3000.

## How It Works
Server Initialization
The server is created using the net.createServer() method. When a client connects, a message is logged to the console.

### Handling Client Data
When the server receives data from a client, it logs the data to the console.

### Client Disconnection
When a client disconnects, a message is logged indicating the disconnection.

### Testing the Server
You can use tools like Telnet or Netcat to connect to the server:

```bash
telnet localhost 3000
```
or

```bash
nc localhost 3000
```
Type messages in the terminal, and the server will log them.
