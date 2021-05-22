import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { firebaseInit, firestore } from "../Utilities/firebase";

function Login() {

    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
    const [isRequestSent, setIsRequestSent] = useState(false);

    const router = useRouter();

    const handleSubmit = e => {
        e.preventDefault();
        setIsRequestSent(true);

        if (isLoginFormVisible) {

            var loginEmail = e.target.loginEmail.value;
            var loginPassword = e.target.loginPassword.value;

            console.log(loginEmail);

            firebaseInit.auth().signInWithEmailAndPassword(loginEmail, loginPassword).then(res => {
                firestore.collection('users').where('email', '==', loginEmail).get().then(snapshot => {
                    setUserDetailsToLocal((snapshot.docs[0].data()));
                })
            }).catch(err => {
                console.log(err.message);
            })
        }
        else {
            var userName = e.target.userName.value;
            var signupEmail = e.target.signupEmail.value;
            var signupPassword = e.target.signupPassword.value;
            var signupConfirmPassword = e.target.signupConfirmPassword.value;

            if (signupPassword !== signupConfirmPassword)
                return;

            firebaseInit.auth().createUserWithEmailAndPassword(signupEmail, signupPassword).then(res => {

                let userDetails = {
                    userName: userName,
                    email: signupEmail
                }

                firestore.collection('users').add({
                    userDetails
                }).catch(err => {
                    console.log(err.code);
                    console.log(err.message);
                });

                setUserDetailsToLocal(userDetails);

            }).catch(err => {
                console.log(err.code);
                console.log(err.message);
            });
        }

        // setIsRequestSent(false);
    }

    const toggleLoginSignup = e => {
        var buttonText = e.target.innerText;
        console.log(isLoginFormVisible);
        setIsLoginFormVisible(isLoginFormVisible ? false : true);
    }

    function setUserDetailsToLocal(userDetails) {
        localStorage.setItem('userDetails', JSON.stringify({ userDetails }));
        router.push('/');
    }

    return (
        <main className="h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-xl mb-5">Team Calendar</h1>
            <div className="bg-white w-1/4 h-3/4 rounded-xl shadow-xl py-8">
                <h2 className="text-gray-700 text-3xl text-center">Login</h2>
                <span className="flex flex-col items-center justify-between">
                    <form id="loginSignupForm" onSubmit={handleSubmit} className="flex flex-col items-center justify-start py-8 px-8 h-60 max-h-60">

                        {/* Login Inputs */}
                        <input className={`${isLoginFormVisible ? 'block' : 'hidden'} w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-1 outline-none focus:border-blue-700`} name="loginEmail" type="text" placeholder="Email" />
                        <input className={`${isLoginFormVisible ? 'block' : 'hidden'} w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-1 outline-none focus:border-blue-700`} name="loginPassword" type="password" placeholder="Password" />

                        {/* SignUp Inputs */}
                        <input className={`${!isLoginFormVisible ? 'block' : 'hidden'} w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-1 outline-none focus:border-blue-700`} name="userName" type="text" placeholder="Name" />
                        <input className={`${!isLoginFormVisible ? 'block' : 'hidden'} w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-1 outline-none focus:border-blue-700`} name="signupEmail" type="text" placeholder="Email" />
                        <input className={`${!isLoginFormVisible ? 'block' : 'hidden'} w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-1 outline-none focus:border-blue-700`} name="signupPassword" type="password" placeholder="Password" />
                        <input className={`${!isLoginFormVisible ? 'block' : 'hidden'} w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-1 outline-none focus:border-blue-700`} name="signupConfirmPassword" type="password" placeholder="Confirm Password" />

                    </form>
                    <span className="flex flex-col w-full items-center justify-center">
                        <span className={`${isRequestSent ? 'block' : 'hidden'} mt-10`}>
                            <Image src="/spinner.gif" width={32} height={32} />
                        </span>
                        <button form="loginSignupForm" className={`${!isRequestSent ? 'block' : 'hidden'} w-1/2 h-10 bg-indigo-500 rounded text-white mt-10`} type="submit">{isLoginFormVisible ? 'Login' : 'Signup'}</button>
                        <button type="button" className="text-blue-500 cursor-pointer my-5" onClick={toggleLoginSignup}>{isLoginFormVisible ? 'Create account' : 'Already have account'}</button>
                    </span>
                </span>
            </div>
        </main >
    )
}

export default Login
