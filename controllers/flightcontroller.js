const router = require('express').Router();
const Flight = require('../db').import('../models/flight');

router.get('/getall', (req, res) => {
    let owner = req.user.id;
    Flight.findAll({
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
    Flight.create({
        dateArrival: req.body.flight.dateArrival,
        dateDeparture: req.body.flight.dateDeparture,
        airlineTo: req.body.flight.airlineTo,
        airlineFrom: req.body.flight.airlineFrom
    })
        .then((data) => {
            res.json({
                newflight: data
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
    Flight.destroy({
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
    Flight.update({
        dateArrival: req.body.flight.dateArrival,
        dateDeparture: req.body.flight.dateDeparture,
        airlineTo: req.body.flight.airlineTo,
        airlineFrom: req.body.flight.airlineFrom
    },
        { where: { id: data, owner: owner } }
    )
        .then(
            updateSuccess = (data) => {
                res.json({
                    flightupdate: data
                });
            },
            updateError = (err) => {
                res.send(500, err.message);
            }
        )
});

module.exports = router;