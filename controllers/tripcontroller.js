const router = require('express').Router();
const Trip = require('../db').import('../models/trip');

router.get('/getall', (req, res) => {
    let owner = req.user.id;
    Trip.findAll({
        where: { owner: owner }
    })
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});

router.post('/create', (req, res) => {
    Trip.create({
        tripStart: req.body.trip.tripStart,
        tripEnd: req.body.trip.tripEnd,
        location: req.body.trip.location,
        tripType: req.body.trip.tripType
    })
        .then((data) => {
            res.json({
                newtrip: data
            });
        },
            (err) => {
                res.send(500, err.message);
            }
        );
});

router.delete('/delete/:id', (req, res) => {
    let data = req.params.id;
    let owner = req.user.id;
    Trip.destroy({
        where: { id: data, owner: owner }
    })
        .then(
            deleteSuccess = (data) => {
                res.send(`${data}`);
            },
            deleteError = (err) => {
                res.send(500, err.message);
            }
        );
});

router.put('/update/:id', (req, res) => {
    let data = req.params.id;
    let owner = req.user.id;
    Trip.update({
        tripStart: req.body.trip.tripStart,
        tripEnd: req.body.trip.tripEnd,
        location: req.body.trip.location,
        tripType: req.body.trip.tripType
    },
        { where: { id: data, owner: owner } }
    )
        .then(
            updateSuccess = (data) => {
                res.json({
                    tripupdate: data
                });
            },
            updateError = (err) => {
                res.send(500, err.message);
            }
        )
});

module.exports = router;