import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import { useState } from 'react'

const SignUp = () => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value

    })

  }

  const handleSubmit=async(e)=>{
e.preventDefault();  //do not refresh page
// setLoading(true);
// const res=await fetch('/api/auth/singup',{
// method:'POST',
// headers:{
//   'Content-Type':'application/json',
// },
// body:JSON.stringify(formData),

// });

// const data=await res.json();
// if (data.success === false) {
//   setLoading(false);
//   setError(data.message);
//   return;
// }
// setLoading(false);
// console.log(data)
try {
  setLoading(true);
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  console.log(data);
  if (data.success === false) {
    setLoading(false);
    setError(data.message);
    return;
  }
  setLoading(false);
  setError(null);
  navigate('/sign-in');
} catch (error) {
  setLoading(false);
  setError(error.message);
}

  }

  console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto bg-slate-200 flex flex-col items-center '>
<h1 className='text-3xl text-center font-semibold my-6'>Sign Up</h1>
<form className='flex flex-col gap-3' onSubmit={handleSubmit}>

  <input type='text' placeholder='enter your username'  id='username' className='border-none focus:outline-none  rounded-lg px-2 ' onChange={handleChange}></input>
  <input type='text' placeholder='enter your email' id='email' className='border-none focus:outline-none  rounded-lg  px-2' onChange={handleChange}></input>
  <input type='password' placeholder='enter your password' id='password' className='border-none focus:outline-none  rounded-lg  px-2' onChange={handleChange}></input>
  
  <button disabled={loading} className='bg-blue-700 uppercase hover:opacity-70 px-10  rounded-md border-none m-3 font-semibold text-white'>
{
  loading?'loadind....':'sign up'
}

  </button>
</form>

<div className='flex gap-1'>
  <p>Have an account?</p>
  <Link to='/signin' ><span className='text-blue-500 font-semibold'>SignIn</span></Link>
                      
</div>

    </div>
  )
}

export default SignUp



