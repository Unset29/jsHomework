const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const username = os.userInfo().username;
    const osType = os.type();
    const uptime = Math.floor(os.uptime() / 60);
    const cwd = process.cwd();
    const serverFilename = path.basename(__filename);

    res.write(`
    <h1>Server Information</h1>
    <p>Username: ${username}</p>
    <p>Operating System Type: ${osType}</p>
    <p>System Uptime (minutes): ${uptime}</p>
    <p>Current Working Directory: ${cwd}</p>
    <p>Server Filename: ${serverFilename}</p>
  `);

    res.end();
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});