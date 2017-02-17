console.log('SANITY CHECK');

$(document).ready(function() {

  $.ajax({
  method: 'GET',
  url: '/api/exhibitions',
  success: renderAllExhibitions
  });

  $('#exhibition-form form').on('submit', '.addBtn', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/exhibitions', formData, function(e) {
      console.log('exhibition after POST', exhibition);
      renderExhition(exhibition);  //render the server's response
    });
    $(this).trigger("reset");
  });

});

function renderAllExhibitions(exhibitions) {
  exhibitions.forEach(function(exhibition) {
    renderExhibition(exhibition);
  });
}

function handleDeleteClick(e) {
  var exhibitionId = $(this).parents('.exhibition').data('exhibition-id');
    $.ajax({
      url: '/api/exhibitions/' + exhibitionId,
      method: 'DELETE',
      success: handleDeleteSuccess
    });
  }

// // callback after DELETE /api/exhibitions/:id
function handleDeleteSuccess(data) {
  var deletedExhibitionId = data._id;
  console.log('deleting : ', deletedExhibitionId);
  $('div[data-exhibition-id=' + deletedExhibitionId + ']').remove();
}

// when the edit button for an exhibition is clicked
// function handleEditClick(e) {
//   var $exhibitionRow = $(this).closest('.exhibition');
//   var exhibitionId = $exhibitionRow.data('exhibition-id');
//   console.log('edit exhibition', exhibitionId);
//
//   // get the album name and replace its field with an input element
//   var exhibitionName = $exhibitionRow.find('span.exhibition-name').text();
//   $exhibitionRow.find('span.exhibition-name').html('<input class="edit-album-name" value="' + albumName + '"></input>');
//
//   // get the artist name and replace its field with an input element
//   var artistName = $albumRow.find('span.artist-name').text();
//   $albumRow.find('span.artist-name').html('<input class="edit-artist-name" value="' + artistName + '"></input>');
//
//   // get the releasedate and replace its field with an input element
//   var releaseDate = $albumRow.find('span.album-releaseDate').text();
//   $albumRow.find('span.album-releaseDate').html('<input class="edit-album-releaseDate" value="' + releaseDate + '"></input>');
// }


// this function takes one exhibition and renders it to the page
function renderExhibition(exhibition) {
  console.log('rendering exhibition', exhibition);

  var exhibitionHtml = (`

    <!-- one exhibition -->
    <div class='row exhibition' data-exhibition-id='${exhibition._id}'>

      <div class="col-md-10 col-md-offset-1">
        <div class="panel-heading">
          <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default deleteBtn">
              <span class='glyphicon glyphicon-remove aria-hidden="true'></span>
            </button>
            <button type="button" class="btn btn-default editBtn">
              <span class='glyphicon glyphicon glyphicon-pencil aria-hidden="true'></span>
            </button>
          </div>
        </div>
        <div class="panel-body">

          <!-- begin exhibition internal row -->
            <div class='row'>
              <div class="col-md-3 col-xs-12 thumbnail exhibition-thumb">
                <img src="http://im.altervista.org/alterpages/img-default.png" alt="exhibition image">
              </div>

              <div class="col-md-9 col-xs-12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <span class='exhibition-title'>${exhibition.title}</span>
                  </li>

                  <li class="list-group-item">
                    <span class='artist-name'>${exhibition.artistName}</span>
                  </li>

                  <li class="list-group-item">
                    <span class='exhibition-location'>${exhibition.location}</span>
                  </li>

                  <li class="list-group-item">
                    <span class='exhibition-dates'>${exhibition.exhibitionDates}</span>
                  </li>

                  <li class="list-group-item">
                    <span class='exhibition-website'>${exhibition.website}</span>
                  </li>

                </ul>
              </div>

            </div>
            <!-- end of exhibition internal row -->

          </div>
        </div>
      </div>
    </div>
    <!-- end one exhibition -->
  `);

  $('#exhibitions').prepend(exhibitionHtml);
  $('.deleteBtn').on('click', handleDeleteClick);
  // $('#exhibitions').on('click', '.editBtn', handleEditClick);

}
