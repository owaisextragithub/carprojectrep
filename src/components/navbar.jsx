import Logo from '../assets/logoBlack.png'
export default function Navbar() {

    return (
      <>
      <div className="navbar w-full h-96 flex justify-center  items-center relative">
    <div>
      <ul>
        <li className=''><a href=""><img className=' w-160' src={Logo} alt="" srcset="" /></a></li>
      </ul>
      </div>
      <a className=' absolute right-0 pr-32 font-body' href="http://localhost:3000/main/login">Log Out</a>
      </div>
      </>
    )
  }