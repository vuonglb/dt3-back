var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

const FabricSkew = require('../../Schema/TestFabric/TestFabricSkews');
const FabricSkewDetail = require('../../Schema/TestFabric/TestFabricSkewsDetail');

const _ = require('lodash')
const moment = require('moment')

router.get('/get', (req, res, next) => {
    if (!req.query.record_status) {
        req.query.record_status = 'O'
    }
    console.log('req.query._ids =>' + JSON.stringify(req.query._ids))
    if (req.query._ids) {
        let ids = []
        for (let i = 0; i < req.query._ids.length; i++) {
            ids.push(new mongoose.mongo.ObjectId(req.query._ids[i]))
        }
        delete req.query._ids
        req.query._id = { $in: ids }
    }
    FabricSkew.find(req.query)
        .sort({ 'create_date': 'desc' })
        .populate({ path: 'details', match: { record_status: 'O' } })
        .exec((err, weight_data) => {
            if (!err) {
                return res.status(200).send({ valid: true, data: weight_data });
            }
            else {
                return res.status(200).send({ valid: false, messsage: err });
            }
        })

})

module.exports = router;