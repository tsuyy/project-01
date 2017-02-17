var db = require("./models");

var exhibitionList =[

  {
    title: 'Transcending Boundaries',
    artistName: 'teamLab',
    location: 'PACE Gallery, London',
    // description: '',
    exhibitionDates: 'January 25 - March 11, 2017',
    website: 'http://pacelondon.team-lab.net/'
  //   images: [
  //     'http://www.studiointernational.com/images/articles/t/teamlab-2017/5.jpg',
  //     'http://www.pmq.org.hk/media/upload/DF23_Teamlab_08.jpg',
  //     'http://arte.sky.it/wp-content/uploads/2016/05/teamlab-installazione-multimediale-flowers-and-people-california.jpeg',
  //     'https://pbs.twimg.com/media/CqFq84eW8AACigR.jpg'
  //  ],
  //   videoLink: 'https://www.youtube.com/watch?v=bqDeXfWKb-k'
  },

  {
    title: 'Immersive Light',
    artistName: 'James Turrell',
    location: 'The Long Museum, Shanghai',
    // description: '',
    exhibitionDates: 'January 22 - May 21, 2017',
    website: 'http://jamesturrell.com/'
  //   images: [
  //     'https://s-media-cache-ak0.pinimg.com/originals/40/e5/09/40e509eececd8b18cbdcf51d8a782f94.jpg',
  //     'http://p.ledinside.com/led/2013-09/1380081913_25169.jpg',
  //     'http://minniemuse.com/wp-content/uploads/2012/11/james-turrell3.jpg',
  //     'http://nga.gov.au/AboutUs/MediaCentre/Turrell/Images/print/20141210nga2383_0008.jpg'
  //  ],
  //  videoLink: 'https://www.youtube.com/watch?v=h3wrrlu6a4k'
  }

  // {
  //   title: 'Rain Room',
  //   artist: 'Random International',
  //   locations: 'LACMA, Los Angeles',
  //   description: String,
  //   exhibitionDates: String,
  //   website: String,
  //   images: [ String ]
  // },

  // {
  //   title: String,
  //   artist: String,
  //   locations: String,
  //   description: String,
  //   exhibitionDates: String,
  //   website: String,
  //   images: [ String ]
  // },

  // {
  //   title: String,
  //   artist: String,
  //   locations: String,
  //   description: String,
  //   exhibitionDates: String,
  //   website: String,
  //   images: [ String ],
  //   videoLink: ''
  // }
];


  db.Exhibition.remove({}, function(err, exhibitions){
  console.log("cleared");
  });

  db.Exhibition.create(exhibitionList, function(err, exhibitions){
    if (err) { return console.log('ERROR', err); }
    console.log("all exhibitions:", exhibitions);
    console.log("created", exhibitions.length, "exhibitions");
  process.exit();
});
