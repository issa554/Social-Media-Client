
import Link from 'next/link'
import {useContext} from 'react'
import { AuthContext } from '../context/auth';
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  
  const menu =  user ? (<nav class="bg-red-500 flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <Link href="/">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
   <span class="cursor-pointer font-semibold text-xl tracking-tight">Social Media </span>
  </div>
    </Link>
  
  <div class="   flex-grow flex items-center w-auto">
    <div class="text-sm lg:flex-grow">

       <p onClick={logout} className="cursor-pointer  inline-block mt-0 text-teal-200 hover:text-white mr-4">
        LOGOUT
       </p>
    </div>

  </div>
</nav>) :(<nav class="bg-green-500 flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <Link href="/">
  <div class=" cursor-pointer flex items-center flex-shrink-0 text-white mr-6">
    
  <span class="font-semibold text-xl tracking-tight">Social Media </span>
  </div>
    </Link>

  <div class="  flex-grow flex items-center w-auto">
    <div class="text-sm flex-grow">
      <Link href="/register" >
       <p className="cursor-pointer inline-block mt-0 text-teal-200 hover:text-white mr-4">
        register
       </p>
      </Link>
     
      <Link href="/login" >
      <p className="cursor-pointer inline-block mt-0 text-teal-200 hover:text-white mr-4">
        login
       </p>
      </Link>

    </div>
  </div>
</nav>)
return menu;
}

export default Navbar

