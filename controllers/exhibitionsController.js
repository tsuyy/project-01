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
  // create an album based on request body and send it back as JSON
  console.log('body', req.body);

  db.Exhibition.create(req.body, function(err, exhibition) {
    if (err) { console.log('error', err); }
    console.log(exhibition);
    res.json(exhibition);
  });
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
  // find one exhibition by id, update it based on request body,
  console.log('updating with data', req.body);
  db.Exhibition.findById(req.params.exhibitionId, function(err, foundExhibition) {
    if(err) { console.log('exhibitionsController.update error', err); }
    foundExhibition.title = req.body.title;
    foundExhibition.artistName = req.body.artistName;
    foundExhibition.location = req.body.location;
    foundExhibition.exhibitionDates = req.body.exhibitionDates;
    foundExhibition.website = req.body.website;
    foundExhibition.save(function(err, savedExhibition) {
      if(err) { console.log('saving altered exhibition failed'); }
      res.json(savedExhibition);
    });
  });
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
