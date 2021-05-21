import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Mainbar from '../components/Mainbar';
import Sidebar from '../components/Sidebar';
import Image from 'next/image';
// https://dribbble.com/shots/15671749-Landing-Page-Hero-Animation

export default function Home() {
  const router = useRouter();

  const [isUserFound, setIsUserFound] = useState(false)

  useEffect(() => {

    let userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (!userDetails) {
      router.push('/Login')
    }
    else {
      setIsUserFound(true);
    }
  }, [])
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span className={`${isUserFound ? 'hidden' : 'flex'} h-screen w-screen items-center justify-center`}>
        <Image src="/spinner.gif" width={80} height={80} />
      </span>

      <main className={`${!isUserFound ? 'hidden' : 'flex'}`}>
        {/* Sidebar */}
        <Sidebar />

        {/* Mainbar */}
        <Mainbar />
      </main>
    </div>
  )
}