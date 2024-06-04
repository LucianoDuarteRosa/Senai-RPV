const router = require('./pessoaRouter')

module.exports = function(app, express){
    app.use(express.json());
    app.use(router);
};