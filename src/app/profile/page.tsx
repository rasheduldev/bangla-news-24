"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
      const user = session?.user;
      console.log(user);
      
      const [show, setShow] =useState(false)

      const handleUpdateProfile=async(e:React.SubmitEvent<HTMLElement>)=>{
          e.preventDefault()
          const formData = new FormData(e.target)
          const newUser = Object.fromEntries(formData.entries())
          
          await authClient.updateUser({
            ...newUser,
          })
      }
      const handleShowForm = ()=>{
        setShow(!show)
      }
    return (
        <div>
            <div className="flex flex-col items-center gap-2 mt-2">
          <Link href={"/profile"}>
            <div className="avatar">
              <div className="w-10 rounded">
                <img
                  alt="Tailwind-CSS-Avatar-component"
                  src={user?.image as string}
                />
              </div>
            </div>
          </Link>
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
          <button onClick={handleShowForm} className='btn'>ইডিট প্রোপাইল</button>
        </div>
        {
            show && <form onSubmit={handleUpdateProfile}>
        <fieldset className="fieldset  rounded-box w-xs ">

          <label className="label">নাম</label>
          <input name="name" type="text" className="input" placeholder="Name" />
          <label className="label">ImageUrl</label>
          <input name="image" type="url" className="input" placeholder="Image" />
          <button type="submit" className="btn bg-red-700 text-white mt-4">প্রোপাইল আপডেট করুন</button>
        </fieldset>
      </form>
        }
        </div>
    );
};

export default ProfilePage;