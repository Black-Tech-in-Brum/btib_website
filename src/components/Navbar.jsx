//import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="shadow bg-black">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <a className="text-gray-300  hover:text-white px-3 py-2 text-sm font-medium">
          Logo
        </a>

        <ul className="flex items-center gap-5">
          <li>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              href=""
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              href=""
            >
              Membership
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              href=""
            >
              Event
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              href=""
            >
              Contact
            </Link>
          </li>
          <button>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              href=""
            >
              Join Us
            </a>
          </button>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
