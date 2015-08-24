/**
 * Created with JetBrains WebStorm.
 * User: Amol Kulkarni
 * Date: 22/08/15
 * Time: 1:51 PM
 * To change this template use File | Settings | File Templates.
 */
var PORT = (process.env.PORT || 3000);
var app = require('./config/express')();

//Configure express routes
require('./config/routes.js')(app);

app.listen(PORT,function(){
    console.log('listening on port '+PORT);
});
