var db = require("./models");

var exhibitionList =[

  {
    title: 'Transcending Boundaries',
    artistName: 'teamLab',
    location: 'PACE Gallery, London',
    // description: '',
    exhibitionDates: 'Jan 25 - Mar 11, 2017',
    website: 'http://pacelondon.team-lab.net/',
    image: 'http://www.studiointernational.com/images/articles/t/teamlab-2017/5.jpg'
      // 'http://www.pmq.org.hk/media/upload/DF23_Teamlab_08.jpg',
      // 'http://arte.sky.it/wp-content/uploads/2016/05/teamlab-installazione-multimediale-flowers-and-people-california.jpeg',
      // 'https://pbs.twimg.com/media/CqFq84eW8AACigR.jpg'

  //   videoLink: 'https://www.youtube.com/watch?v=bqDeXfWKb-k'
  },

  {
    title: 'Immersive Light',
    artistName: 'James Turrell',
    location: 'The Long Museum, Shanghai',
    // description: '',
    exhibitionDates: 'Jan 22 - May 21, 2017',
    website: 'http://www.pacegallery.com/artists/473/james-turrell',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/40/e5/09/40e509eececd8b18cbdcf51d8a782f94.jpg'
  //     'http://p.ledinside.com/led/2013-09/1380081913_25169.jpg',
  //     'http://minniemuse.com/wp-content/uploads/2012/11/james-turrell3.jpg',
  //     'http://nga.gov.au/AboutUs/MediaCentre/Turrell/Images/print/20141210nga2383_0008.jpg'
  //  videoLink: 'https://www.youtube.com/watch?v=h3wrrlu6a4k'
  },

  {
    title: 'Rain Room',
    artistName: 'Random International',
    location: 'LACMA, Los Angeles',
    // description: String,
    exhibitionDates: 'Nov 1, 2015 - Jan 22, 2017',
    website: 'http://random-international.com/work/rainroom/',
    image: null
  },

  {
    title: 'Infinity Mirrored Room',
    artistName: 'Yayoi Kusama',
    location: 'The Broad, Los Angeles',
    // description: String,
    exhibitionDates: 'Oct 2017 - Jan 2018',
    website: 'http://thebroad.org/art/special-exhibitions/yayoi-kusama-infinity-mirrors',
    image: 'http://www.thebroad.org/sites/default/files/styles/art_page_slide_show_960px_matte/public/kusama_the_souls_of_millions_1.jpg?itok=afEx2v96'
  },

  {
    title: 'Crystal Universe',
    artistName: 'teamLab',
    location: 'Pola Museum, Ginza JP',
    // description: String,
    exhibitionDates: 'Jul 16 - Aug 31, 2016',
    website: 'https://www.team-lab.net/w/crystaluniverse/',
    image: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/160803135630-14-teamlab-super-169.jpg'

  }
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
