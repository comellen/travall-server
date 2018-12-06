// const router = require('express').Router();
// const Transport = require('../db').import('../models/transport');

// router.get('/getall', (req, res) => {
//     let owner = req.user.id;
//     Transport.findAll({
//         where: { owner: owner }
//     })
//         .then(
//             function findAllSuccess(data) {
//                 res.json(data);
//             },
//             function findAllError(err) {
//                 res.send(500, err.message);
//             }
//         );
// });

// router.post('/create', (req, res) => {
//     Transport.create({
//         transport: req.body.transport.transport,
//         dOrA: req.body.transport.dOrA,
//         type: req.body.transport.type,
//         date: req.body.transport.date,
//         upTime: req.body.transport.upTime,
//         downTime: req.body.transport.downTime,
//         participants: req.body.transport.participants,
//     })
//         .then((data) => {
//             res.json({
//                 newtransport: data
//             });
//         },
//             (err) => {
//                 res.send(500, err.message);
//             }
//         );
// });

// router.delete('/delete/:id', (req, res) => {
//     let data = req.params.id;
//     let owner = req.user.id;
//     transport.destroy({
//         where: { id: data, owner: owner }
//     })
//         .then(
//             deleteSuccess = (data) => {
//                 res.send(`${data}`);
//             },
//             deleteError = (err) => {
//                 res.send(500, err.message);
//             }
//         );
// });

// router.put('/update/:id', (req, res) => {
//     let data = req.params.id;
//     let owner = req.user.id;
//     Transport.update({
//         transport: req.body.transport.transport,
//         dOrA: req.body.transport.dOrA,
//         type: req.body.transport.type,
//         date: req.body.transport.date,
//         upTime: req.body.transport.upTime,
//         downTime: req.body.transport.downTime,
//         participants: req.body.transport.participants,
//     },
//         { where: { id: data, owner: owner } }
//     )
//         .then(
//             updateSuccess = (data) => {
//                 res.json({
//                     transportupdate: data
//                 });
//             },
//             updateError = (err) => {
//                 res.send(500, err.message);
//             }
//         )
// });

// module.exports = router;