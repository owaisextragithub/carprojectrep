import Logo from '../assets/logoBlack.png';
import { Link } from 'react-router-dom';

export default function Navbar() {

  

  return (
    <>
      <div className="navbar w-full h-96 flex justify-center  items-center relative">
        <div>
          <ul>
            <li className=''><a href=""><img className=' w-160' src={Logo} alt="" srcset="" /></a></li>
          </ul>
        </div>
        <div className=' absolute right-20 mobile:right-12 smallmobile:right-6 cursor-pointer'>
        <Link to="/login" className=" font-heading ">
          Sign Out
        </Link>
        </div>
      </div>
    </>
  )
}