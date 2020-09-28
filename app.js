const http = require('http');
const {logger} = require('./logger');
const {config} = require('./config');

const { ENV, PORT } = config;

http.createServer((req, res) => {
   logger.warn(`Incoming request on env ${ENV}`);
   res.writeHeader(200, {"Content-Type": "application/json"});
   res.end(JSON.stringify({ message: "Hello World" }));
}).listen(PORT, () => logger.log(`Listening on the port ${PORT}`));