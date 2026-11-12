const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'application/json');

	if (req.method === 'GET' && req.url === '/') {
		res.writeHead(200);
		res.end(JSON.stringify({ message: 'Backend is running' }));
		return;
	}

	res.writeHead(404);
	res.end(JSON.stringify({ error: 'Route found' }));
});

server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
