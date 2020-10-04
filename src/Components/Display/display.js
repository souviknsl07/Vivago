import React from 'react';

const display=({hotel})=>{
	return(
	
		<article  className="tc mt3 mb5  bg-light-gray br3 pa3 ma2 dib bw2 shadow-5" >
		  <div>
		  	<h2>{hotel.name}</h2>
		  	<p>{hotel.rating}</p>
		  	
		  	<a href={hotel.link}>{hotel.link}</a>
		  	
		  </div>
	  	</article>
  	
	)
}

export default display;