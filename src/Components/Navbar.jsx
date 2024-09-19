import logo from '../assets/logo3.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img  className = " mx-2 w-16"src={logo} alt='logo'/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://leetcode.com/'><SiLeetcode /></a>
            <a href="https://github.com/" target='blank'><FaGithub/></a>
            <a href="https://www.linkedin.com/feed/" target='blank'><FaLinkedin/></a>
            <a href="https://www.instagram.com/shriyaaanshh/" target='blank'><FaInstagram/></a>
            <a href="https://x.com/?lang=en" target='blank'><FaSquareXTwitter/></a>
        </div>
    </nav>
  )
}

export default Navbar