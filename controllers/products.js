const products = require('../data/products');

const list = (req, res) => {
    return res.json(products)
};

const show = (req, res) => {
    return res.json(products.find(products => products._id === parseInt(req.params.id)))
};

const create = (req, res) => {
    const record = {
        ... req.body,
        _id: products[products.length -1]._id + 1
    }

    products.push(record);

    return res.json(record);
};

module.exports = {list, show, create}