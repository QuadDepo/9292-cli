const helper = require('../helpers/index');
const fs = require('fs')
const json = require('../../index.json');



  fs.writeFile('json.html', json.JourneySliderBlock, 'utf8', function() {
    console.log('done');
  });



async function test( ){
  // const data = await helper.fetchCall('https://9292.nl/reisadvies-pagina?from=station-hoorn&to=station-amsterdam-centraal&searchType=vertrek&dateTime=2017-11-25T2020&before=-1&after=5');
  // fs.writeFile('index.json', JSON.stringify(data), 'utf8', function() {
    // console.log('done');
  // });

  console.log(helper.parser(json.JourneySliderBlock));
}

test()





// https://9292.nl/reisadvies/station-hoorn/hoorn_john-raedeckerhof/vertrek/2017-11-25T1815
//
// station-plaats, plaats_straat-naam-9229
