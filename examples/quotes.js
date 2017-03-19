	var quotes=
[{
author: 'Princess Leila',

quote: 'Aren\'t you a little short for a storm trooper?'
}, {
author: 'Yoda',

quote: 'When 900 years old, you reach… Look as good, you will not.'
}, {

author: 'Yoda',

quote: 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
author: 'Yoda',

quote: 'Do. Or do not. There is no try.'
}, {
author: 'Yoda',

quote: 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
author: 'Senator Palpatine',

quote: 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
author: 'Qui-Gon Jinn',

quote: 'Your focus determines your reality'
}, {
author: 'Count Dooku',

quote: 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
author: 'Obi-Wan-Kenobi',

quote: 'In my experience there is no such thing as luck.'
}, {
author: 'Darth Vader',

quote: 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
author: 'Darth Vader',

quote: 'The Force is strong with this one.'
}];
	function newQuote(){
		  var randomNumber = Math.floor(Math.random()*(quotes.length));
		  var quote=quotes[randomNumber];
		  document.getElementById('quoteDisplay').innerHTML=quote.quote;
		  return quote;
	}
