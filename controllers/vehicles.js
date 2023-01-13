const vehicles = require('../data/vehicles');

const list = (req, res) => {
    return res.json(vehicles)
};

const show = (req, res) => {
    return res.json(vehicles.find(vehicles => vehicles._id === parseInt(req.params.id)))
};

const create = (req, res) => {
    const record = {
        ... req.body,
        _id: vehicles[vehicles.length -1]._id + 1
    }

    vehicles.push(record);
    return res.json(record);
};

module.exports = {list, show, create}