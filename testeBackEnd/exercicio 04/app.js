import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authMiddleware from './middlewares/auth.js';

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let users = [];

app.post('/signup', async (req, res) => {
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

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ name, email, password: hashedPassword });

    res.status(201).send('Usuário cadastrado com sucesso');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = users.find((user) => user.email === email);

        if (!user) {
            return res.status(400).send('E-mail ou senha incorretos');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send('E-mail ou senha incorretos');
        }

        const token = jwt.sign({ name: user.name, email: user.email }, 'seu_segredo_jwt', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).send('Erro no servidor');
    }
});

app.get('/profile', authMiddleware, (req, res) => {
    const user = users.find((user) => user.email === req.user.email);
    if (!user) {
        return res.status(404).send('Usuário não encontrado');
    }
    res.status(200).json({ name: user.name, email: user.email });
});

export default app;
