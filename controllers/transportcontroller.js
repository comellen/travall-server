const router = require('express').Router();
const Transport = require('../db').import('../models/transport');

router.get('/getall', (req, res) => {
    Transport.findAll({
        where: { travallId: req.body.transport.travallId }
    })
        .then(data => { res.json(data); },
            err => { res.send(500, err.message); });
});

router.post('/create', (req, res) => {
    Transport.create({
        transport: req.body.transport.transport,
        dOrA: req.body.transport.dOrA,
        type: req.body.transport.type,
        date: req.body.transport.date,
        upTime: req.body.transport.upTime,
        downTime: req.body.transport.downTime,
        travallId: req.body.transport.travallId
    })
        .then(transport => {
            res.json({ newtransport: transport });
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
        transport: req.body.transport.transport,
        dOrA: req.body.transport.dOrA,
        type: req.body.transport.type,
        date: req.body.transport.date,
        upTime: req.body.transport.upTime,
        downTime: req.body.transport.downTime
    },
    {
        where: { id: req.params.id }
    })
    .then(data => { res.json({ transportupdate: data }); },
    err => { res.send(500, err.message); });
});

module.exports = router;
    // router.post('/addself', (req, res) => {
    //     Transport.addUser(req.user.id)
    //         .then(transport => {
    //             res.json({ newtransport: transport });
    //         },
    //             err => { res.send(500, err.message); });
    // });