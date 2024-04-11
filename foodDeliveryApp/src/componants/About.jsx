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
      <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a Food<span>Fire</span> healthy meal"
        </h4>
      </div>
      <div className="about-right">
        <img src={food} alt="Food Image" />
      </div>
      {/* <Outlet/> */}
      {/* <Profile name={"KrishnaBairwa"}/> */}
    </div>
  )
  }
}

export default About