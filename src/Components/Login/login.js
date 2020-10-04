import React,{Component} from 'react';

class login extends Component {
	constructor(props) {
		super(props);
		this.state={
			loginEmail:'',
			loginPassword:''
		}
	}

	onEmailChange=(event)=>{
		this.setState({loginEmail:event.target.value})
	}

	onPasswordChange=(event)=>{
		this.setState({loginPassword:event.target.value})
	}

	onSubmitLogin=()=>{
		fetch(' https://peaceful-citadel-18204.herokuapp.com/login',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				email:this.state.loginEmail,
				password:this.state.loginPassword
			})
		}) 
		.then(response=>response.json())
		.then(user=>{
			if(user.id){
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	}

	render() {
		const {onRouteChange}=this.props;
		return(
		<main className="pa4 black-80 bg-light-gray">
  		<div className="measure center">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
		      <legend className="f1 fw6 ph0 mh0" style={{fontFamily:'Pacifico'}}>Log In</legend>
		      <div className="mt4">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba   w-100" 
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
		      <input onClick={this.onSubmitLogin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Log in"/>
		    </div>
		    <div className="lh-copy mt3">
		      <p  onClick={()=> onRouteChange('signup')} className="f6 link  black db pointer" >Sign up</p>
		      
		    </div>
		  </div>
		</main>
	)
	}
	
}

export default login;