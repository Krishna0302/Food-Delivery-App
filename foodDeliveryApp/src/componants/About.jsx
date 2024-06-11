import food from '../Images/pizza.png';
import { Outlet } from 'react-router-dom';
// import Profile from './ProfileClass.jsx';
// import FunctionalProfile from './Profile.jsx';
import { Component } from 'react';

class About extends Component{

  constructor(props){
    super(props);
    console.log("Parent - constructor")
  }

  componentDidMount(){
    console.log("Parent - componentDidMount")
  }

  render(){
    console.log("Parent - render");

    return (
      <div className="flex h-2/5">
      <div className="flex pl-10 font-bold text-6xl items-center">
        <h1>
          Welcome to <br/> The world of <br /> <span>Tasty & Fresh Food</span>
          <br/>"Better you will feel <br/>if you eat a Food<span>Fire</span> healthy meal"
        </h1>
        
      </div>
      <div className="py-10">
        <img className="h-full w-full" src={food} alt="Food Image" />
      </div>
      {/* <Outlet/> */}
      {/* <Profile name={"KrishnaBairwa"}/> */}
    </div>
  )
  }
}

export default About