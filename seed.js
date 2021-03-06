var db = require("./models");

var exhibitionList =[

  {
    title: 'Transcending Boundaries',
    artistName: 'teamLab',
    location: 'PACE Gallery, London',
    exhibitionDates: 'Jan 25 - Mar 11, 2017',
    website: 'http://pacelondon.team-lab.net/',
    image: 'http://localhost:3000/images/TL-thumb.jpg'
  },

  {
    title: 'Immersive Light',
    artistName: 'James Turrell',
    location: 'The Long Museum, Shanghai',
    exhibitionDates: 'Jan 22 - May 21, 2017',
    website: 'http://www.pacegallery.com/artists/473/james-turrell',
    image: 'http://localhost:3000/images/JT-thumb.jpg'
  },

  {
    title: 'Rain Room',
    artistName: 'Random International',
    location: 'LACMA, Los Angeles',
    exhibitionDates: 'Nov 1, 2015 - Jan 22, 2017',
    website: 'http://random-international.com/work/rainroom/',
    image: 'http://localhost:3000/images/RI-thumb.jpg'
  },

  {
    title: 'Infinity Mirrored Room',
    artistName: 'Yayoi Kusama',
    location: 'The Broad, Los Angeles',
    exhibitionDates: 'Oct 2017 - Jan 2018',
    website: 'http://thebroad.org/art/special-exhibitions/yayoi-kusama-infinity-mirrors',
    image: 'http://localhost:3000/images/YK-thumb.jpg'
  },

  {
    title: 'Crystal Universe',
    artistName: 'teamLab',
    location: 'Pola Museum, Ginza JP',
    exhibitionDates: 'Jul 16 - Aug 31, 2016',
    website: 'https://www.team-lab.net/w/crystaluniverse/',
    image: 'http://localhost:3000/images/TL-thumb.jpg'
  },

  {
    title: 'Museum of Feelings',
    artistName: 'N/A',
    location: 'Brookfield Place,    New York City',
    exhibitionDates: 'Nov 24 - Dec 15, 2016',
    website: 'https://www.themuseumoffeelings.com/',
    image: 'http://localhost:3000/images/MOF-thumb.jpg'
  },

  {
    title: 'Night Wonder Aquarium',
    artistName: 'teamLab',
    location: 'Enoshima Aquarium, Fujusawashi JP',
    exhibitionDates: 'Jul 19 - Dec 25 2016',
    website: 'http://www.enosui-wonderaquarium2015.com/',
    image: 'http://localhost:3000/images/TL-thumb.jpg'
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
