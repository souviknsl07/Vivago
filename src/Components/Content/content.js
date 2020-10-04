import React from 'react';


const content=({onCityNameChange, onCountryNameChange, onButtonSubmit})=>{
	return(
 		<div>
	 		<article className="center mw5 mw6-ns hidden ba mv4 bg-light-gray shadow-5">
	 		<article className="pa4 black-80 ">

			    <fieldset id="search" className="ba b--transparent ph0 mh0">
			      <div className="mt3 ">
			        
			        <input className=" b pa2 input-reset ba bg-white w-100 " 
			        type="search"
			        placeholder="enter your city(big cities)" 
			     	onChange={onCityNameChange}
			        />
		         	<input className=" b pa2 input-reset ba bg-white mt3 w-100" 
			        type="search"
			        placeholder="enter your country" 
			     	onChange={onCountryNameChange}
			        />
			        
			        
			      </div>
			      
			    </fieldset>
			    <div  className="mt3">
			    <button className="b ph3 pv2 input-reset dib ba b--black bg-transparent grow pointer f6"
			    onClick={onButtonSubmit}>
			    Search
			    </button> 
			    </div>

			</article>
			</article>
		</div>
	)
}

export default content;