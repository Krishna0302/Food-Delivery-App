import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="header">
      <img className='logo' 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5RX6tM4fUGQ9H6WE-PQvxP6uMH5ceHraWM9aDyiaW4jnwAOyI9gBuuYG4fmgv_Qf7uo&usqp=CAU'
        alt='logo'
      />
        <h1>Bhandara</h1>
        <div className="nav-items">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
          </ul>
        </div>
      </div>
    );
  };

  export default Header