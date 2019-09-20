const Url = require('../models/Url');
const nanoid = require('nanoid');
const {baseUrl} = require('../helpers');

/**
 * Create a new record for the url being shortened
 */
exports.store = async (req, res) => {
    try {
        const [url] = await Url.findOrCreate({ 
            where: { link: req.body.link },
            defaults: { link: req.body.link, hash: nanoid(10) }
        });
        const data = {
          generatedUrl: baseUrl(url.hash),
          ...url.toJSON()
        };
        res.json(data);
    } catch(e) {
        res.json({
            error: {
                message: "Error retrieving the data"
            },
        });
    }
};

/**
 * Return the short urls sorted by created_at
 */
exports.getList = async (req, res, next) => {
    try {
        const limit = parseInt(req.params.limit) > 0 ? req.params.limit : 10;
        const offset = parseInt(req.params.offset) > 0 ? req.params.offset : 0

        const urls = await Url.findAndCountAll({
            limit,
            offset,
            order: [['createdAt', 'DESC']]
        });

        res.json(urls);
    } catch(e) {
        res.json({
            error: {
                message: "Error retrieving the data"
            },
        });
    }
};

/**
 * Return top 100 urls
 */
exports.getTop = async (req, res, next) => {
    try {
        const urls = await Url.findAndCountAll({
            limit: 100,
            order: [['createdAt', 'DESC']]
        });
        res.json(urls);

    } catch(e) {
        res.json({
            error: {
                message: "Error retrieving the data"
            },
        });
    }
};
