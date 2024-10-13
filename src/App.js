import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button } from 'bootstrap';
import Profil from './component/Profil';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
        Personnes:{
          image:"https://d31btwpnsku5px.cloudfront.net/e2124b4422c9.jpg",
          fullname:"Dadju Djuna Nsungula",
          bio:"Dadju Djuna Nsungula, dit Dadju, né le 2 mai 1991 à Melun, en Seine-et-Marne, est un chanteur, rappeur et acteur franco-congolais. Il est le frère de Gims.",
          profession:"Artiste"
        },
        show:false,
        compt:0
      }
    }
    hanleProfil=()=>{
      this.setState((prevState)=>({
        show: !prevState.show,
        compt:0
      }))
    }

    componentDidMount(){
      this.temps=setInterval(()=>{
        this.setState((prevState)=>({
          compt:prevState.compt +1
        })
      )},1000)
    }
    componentWillUnmount(){
      clearInterval(this.timer)
    }
  render(){
    return(
      <div className='card'>
       {this.state.show &&(<Profil personne={this.state.Personnes}/>)} 
       <h1> <div>{this.state.compt}</div></h1>
        <button onClick={this.hanleProfil}>Clik</button>
       
      </div>
    )
  }
}

export default App;
