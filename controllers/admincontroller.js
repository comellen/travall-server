const router = require('express').Router();
const validateAdmin = require('../middleware/validateadmin');
const Travall = require('../db').import('../models/travall');
const User = require('../db').import('../models/user');
const Admin = require('../db').import('../models/admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
    Admin.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
    })
        .then(
            admin => {
                let token = jwt.sign({ id: admin.id }, process.env.SECRET, { expiresIn: 60 * 60 * 24 });
                res.json({
                    admin: admin,
                    message: 'Admin created',
                    sessionToken: token
                });
            },
            err => res.send(500, err)
        );
});

router.post('/login', (req, res) => {
    Admin.findOne({ where: { username: req.body.username } })
        .then(user => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, matches) => {
                    if (matches) {
                        let token = jwt.sign({ id: user.id },
                            process.env.SECRET, { expiresIn: 60 * 60 * 24 });
                        res.json({
                            admin: user,
                            message: "Successfully authenticated admin.",
                            sessionToken: token
                        });
                    } else {
                        res.status(502).send({ error: "Password not a match." })
                    }
                });
            } else {
                res.status(403).send({ error: "Account not found." });
            }
        });
});

router.get('/user', validateAdmin, (req, res) => {
    User.findAll()
        .then(data => { res.json(data); },
            err => { res.send(500, err.message); });
});

router.get('/travall', validateAdmin, (req, res) => {
    Travall.findAll()
        .then(data => { res.json(data); },
            err => { res.send(500, err.message); });
});

router.delete('/user/:id', validateAdmin, (req, res) => {
    User.destroy({
        where: { id: req.params.id }
    })
        .then(data => { res.send(`${data}`); },
            err => { res.send(500, err.message); });
});

router.delete('/travall/:id', validateAdmin, (req, res) => {
    Travall.destroy({
        where: { id: req.params.id }
    })
        .then(data => { res.send(`${data}`); },
            err => { res.send(500, err.message); });
});

module.exports = router;