const bob = require('../models/bob')

function index(req, res) {
    // Looks in the views folder for "bob/Index" and passes { bob } data to the view (kind of like a server props object)
    res.render('bob/Index', { bob })
}

// Those anonymous callback functions now have names: "index" and "show"
function show(req, res) {
    const index = req.params.index;
    res.render('bob/Show', { index });
}

module.exports = { index, show }