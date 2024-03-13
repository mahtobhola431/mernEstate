import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    

<header className='bg-slate-400 drop-shadow-2xl'>

    <div className='flex justify-between items-center max-w-[1120px] mx-auto p-3'>

      <Link to='/'>
    <h1 className='font-xl font-serif'>
        <span>Stack</span>
        <span>Estate</span>
    </h1></Link>


    <form className='flex items-center rounded-lg bg-slate-100 '>
        <input type='text'
        placeholder='search...'
        className='focus:outline-none  mx-3 bg-transparent w-15 sm:w-50'
        >  
        
        </input>
    <CiSearch />


    </form> 

    <ul className='flex gap-2'>

      <Link to='/'> 
      <li className='hidden sm:inline hover:underline'>Home</li>
      </Link>
      <Link to='/about'> 
      <li className='hover:underline'>About</li>
      </Link>
      <Link to='/signin'> 
      <li className='hover:underline'>SignIn</li>
      </Link>
      
        



        
        

        
        </ul>   
    </div>
    
</header>

   
  )
}

export default Header