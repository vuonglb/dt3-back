var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var jwt = require('../helper');

const user = require('../Schema/User/User');
const deptInfo = require('../Schema/DepartmentInfo/DepartmentInfo');

router.post('/login', (req, res, next) => {
    user.findOne({ username: req.body.username, password: req.body.password }, (err, objUser) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (objUser) {
            const tokenStr = jwt.makeToken(objUser);
            const resInfo = {
                dept: objUser.dept,
                token: tokenStr
            }
            return res.status(200).json(resInfo);
        }
        else {
            return res.status(500).send("User not found, please try again");
        }
    });
});

router.post('/update-dept-info', (req, res, next) => {
    return res.status(200).json(req.body);
});

module.exports = router;