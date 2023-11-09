var dog = require('../models/dog');
// List of all dogs
exports.dog_list = async function(req, res) {
    try{
    thedogs = await dog.find();
    res.send(thedogs);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific dog.
exports.dog_detail = function(req, res) {
res.send('NOT IMPLEMENTED: dog detail: ' + req.params.id);
};
// Handle dog create on POST.
exports.dog_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: dog create POST');
};
// Handle dog delete form on DELETE.
exports.dog_delete = function(req, res) {
res.send('NOT IMPLEMENTED: dog delete DELETE ' + req.params.id);
};
// Handle dog update form on PUT.
exports.dog_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: dog update PUT' + req.params.id);
};
exports.dog_view_all_Page = async function(req, res) {
    try{
    thedogs = await dog.find();
    res.render('dog', { title: 'dog Search Results', results: thedogs });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.dog_create_post = async function(req, res) {
    console.log(req.body)
    let document = new dog();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dog_type":"goat", "cost":12, "size":"large"}
    document.dog_color = req.body.dog_color;
    document.dog_breed = req.body.dog_breed;
    document.dog_price = req.body.dog_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   }
  