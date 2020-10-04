import React,{Component} from 'react';

class signup extends Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			email:'',
			password:''
		}
	}

	onNameChange=(event)=>{
		this.setState({name:event.target.value})
	}

	onEmailChange=(event)=>{
		this.setState({email:event.target.value})
	}

	onPasswordChange=(event)=>{
		this.setState({password:event.target.value})
	}

	onSubmitLogin=()=>{
		fetch(' https://peaceful-citadel-18204.herokuapp.com/signup',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				name:this.state.name,
				email:this.state.email,
				password:this.state.password
			})
			
			
		})
		.then(response=>response.json())
		.then(user=>{
			if(user.id){
				this.props.loadUser(user)
				this.props.onRouteChange('home')
			}
		})
	
	}

	render(){
		return (
			<main className="pa4 black-80 bg-light-gray">
		  		<div className="measure center">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
				      <legend className="f1 fw6 ph0 mh0" style={{fontFamily:'Pacifico'}}>Sign Up</legend>
				      <div className="mt4">
				      	<label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input className="pa2 input-reset ba  w-100" 
				        type="text" 
				        name="name"  
				        id="name"
				        onChange={this.onNameChange}
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba  w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address"
				        onChange={this.onEmailChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba  w-100" 
				        type="password" 
				        name="password"  
				        id="password"
				        onChange={this.onPasswordChange}
				        />
				      </div>
				     
				    </fieldset>
				    <div className="">
				      <input 
						
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      type="submit" 
				      value="Sign Up"
				      onClick={this.onSubmitLogin}
				      />
				    </div>
				    
			  </div>
			</main>
		)
	}
	
}

export default signup;