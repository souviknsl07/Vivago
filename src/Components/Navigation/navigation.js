import React from 'react';



const navigation=({onRouteChange, isSignedIn})=> {
	if(isSignedIn){
		return(
			<nav className="db dt-l w-100 ph5-l bg-black-20 fixed ">
			  <a className="db dtc-l v-mid mid-gray w-100 dim  w-25-l tc tl-l mb2 mb0-l pointer" href='/#'  title="Home">
			    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTGmFNWVsEhuQLQCYTo3ma3nwQ9jAL9Hk6DA&usqp=CAU" className="dib w2 h2 br-100" alt="Site Name"/>
			  </a>
			  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
			    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet"/>
			    <a onClick={()=>onRouteChange('signout')} className="link white f6 f5-l  pointer" style={{fontFamily:'Caveat'}} href='/#' title="Sign Out" >Sign Out</a>
			  </div>
			</nav>

		)
	} else{
		return(
		<nav className="flex justify-between  bg-blue bb b--white-10">
		  <div className='ph3 white dib pointer' style={{fontFamily:'Lobster'}}>
		  <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
		  	<h2>Vivago</h2>
		  </div>
		  <div className="flex-grow  flex items-center" >
		    <p onClick={()=>onRouteChange('login')} className="f6 link dib white dim mr3 mr4-ns pointer"  >Log In</p>
		    <p onClick={()=>onRouteChange('signup')} className="f6 dib link white bg-animate hover grow no-underline pv2 ph4 br-pill ba b--white-20 pointer"  >Sign Up</p>
		  </div>
		</nav>

	)
	}

	
	
}

export default navigation;