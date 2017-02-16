/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/exhibitions
function index(req, res) {
  // send back all exhibitions as JSON
  db.Exhibition.find({}, function(err, allExhbitions) {
    res.json(allExhbitions);
  });
}

// POST /api/exhibitions
function create(req, res) {
  // var newAlbum = req.body;
  // var genres = req.body.genres.split(',').map(function(item) {
  //   return item.trim();
  // });
  // req.body.genres = genres;
  // db.Album.create(newAlbum, function(err, newAlbum) {
  //   res.json(newAlbum);
  // });
}

// GET /api/exhibitions/:exhibitionId
function show(req, res) {
  // find one exhibition by id and send it back as JSON
  db.Exhibition.findById(req.params.exhibitionId, function(err, foundExhibition) {
    if(err) { console.log('albumsController.show error', err); }
    console.log('exhibitionController.show responding with', foundExhibition);
    res.json(foundExhibition);
  });}

// DELETE /api/exhibitions/:exhibitionId
function destroy(req, res) {
  db.Exhibition.findOneAndRemove({ _id: req.params.exhibitionId }, function(err, foundExhibition){
    res.json(foundExhibition);
  });
}

// PUT or PATCH /api/exhibitions/:exhibitionId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
