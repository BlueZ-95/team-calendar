import React, { useState } from 'react'
import { firebaseInit } from "../Utilities/firebase";

function Login() {

    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.loginEmail.value);
    }

    const toggleLoginSignup = e => {
        var buttonText = e.target.innerText;
        console.log(isLoginFormVisible);
        setIsLoginFormVisible(isLoginFormVisible ? false : true);
    }

    return (
        <main className="h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-xl mb-5">Team Calendar</h1>
            <div className="bg-white w-1/4 h-96 rounded-xl shadow-xl py-8">
                <h2 className="text-gray-700 text-3xl text-center">Login</h2>
                <span className="flex flex-col items-center justify-between">
                    <form id="loginSignupForm" onSubmit={handleSubmit} className="flex flex-col items-center justify-between py-8 px-8 h-40 max-h-40">
                        {/* Login Inputs */}
                        <input className={`${isLoginFormVisible ? 'block' : 'hidden'} w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-1 outline-none focus:border-blue-700`} name="loginEmail" type="text" placeholder="Email" />
                        <input className={`${isLoginFormVisible ? 'block' : 'hidden'} w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-1 outline-none focus:border-blue-700`} name="loginPassword" type="password" placeholder="Password" />

                        {/* SignUp Inputs */}
                        <input className={`${!isLoginFormVisible ? 'block' : 'hidden'} w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-1 outline-none focus:border-blue-700`} name="signupEmail" type="text" placeholder="Email" />
                        <input className={`${!isLoginFormVisible ? 'block' : 'hidden'} w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-1 outline-none focus:border-blue-700`} name="signupPassword" type="password" placeholder="Password" />
                        <input className={`${!isLoginFormVisible ? 'block' : 'hidden'} w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-1 outline-none focus:border-blue-700`} name="signupPassword" type="password" placeholder="Password" />
                    </form>
                    <span className="flex flex-col w-full items-center justify-center">
                        <button form="loginSignupForm" className="w-1/2 h-10 bg-indigo-500 rounded text-white mt-10" type="submit">Login</button>
                        <button type="button" className="text-blue-500 cursor-pointer my-5" onClick={toggleLoginSignup}>{isLoginFormVisible ? 'Create account' : 'Already have account'}</button>
                    </span>
                </span>
            </div>
        </main >
    )
}

export default Login
