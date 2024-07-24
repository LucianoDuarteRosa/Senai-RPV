const router = require('./jobRouter')

module.exports = function(app, express){
    app.use(express.json());
    app.use(router);
};