

class NotFoundController {
    constructor(){}

    notFound(req, res) {
        res.json({
            error: 'Not found resource'
        }, 404);
    }
}

module.exports = new NotFoundController;