import React, { useContext, useEffect } from 'react'
import { Context } from '../main';
import { Navigate } from 'react-router-dom';


const Profile = () => {

    const  { user, isAuthenticated } = useContext(Context);
    if(!isAuthenticated){
        return <Navigate to="/login" />
    }
    

console.log(user)

  return (
    <div className="bg-white w-2/4 mt-32 mx-auto overflow-hidden shadow rounded-lg border">
    <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
            Your Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is the information we have about you.
        </p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.name}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.email}
                </dd>
            </div>
          
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Registered On
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                     {new Date(user.createdAt).toDateString() + " " + new Date(user.createdAt).toLocaleTimeString()}
                </dd>
            </div>
        </dl>
    </div>
</div>
  )
}

export default Profile