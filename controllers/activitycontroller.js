const router = require('express').Router();
const Activity = require('../db').import('../models/activity');

router.get('/getall/:travallid', (req, res) => {
    Activity.findAll({
        where: { travallId: req.params.travallid }
    })
        .then(data => { res.json(data); },
            err => { res.send(500, err.message); });
});

router.get('/:id', (req, res) => {
    Activity.findOne({
        where: { id: req.params.id }
    })
        .then(data => res.send(data),
        err => res.send(500, err.message));
});

router.post('/create', (req, res) => {
    Activity.create({
        title: req.body.title,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        location: req.body.location,
        description: req.body.description,
        travallId: req.body.travallId
    })
        .then(activity => {
            res.json({ activity });
        },
            err => { res.send(500, err.message); });
});


router.delete('/delete/:id', (req, res) => {
    Activity.destroy({
        where: { id: req.params.id }
    })
    .then(data => { res.send(`${data}`); },
    err => { res.send(500, err.message); });
});

router.put('/update/:id', (req, res) => {
    Activity.update({
        title: req.body.title,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        location: req.body.location,
        description: req.body.description
    },
    {
        where: { id: req.params.id }
    })
    .then(data => { res.json({ activityupdate: data }); },
    err => { res.send(500, err.message); });
});

module.exports = router;