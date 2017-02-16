console.log('SANITY CHECK');

$(document).ready(function() {

  $.ajax({
  method: 'GET',
  url: '/api/exhibitions',
  success: renderMultipleExhibitions
  });

});

function renderMultipleExhibitions(exhibitions) {
  exhibitions.forEach(function(exhibition) {
    renderExhibition(exhibition);
  });
}

// this function takes one exhibition and renders it to the page
function renderExhibition(exhibition) {
  console.log('rendering exhibition', exhibition);

  var exhibitionHtml = (`
    <div class="row exhibition">

      <div class="col-md-10 col-md-offset-1">
        <div class="panel-heading">
          <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default">
              <span class='glyphicon glyphicon-remove aria-hidden="true'></span>
            </button>
            <button type="button" class="btn btn-default">
              <span class='glyphicon glyphicon glyphicon-pencil aria-hidden="true'></span>
            </button>
          </div>
        </div>
        <div class="panel-body">

          <!-- begin exhibition internal row -->
            <div class='row'>
              <div class="col-md-3 col-xs-12 thumbnail exhibition-thumb">
                <img src="" alt="exhibition image">
              </div>

              <div class="col-md-9 col-xs-12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4 class='inline-header'>Title :</h4>
                    <span class='exhibition-title'>${exhibition.title}</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Artist Name :</h4>
                    <span class='artist-name'>${exhibition.artistName}</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Location :</h4>
                    <span class='exhibition-location'>${exhibition.location}</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Exhibition Dates :</h4>
                    <span class='exhibition-dates'>${exhibition.exhibitionDates}</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Website :</h4>
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
}
