/**
 * Created with JetBrains WebStorm.
 * User: Amol Kulkarni
 * Date: 22/08/15
 * Time: 2:07 PM
 * To change this template use File | Settings | File Templates.
 */

var designs = [
    {id: '100', title: 'Table', desc: 'vdfkv dvdksfvjk dkvdskvdfk vdsvds', price: 10000, image:'designs/img1.jpg'},
    {id: '100', title: 'Chair', desc: 'aaa d d  ddd bbbbbb ffdffdf fdsf', price: 20000, image:'designs/img2.jpg'},
    {id: '100', title: 'Window', desc: 'fdsjbdsk vdsvdsvds vdscdsc vdscsd', price: 40000, image:'designs/img3.jpg'},
    {id: '100', title: 'Door', desc: 'poppo ooppppj pojpppk', price: 10000, image:'designs/img4.jpg'},
    {id: '100', title: 'Wall', desc: 'ppppppp oooooo iiiiiiii uuuuuu', price: 50000, image:'designs/img5.jpg'},
    {id: '100', title: 'Floor', desc: 'm mmmmmm nnnn n nn  nn n m n  n m n n n n ', price: 40000, image:'designs/img6.jpg'},
    {id: '100', title: 'Roof', desc: 'casc sa svds,c ,ds sdvds, vds', price: 50000, image:'designs/img7.jpg'}
];

exports.list=function(req,res,next){
    res.send(designs);
};

exports.create=function(req,res){
    var design = req.body;
    designs.push(design);
    res.send(design);

};

exports.designById=function(req,res,next,id){
    req.design= designs[1];
    next();
};

exports.read=function(req,res){
    res.send(req.design);
};

exports.delete=function(req,res){
    var design = req.design;
    res.send(design);

};

exports.update=function(req,res){
    var design = req.design;
    res.send(design);
};