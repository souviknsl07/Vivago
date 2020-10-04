import React from 'react';

const header =()=> {
	return(
		<header className="Rowdies">
		<link href="https://fonts.googleapis.com/css2?family=Rowdies&display=swap" rel="stylesheet"/>

		  <div className="cover bg-left bg-center-l" 
		  style={{backgroundImage: 'url("https://i.ytimg.com/vi/VWFdCGYrijw/maxresdefault.jpg")'}}>
		    <div className="bg-black-80 pb5 pb6-m pb7-l">
		      <nav className="dt w-100 mw8 center"> 
		        
		      </nav> 
		      <div className="tc-l mt5 mt5-m mt6-l ph3 ">
		        <h1 className="f2 f1-l fw2 white-90 mb0 lh-title" style={{fontFamily:'Rowdies'}}>Hotel Booking</h1>
		        <h2 className="fw1 f3 white-80 mt3 mb4" style={{fontFamily:'Rowdies'}}>Search for the best hotels around you</h2>
		       
		        
		      </div>
		    </div>
		  </div> 
		</header>

	)
}

export default header;