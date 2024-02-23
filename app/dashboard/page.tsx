import Navbar from '@/components/Navbar/Navbar'
import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';

const page = async() => {
  const user = await currentUser();
 

  return (
    <div id="dashboard" className='bg-gradient w-full min-h-screen' >
       <Navbar />

      <div className='w-full flex items-center justify-center' >
        <div className='text-white w-[90%] py-10' >
          <h1 className='text-4xl ' >Welcome, <span className='font-light' >{user?.username}</span></h1>
          <div className='mt-10 border inline-block p-4 rounded-xl' >
            <h3>Your info: </h3>
            <p className="text-sm" >full name: {user?.firstName}</p>
            <p className='text-sm' >username: {user?.username}</p>
            <img src={user?.imageUrl} alt="" className="mt-5 w-12 h-12 rounded-xl" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default page