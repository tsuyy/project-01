$(document).ready(function() {

  $.ajax({
  method: 'GET',
  url: '/api/exhibitions',
  success: renderAllExhibitions
  });

  $('#exhibition-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/api/exhibitions',
      data: formData,
      success: renderExhibition
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
  $('div[data-exhibition-id=' + deletedExhibitionId + ']').remove();
}

// when the edit button for an exhibition is clicked
function handleEditClick(e) {
  var $exhibitionRow = $(this).closest('div.row.exhibition');
  var exhibitionId = $exhibitionRow.data('exhibition-id');

  // get exhibition title and replace its field with an input element
  var title = $exhibitionRow.find('span.exhibition-title').text();
  $exhibitionRow.find('span.exhibition-title').
  html('<input class="edit-exhibition-title" value="' + title + '" placeholder="Title"></input>');

  // get the artist name and replace its field with an input element
  var artistName = $exhibitionRow.find('span.artist-name').text();
  $exhibitionRow.find('span.artist-name').
  html('<input class="edit-artist-name" value="' + artistName + '" placeholder="Artist"></input>');

  // get the location and replace its field with an input element
  var location = $exhibitionRow.find('span.exhibition-location').text();
  $exhibitionRow.find('span.exhibition-location').
  html('<input class="edit-exhibition-location" value="' + location + '" placeholder="Museum, City"></input>');

  // get the exhibition dates and replace its field with an input element
  var exhibitionDates = $exhibitionRow.find('span.exhibition-dates').text();
  $exhibitionRow.find('span.exhibition-dates').
  html('<input class="edit-exhibition-dates" value="' + exhibitionDates + '" placeholder="Exhibition Dates"></input>');

  // get website and replace its field with an input element
  var website = $exhibitionRow.find('span.website').text();
  $exhibitionRow.find('span.edit-website').
  html('<input class="edit-website" value="' + website + '" placeholder="URL"></input>');

}

// after editing an exhibition, when the save changes button is clicked
function handleSaveChangesClick(e) {
  var exhibitionId = $('.saveBtn').closest('div.row.exhibition').data('exhibition-id');
  var $exhibitionRow = $('[data-exhibition-id=' + exhibitionId + ']');

  var data = {
    title: $exhibitionRow.find('.edit-exhibition-title').val(),
    artistName: $exhibitionRow.find('.edit-artist-name').val(),
    website: $exhibitionRow.find('.edit-website').val(),
    location: $exhibitionRow.find('.edit-exhibition-location').val(),
    exhibitionDates: $exhibitionRow.find('.edit-exhibition-dates').val()

  };

  $.ajax({
    method: 'PUT',
    url: '/api/exhibitions/' + exhibitionId,
    data: data,
    success: handleUpdatedResponse
  });
}

function handleUpdatedResponse(data) {

  var exhibitionId = data._id;
  $('[data-exhibition-id=' + exhibitionId + ']').remove();
  renderExhibition(data);
}


// this function takes one exhibition and renders it to the page
function renderExhibition(exhibition) {

  var exhibitionHtml = (`

    <!-- one exhibition -->
    <div class='row exhibition' data-exhibition-id='${exhibition._id}'>

      <div class="col-md-6 col-md-offset-3">
        <div class="panel-heading">
          <div class="btn-group text-center" role="group" aria-label="...">
            <button type="button" title='delete' class="btn btn-default deleteBtn">
              <span class='glyphicon glyphicon-remove aria-hidden="true'></span>
            </button>
            <button type="button" title='edit' class="btn btn-default editBtn">
              <span class='glyphicon glyphicon glyphicon-pencil' aria-hidden='true'></span>
            </button>
            <button type="submit" title='save' class="btn btn-default saveBtn">
              <span class='glyphicon glyphicon-ok' aria-hidden='true'></span>
            </button>
          </div>
        </div>

        <div class="panel-body">

          <!-- begin exhibition internal row -->
              <div class="col-md-9 col-xs-12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <a href='${exhibition.website}'><span class='exhibition-title'>${exhibition.title}</span></a>
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
  $('.editBtn').on('click', handleEditClick);
  $('.saveBtn').on('click', handleSaveChangesClick);

}
