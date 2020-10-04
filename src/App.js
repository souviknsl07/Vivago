import React,{Component} from 'react';
import Navigation from './Components/Navigation/navigation';
import Header from './Components/Header/header';
import Content from './Components/Content/content';
import axios from 'axios';
import Display from './Components/Display/display';
import Footer from './Components/Footer/footer';
import Login from './Components/Login/login';
import Signup from './Components/Signup/signup';
import './App.css';


const initialState ={
  cityName:'',
  countryName:'',
  hotel:{},
  route:'login',
  isSignedIn:false,
  user:{
    id:'',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {

  constructor(){
    super();
    this.state=initialState;
  }

  loadUser=(data)=>{
    this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      joined:data.joined
    }})
  }


 

  onCityNameChange=(event)=>{
    this.setState({cityName:event.target.value})
  }

  onCountryNameChange=(event)=>{
    this.setState({countryName:event.target.value})
  }

 

  onButtonSubmit=()=>{

    axios({
        "method":"GET",
        "url":"https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"best-booking-com-hotel.p.rapidapi.com",
        "x-rapidapi-key":"5c78c446b3msh7d522ef124f35c5p17499ejsn8e711b28f740",
        "useQueryString":true
        },"params":{
        "cityName":this.state.cityName,
        "countryName":this.state.countryName
        }
      }).then((response)=>{
          this.setState({hotel:response.data});
        })
        .then(response=>{
          if(response){
            fetch(' https://peaceful-citadel-18204.herokuapp.com/hotels',{
              method:'put',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
                id:this.state.user.id
              })
            })
            .then(response=>{
              response.json()
            })
            .then(count=>{
              this.setState(Object.assign(this.state.user,{entries:count}))
            })
          }
        })
        .catch(err=>{console.log(err)})
  }


 

  onRouteChange=(route)=> {
      if(route==='signout'){
        this.setState(initialState)
      } else if(route==='home'){
        this.setState({isSignedIn:true})
      }
      this.setState({route:route});
    }

  render() {
    const {isSignedIn, route, hotel}=this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route==='home'?
          <div>
            <Header/>
            <Content onCityNameChange={this.onCityNameChange}
            onCountryNameChange={this.onCountryNameChange} 
            onButtonSubmit={this.onButtonSubmit}
            />
            <Display hotel={hotel}/>
            
          </div>
          :
          (
            route==='login'?
            <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>:
            <Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            
          )
        }
        <Footer/>
        
      </div>
    );
  }
  
}

export default App;
