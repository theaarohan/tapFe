import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { apiRegistration } from '../apiInteraction/apiCalls'
import { Info } from '@geist-ui/icons'
import {Text} from "@geist-ui/core"

export default function RegisterComponent() {

  const [stEmail, setStEmail] = useState("")
  const [stPassword, setStPassword] = useState("")
  const [stCnfPassword, setStCnfPassword] = useState("")
  const [stPwdsSame, setStPwdsSame] = useState(false)

  // Handle registration
  const fnHandleRegister = async (e) =>{
    e.preventDefault();
    const response = apiRegistration(stEmail, stPassword)
      console.log(response)
      console.log(response.data)
  }
   
  // To check if the passwords in 2 fields are same
  useEffect(()=>{
    if(stPassword === stCnfPassword){
      setStPwdsSame(true)
    }
    else{
      setStPwdsSame(false)
    }
  },[stPassword, stCnfPassword])

  return (
    // <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={fnHandleRegister} method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  onChange={(e) => setStEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={stPassword}
                  onChange={(e) => setStPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label htmlFor="password" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={stCnfPassword}
                  onChange={(e) => setStCnfPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {!stPwdsSame &&
              <div className="flex flex-row align-middle justify-center rounded-xl text-sm bg-red-100">
              <Info size={16}  className='m-2'/>
              <Text className='m-1 ml-0'>Passwords are not same</Text>
            </div>
            }
            <div>
              <button
                type="submit"
                onClick={fnHandleRegister}
                // disabled={!setStPwdsSame}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    // </>  
  )
}
