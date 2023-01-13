const contacts = require('../data/contacts.js');

const list = (req, res) => {
    return res.json(contacts)
}
const show = (req, res) => {
    return res.json(contacts.find(contact => contact._id === parseInt(req.params.id)))
}
const create = (req, res) => {
    const record = {
        ... req.body,
        _id: contacts[contacts.length -1]._id + 1
    }

    contacts.push(record);

    return res.json(record);
}

module.exports = {
    list,
    show,
    create
}