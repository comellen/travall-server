const router = require('express').Router();
const Travall = require('../db').import('../models/travall');

router.post('/create', (req, res) => {
    Travall.create({
        title: req.body.travall.title,
        location: req.body.travall.location,
        type: req.body.travall.type,
        startDate: req.body.travall.startDate,
        endDate: req.body.travall.endDate
    })
        .then((data) => {
            res.json({
                newtravall: data
            });
        },
            (err) => {
                res.send(500, err.message);
            }
        );
});

// router.get('/getall', (req, res) => {
//     let owner = req.user.id;
//     Travall.findAll({
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


// router.delete('/delete/:id', (req, res) => {
//     let data = req.params.id;
//     let owner = req.user.id;
//     Travall.destroy({
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
//     Travall.update({
//         travall: req.body.travall.travall,
//         title: req.body.travall.title,
//         location: req.body.travall.location,
//         type: req.body.travall.type,
//         startDate: req.body.travall.startDate,
//         endDate: req.body.travall.endDate
//     },
//         { where: { id: data, owner: owner } }
//     )
//         .then(
//             updateSuccess = (data) => {
//                 res.json({
//                     travallupdate: data
//                 });
//             },
//             updateError = (err) => {
//                 res.send(500, err.message);
//             }
//         )
// });

module.exports = router;