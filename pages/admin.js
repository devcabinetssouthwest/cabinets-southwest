import Head from 'next/head'
import Image from 'next/image'

import { Inter } from '@next/font/google'
import Footer from '../components/Footer'
import { useState } from 'react'
import ProtectedPage from '../components/util/ProtectedPage'
import { signOut } from 'next-auth/react'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  
  const logOut = () =>{
    localStorage.removeItem("admin")
    localStorage.removeItem("potentialAdmin")

    signOut({callbackUrl:"/"})
  }

  return (
    <ProtectedPage>
      <Head>
        <title>Cabinets Southwest Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
      <div className='col col-md-6 mx-auto position-relative mb-5 mx-auto mt-5' style={{minHeight:"100px"}}>
        <Image
          src={'/swc_logo_final_color.webp'}
          alt="logo"
          objectFit={'contain'}
          fill 
        />  
      </div>
     
      <hr/>



      <div className='mb-5 d-flex flex-column justify-content-center text-center'>
        <h2>Admin Page</h2>

        <div className='border rounded-3 d-flex justify-content-center align-items-center mt-3 bg-secondary text-light' style={{minHeight:400}}>

            <h3>Admin Graphs and Stuff</h3>
        </div>
        <button className='btn btn-lg btn-dark mx-auto mt-3 px-5' onClick={logOut}>Log Out</button>

      </div>
      <hr/>

        <Footer/>
      </main>
    </ProtectedPage>
  )
}