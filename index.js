const scrape = require('website-scraper');
const options = {
  urls: ['https://nasheetblog.wordpress.com/'],
  directory: '/Users/sameenahmad/Documents/personal/nasheet-shadani/dist'
};
 
// with async/await

scrape(options).then((result) => {});