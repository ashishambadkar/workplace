/**
 * Created with JetBrains WebStorm.
 * User: Amol Kulkarni
 * Date: 22/08/15
 * Time: 1:53 PM
 * To change this template use File | Settings | File Templates.
 */
module.exports=function(app){

    require('../routes/designs.route')(app);

    app.use('/api/*',function(req, res, next) {
        res.json({'error':'No Such Service Present'},404);
    });

    app.use('*',function(req, res, next) {
        res.send('<html><body><h1>404 Page Not Found</h1></body></html>',404);
    });
}
