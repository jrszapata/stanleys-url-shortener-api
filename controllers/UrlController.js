const Url = require('../models/Url');
const nanoid = require('nanoid');

/**
 * Create a new record for the url being shortened
 */
exports.store = async (req, res) => {
    const url = Url.create({
        hash: nanoid(10),
        link: req.body.link, 
    });
    res.json(url);
};

/**
 * Return the last created short urls
 */
exports.getList = async (req, res, next) => {
    const urls = await Url.findAndCountAll();
    res.json(urls);
};
