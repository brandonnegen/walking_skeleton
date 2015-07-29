var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');



mongoose.connect('mongodb://localhost/basic_walking_skeleton');

var Cat = mongoose.model('Cat', {name:String});

router.post('/add', function(request, response, next){
   var kitty = new Cat({name: request.body.name});
    kitty.save(function(err){
       if(err)console.log('meow %s', err);
        response.send(kitty.toJSON());
        console.log("Post is working");
        //next();
    });
});

router.get('/cats', function(request, response, next){
   return Cat.find({}).exec(function(err, cats){
      if(err) throw new Error(err);
       response.send(JSON.stringify(cats));
       console.log("Get cats is working");
       //next();
   });
});

router.get('/*', function(request, response, next){
   console.log("Here is a console log");
    var file = request.params[0] || 'views/index.html';
    response.sendFile(path.join(__dirname, '../public', file));
    console.log("Get html is working");
        //next();
});

module.exports = router;