const http = require("http");
const app = require("./app");

const port = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

server.on("listening", () => {
  console.log(`Server is listening on port ${port}`);
});

server.on("error", (error) => {
  console.error(`Server encountered an error: ${error}`);
});
