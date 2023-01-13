const comments = require('../data/comments');

const list = (req, res) => {
    return res.json(comments)
};
const show = (req, res) => {
    return res.json(comments.find(comment => comment._id === parseInt(req.params.id)))
}
const create = (req, res) => {
    const record = {
        ... req.body,
        _id: comments[comments.length -1]._id + 1
    }

    comments.push(record);

    return res.json(record);
}

module.exports = {
    list,
    show,
    create
}