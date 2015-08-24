/**
 * Created with JetBrains WebStorm.
 * User: Amol Kulkarni
 * Date: 22/08/15
 * Time: 2:03 PM
 * To change this template use File | Settings | File Templates.
 */

var designs = require('../controllers/designs.controller');

module.exports=function(app){

    app.route('/api/designs')
        .get(designs.list)
        .post(designs.create);

    app.route('/api/designs/:designId')
        .get(designs.read)
        .put(designs.update)
        .delete(designs.delete);

    app.param('designId',designs.designById);

};