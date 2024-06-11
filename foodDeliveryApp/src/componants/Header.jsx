import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="flex h-20 rounded-xl justify-between text-slate-700 bg-red-400">
      <img className='h-20 p-0.5 rounded-xl' 
        src='https://img.freepik.com/premium-vector/logo-restaurant-grills-food-chef-script-arabic_843175-415.jpg'
        alt='logo'
      />
        <h1 className="py-5 font-bold text-3xl">Bhandara</h1>
        <div className="flex py-5">
          <ul className="flex space-x-2 font-semibold text-xl">
            <Link to="/"><li className="">Home</li></Link>
            <Link to="/about"><li className="">About</li></Link>
            <Link to="/contact"><li className="px-2">Contact</li></Link>
          </ul>
        </div>
      </div>
    )
  }

  export default Header