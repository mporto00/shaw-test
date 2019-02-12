const http = require("http");
const app = require("./api/app");
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT);
server.on('listening', function () { return console.log("Servidor está rodando na porta " + PORT); });
server.on('error', function (error) { return console.log("Ocorreu um erro: " + error); });

