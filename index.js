const cheerio=require('cheerio');
const request=require('request-promise');

async function init() {
	const $ = await request({
		uri: 'http://quotes.toscrape.com/',
		transform: body => cheerio.load(body)
	});
	
	const websiteTitle = $('title');
	console.log('etiquetas title: '+websiteTitle.html());

	const websiteH1 = $('h1');
	console.log('etiquetas h1: '+websiteH1.html());

	const websiteP = $('p');
	console.log('etiquetas p: '+websiteP.text());

	const quote = $('.quote');
	console.log(quote.html());
}
init();
