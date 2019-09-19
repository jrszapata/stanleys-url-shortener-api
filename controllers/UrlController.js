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
                message: "Error creating the url"
            },
        });
    }
};

/**
 * Return the last created short urls
 */
exports.getList = async (req, res, next) => {
    const urls = await Url.findAndCountAll();
    res.json(urls);
};
