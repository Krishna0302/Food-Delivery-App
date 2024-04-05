import food from '../Images/pizza.png';
import { Outlet } from 'react-router-dom';
import Profile from './ProfileClass.jsx';
import ClassProfile from './Profile.jsx';

const About = () => {
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
        <Profile/>
        <ClassProfile/>
      </div>
    )
}

export default About