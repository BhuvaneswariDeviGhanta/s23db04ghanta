var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dog_controller = require('../controllers/dog');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// dog ROUTES ///
// POST request for creating a dog.
router.post('/dogs', dog_controller.dog_create_post);
// DELETE request to delete dog.
router.delete('/dogs/:id', dog_controller.dog_delete);
// PUT request to update dog.
router.put('/dogs/:id', dog_controller.dog_update_put);
// GET request for one dog.
router.get('/dogs/:id', dog_controller.dog_detail);
// GET request for list of all dog items.
router.get('/dogs', dog_controller.dog_list);
module.exports = router;
// Handle dog update form on PUT.
exports.dog_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await dog.findById( req.params.id)
// Do updates of properties
if(req.body.dog_color)
toUpdate.dog_color = req.body.dog_color;
if(req.body.dog_breed) toUpdate.dog_breed = req.body.dog_breed;
if(req.body.dog_price) toUpdate.dog_price = req.body.dog_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};