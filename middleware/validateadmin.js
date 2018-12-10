const jwt = require('jsonwebtoken');
const Admin = require('../db').import('../models/admin');

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next();
    } else {
        const sessionToken = req.headers.authorization;
        if (!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.' });
        else {
            jwt.verify(sessionToken, process.env.SECRET, (err, decodedToken) => {
                if (decodedToken) {
                    Admin.findOne({ where: { id: decodedToken.id } })
                        .then(user => {
                            req.user = user;
                            return next();
                        },
                            () => { res.status(401).send({ error: 'Not authorized.' }) });
                } else {
                    res.status(400).send({ error: 'Not supported.' });
                }
            });
        }
    }
}