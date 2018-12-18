const router = require('express').Router();
const Transport = require('../db').import('../models/transport');

router.get('/getall/:travallid', (req, res) => {
    Transport.findAll({
        where: { travallId: req.params.travallid }
    })
        .then(data => { res.json(data); },
            err => { res.send(500, err.message); });
});

router.get('/:id', (req, res) => {
    Transport.findOne({
        where: { id: req.params.id }
    })
        .then(data => res.send(data),
        err => res.send(500, err.message));
});

router.post('/create', (req, res) => {
    Transport.create({
        dOrA: req.body.dOrA,
        type: req.body.type,
        date: req.body.date,
        upTime: req.body.upTime,
        downTime: req.body.downTime,
        participants: req.body.participants,
        travallId: req.body.travallId
    })
        .then(transport => {
            res.json({ transport });
        },
            err => { res.send(500, err.message); });
});


router.delete('/delete/:id', (req, res) => {
    Transport.destroy({
        where: { id: req.params.id }
    })
        .then(data => { res.send(`${data}`); },
            err => { res.send(500, err.message); });
});

router.put('/update/:id', (req, res) => {
    Transport.update({
        dOrA: req.body.dOrA,
        type: req.body.type,
        date: req.body.date,
        upTime: req.body.upTime,
        downTime: req.body.downTime,
        participants: req.body.participants
    },
        {
            where: { id: req.params.id }
        })
        .then(data => { res.json({ transportupdate: data }); },
            err => { res.send(500, err.message); });
});

module.exports = router;