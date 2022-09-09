const jwt = require('jsonwebtoken');
const auhConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).send({error: 'token não informado!'});

    const parts = authHeader.split(' ');

    if(!parts.length === 2) return res.status(401).send({error: 'token errado!'});

    const [ schema, token ] = parts;

    if(!/^Bearer$/i.test(schema)) return res.status(401).send({error: 'token mal formado!'});

    jwt.verify(token, auhConfig.secret,  (err, decoded) => {
        if(err) return res.status(401).send({error: 'token invalido!'});

        req.userId = decoded.id;
        return next();
    });
};