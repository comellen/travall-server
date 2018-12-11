const router = require('express').Router();
const Activity = require('../db').import('../models/activity');

router.get('/getall', (req, res) => {
    Activity.findAll({
        where: { travallId: req.body.transport.travallId }
    })
        .then(data => { res.json(data); },
            err => { res.send(500, err.message); });
});

router.post('/create', (req, res) => {
    Activity.create({
        title: req.body.activity.title,
        date: req.body.activity.date,
        startTime: req.body.activity.startTime,
        endTime: req.body.activity.endTime,
        location: req.body.activity.location,
        description: req.body.activity.description
    })
        .then(activity => {
            activity.addUser(req.user.id);
            res.json({ newactivity: activity });
        },
            err => { res.send(500, err.message); });
});

router.post('/addself', (req, res) => {
    Activity.addUser(req.user.id)
        .then(activity => {
            res.json({ newactivity: activity });
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
        title: req.body.activity.title,
        date: req.body.activity.date,
        startTime: req.body.activity.startTime,
        endTime: req.body.activity.endTime,
        location: req.body.activity.location,
        description: req.body.activity.description
    },
        {
            where: { id: req.params.id }
        })
        .then(data => { res.json({ activityupdate: data }); },
            err => { res.send(500, err.message); });
});

module.exports = router;