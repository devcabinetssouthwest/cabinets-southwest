import Head from 'next/head'
import Image from 'next/image'

import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cabinets Southwest</title>
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
      <div id="comingSoonHero" className='d-flex flex-column'>
        <div className='flex-grow-1 align-self-center d-flex px-lg-5'>
          <h2 className='align-self-center bg-light p-2 '>Website Coming Soon</h2>
        </div>
        
       
      </div>

      <div className='mt-5'>
        <h2 className='text-center'>Contact Us</h2>

      {/* <form>
        <div className="row g-3 mx-auto col col-md-6 mx-auto">
            <div className="col-12">
              <label className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" required/>
              
            </div>

         

            <div className="col-12">
              <label className="form-label">Email <span className="text-muted">*</span></label>
              <input type="email" className="form-control" id="email" />
              
            </div>

            <div className="col-12">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" id="address" />
             
            </div>

            <div className="col-12">
              <label className="form-label">Message</label>
              <textarea  type="text" className="form-control" id="message"/>
            </div>

            <div className="col-12 text-center">
              <button  type="submit" className="btn btn-outline-dark rounded-0 px-4 py-3 text-uppercase">
                Send
              </button>
            </div>

          </div>
      </form> */}

      <div className='col col-md-6 mx-auto my-5'>
        <p>
          Feel free to reach out to Jeff Norman directly at jnorman@cabinetssouthwest.com or call  (480) 226-8157
        </p>
      </div>

      <Footer/>
      </div>
      
     
      </main>
    </>
  )
}
