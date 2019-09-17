const Url = require('../models/Url');

class RedirectorController {

    constructor() {
      this.redirect = this.redirect.bind(this);
    }

    /** Redirect to the linked url */
    async redirect (req, res) {
      const url = await Url.findOne({ where: {hash: req.params.hash }});
      res.redirect(url.link)
    }
}

module.exports = new RedirectorController;