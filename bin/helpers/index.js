const fetch = require('node-fetch');
const cheerio = require('cheerio');



function parser(html){
  let $ = cheerio.load(html);
  return $('.dynamic-tab-pane-control.active span.leg-link a').text()
}

async function fetchCall(url) {
  let data = await fetch(url);
  let text = await data.json();
  return text
};

module.exports = {
  fetchCall,
  parser
}