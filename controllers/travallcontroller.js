const router = require('express').Router();
const Travall = require('../db').import('../models/travall');
const User = require('../db').import('../models/user');

router.post('/create', (req, res) => {
    Travall.create({
        title: req.body.travall.title,
        location: req.body.travall.location,
        type: req.body.travall.type,
        startDate: req.body.travall.startDate,
        endDate: req.body.travall.endDate
    })
        .then(travall => {
            travall.addUser(req.user.id);
            res.json({ newtravall: travall });
        },
            err => { res.send(500, err.message); });
});

router.post('/adduser', (req, res) => {
    Travall.findById(req.body.newUser.thisTravallID)
        .then(travall => {
            User.findOne({ where: { email: req.body.newUser.email } })
                .then(user => {
                    travall.addUser(user.id)
                })
                .then(data => { res.json({ newUser: data }); },
                    err => { res.send(500, err.message); });
        });
});
//REQUEST TO SEND TO ABOVE FUNCTION:
// {
//"newUser": {
//"thisTravallID": "<integer>",
//"email": "<entered email>"
// }
// }

router.delete('/dropuser', (req, res) => {
    Travall.findById(req.body.dropUser.thisTravallID)
        .then(travall => {
            User.findOne({ where: { id: req.body.dropUser.userID } })
                .then(user => {
                    travall.removeUser(user.id)
                })
                .then(data => { res.json({ dropped: data }); },
                    err => { res.send(500, err.message); });
        });
});
//REQUEST TO SEND TO ABOVE FUNCTION:
// {
//"dropUser": {
//"thisTravallID": "<integer>",
//"userID": "id of user to drop"
// }
// }

router.delete('/dropself', (req, res) => {
    Travall.findById(req.body.dropUser.thisTravallID)
        .then(travall => {
            User.findOne({ where: { id: req.user.id } })
                .then(user => {
                    travall.removeUser(user.id)
                })
                .then(data => { res.json({ dropped: data }); },
                    err => { res.send(500, err.message); });
        });
});
//REQUEST TO SEND TO ABOVE FUNCTION:
// {
//"dropUser": {
//"thisTravallID": "<integer>"
// }
// }

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