import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json()) ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let users = [];

app.post('/signup', (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).send('Todos os campos são obrigatórios');
    }

    if (password !== confirmPassword) {
        return res.status(400).send('Senhas não correspondem');
    }

    if (users.find((user) => user.email === email)) {
        return res.status(400).send('E-mail já cadastrado');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send('E-mail inválido');
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        return res.status(400).send('Nome inválido');
    }

    users.push({ name, email, password });

    res.status(201).send('Usuário cadastrado com sucesso');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
        return res.status(400).send('E-mail ou senha incorretos');
    }

    res.status(200).send(`Bem-vindo(a), ${user.name}`);
});

export default app;
