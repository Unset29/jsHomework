const http = require('http');
const personalmodule = require('./personalmodule');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const username = 'John';
    const { greeting, currentDate, currentTimeString, currentTimeZone } = personalmodule.greetUser(username);

    res.write(`<h1>${greeting}</h1>`);
    res.write(`<p>Current date: ${currentDate}</p>`);
    res.write(`<p>Current time: ${currentTimeString}</p>`);
    res.write(`<p>Current timezone: ${currentTimeZone}</p>`);
    res.end();
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});