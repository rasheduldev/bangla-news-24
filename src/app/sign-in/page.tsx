"use client"

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
    const onSubmit = async(e:React.SubmitEvent<HTMLElement>)=>{
          e.preventDefault()
          const formData = new FormData(e.target)
          const user = Object.fromEntries(formData.entries()) as {email:string, password:string,}
               
          const {data, error } = await authClient.signIn.email({
            ...user,
            callbackURL:"/"
          })
          if(data){
            toast.success("Sign In Successfully")
            console.log(data)
          }
          if(error){
            toast.error("Something went wrong")
            console.log(error)
          }
    }
    const handleSignInWithGoogle=async()=>{
    await authClient.signIn.social({
        provider:"google",
      })
    }
    const handleSignInWithGithub = async()=>{
    await authClient.signIn.social({
        provider:"github"
      })
    }
    return (
        <div className="mt-5">
        <h2 className="font-semibold text-2xl text-red-700 text-center">সাইন ইন</h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset  rounded-box w-xs ">

          <label className="label">ইমেইল</label>
          <input name="email" type="email" className="input" placeholder="Email" />

          <label className="label">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input" placeholder="Password" />

          <button type='submit' className="btn bg-red-700 text-white mt-4">সাইন ইন করুন</button>
        </fieldset>
      </form>
      <div className="flex items-center justify-center">
      <button onClick={handleSignInWithGoogle} className="btn ">Google দিয়ে সাইন ইন করুন</button>
      <button onClick={handleSignInWithGithub} className="btn ">Github দিয়ে সাইন ইন করুন</button>
      </div>
    </div>
    );
};

export default SignInPage;