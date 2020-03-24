const express = require('./node_modules/express');

const app = express();

app.get('/', (request, response) => {
	return response.send({
		evento: 'Semana OmniStack 11.0',
		aluno: 'Matheus Rodrigo'
	});
});

app.listen(3333);