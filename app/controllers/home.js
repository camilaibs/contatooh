module.exports = function() {
    var controller = {};

    controller.index = function(req, res) {
        // return index.ejs
        res.render('index', {nome: 'Express'});
    }

    return controller;
}