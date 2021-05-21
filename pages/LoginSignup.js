import React from 'react'

function LoginSignup() {
    const handleSubmit = () => {

    }

    return (
        <main className="h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-xl mb-5">Team Calendar</h1>
            <div className="bg-white w-1/4 h-96 rounded-xl shadow-xl py-10">
                <h2 className="text-gray-700 text-3xl text-center" onSubmit={handleSubmit}>Login</h2>
                <form className="h-full flex flex-col items-center justify-start py-8 px-8">
                    <input className="w-full bg-white px-2 border border-gray-400 rounded-lg my-2 h-10 outline-none focus:border-blue-700" type="text" placeholder="Email" />
                    <input className="w-full bg-white px-2 border border-gray-400 rounded-lg my-2 h-10 outline-none focus:border-blue-700" type="password" placeholder="Password" />
                    <span className="flex w-full items-center justify-center">
                        <button className="w-1/2 h-10 bg-indigo-500 rounded text-white my-8" type="submit">Login</button>
                    </span>
                    <button className="text-blue-500 cursor-pointer">Create account</button>
                </form>

            </div>
        </main >
    )
}

export default LoginSignup
