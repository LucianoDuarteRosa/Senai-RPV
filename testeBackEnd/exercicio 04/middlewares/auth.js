// middlewares/auth.js
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extraí o token do cabeçalho

    if (!token) {
        return res.status(401).send('Token não fornecido');
    }

    try {
        const decoded = jwt.verify(token, 'seu_segredo_jwt');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).send('Token inválido');
    }
};

export default authMiddleware;
