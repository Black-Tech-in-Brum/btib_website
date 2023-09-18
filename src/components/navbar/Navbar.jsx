import { useState } from 'react'
import { HashLink as Link} from 'react-router-hash-link';
import { ReactComponent as Logo } from '@assets/icons/logo.svg'
import { ReactComponent as Hamburger } from '@assets/icons/hamburger.svg'
import { ReactComponent as Close } from '@assets/icons/close.svg'
import { ReactComponent as LinkedIn } from '@assets/icons/linkedin.svg'
import { ReactComponent as Discord } from '@assets/icons/discord.svg'

function Navbar() {
  const [navDisplay, setNavDisplay] = useState(false)
  return (
    <nav
      className={`shadow-overlap fixed z-50 flex justify-between bg-white shadow md:relative md:px-24 ${
        navDisplay ? 'inset-0 items-start' : 'inset-x-0'
      }`}
      aria-label="Primary"
    >
      <div className="shadow-overlap z-50 flex w-full justify-between px-5 py-2 shadow md:w-auto md:p-0  md:shadow-none">
        <a className="w-auto py-3 text-sm font-medium text-neutral-500 hover:text-white">
          <Logo />
        </a>
        <button
          className="p-3 md:hidden"
          onClick={() => setNavDisplay(!navDisplay)}
          aria-label={navDisplay ? 'Close menu' : 'Open menu'}
        >
          {navDisplay ? <Close /> : <Hamburger />}
        </button>
      </div>
      <ul
        className={`${
          navDisplay
            ? 'absolute left-0 top-20 flex h-[75vh] flex-col items-center bg-white px-5 py-20'
            : 'hidden'
        } w-full md:relative md:inset-unset md:flex md:h-auto md:w-auto md:flex-row md:items-center md:gap-6 md:p-0`}
      >
       
          <li
            key={`navItem${"item.index"}`}
            className="{`p-2 ${item.index > 0 ? 'mt-6 md:mt-0' : ''}`"
          >
            <Link to="#about" 
              className="font-satoshi text-sm text-neutral-500 hover:underline hover:underline-offset-8 focus-visible:underline focus-visible:underline-offset-8 md:text-base"
             smooth>
              About Us
             
            </Link>
          </li>
          <li
           
            className="{`p-2 ${item.index > 0 ? 'mt-6 md:mt-0' : ''}`"
          >
            <Link to="#whoCanBenefit"
              className="font-satoshi text-sm text-neutral-500 hover:underline hover:underline-offset-8 focus-visible:underline focus-visible:underline-offset-8 md:text-base"
             
              smooth>
              Who Can Benefit?
            
            </Link>
          </li>

          <li className="">
            <Link to="#events"
              className="font-satoshi text-sm text-neutral-500 hover:underline hover:underline-offset-8 focus-visible:underline focus-visible:underline-offset-8 md:text-base"
             
              smooth>
             Events
            
            </Link>
          </li>

          <li
            key=""
            className="{`p-2 ${item.index > 0 ? 'mt-6 md:mt-0' : ''}`"
          >
            <Link to="#contact"
              className="font-satoshi text-sm text-neutral-500 hover:underline hover:underline-offset-8 focus-visible:underline focus-visible:underline-offset-8 md:text-base"
              
              smooth>
           Contact
            
            </Link>
          </li>
        <button to="" className="mx-auto mt-10 block rounded-lg bg-primary-200 px-4 py-3 font-satoshi font-bold text-neutral-100 hover:bg-primary-100 focus-visible:bg-primary-100 md:mt-0">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfihXvQunDbCUG0JnA73rl7EF5VTAUkG5JZpO_UtcYL9Lvz6g/viewform?usp=send_form">Become a Member</a>
        </button>
      </ul>

      
      {navDisplay && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 py-6 md:hidden">
          <div className="flex justify-center gap-9">
            <a href="#discord" aria-label="Join us on Discord">
              <Discord />
            </a>
            <a href="#linkedin" aria-label="Follow us on LinkedIn">
              <LinkedIn />
            </a>
          </div>
          <p className="mt-6 font-satoshi text-xxs sm:text-xs">
            © Copyright {new Date().getFullYear()} Black Tech in Brum. All
            rights reserved.
          </p>
        </div>
      )}
    </nav>
  )
}
export default Navbar
