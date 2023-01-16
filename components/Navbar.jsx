import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar(){
    
    const logOut = () =>{
        localStorage.removeItem("admin")
        localStorage.removeItem("potentialAdmin")
    
        signOut({callbackUrl:"/"})
      }

    const {data:session} = useSession()

    return(
        <nav class="navbar navbar-expand-lg bg-light border border-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mx-lg-5 mt-lg-0 mt-3" id="navbarTogglerDemo01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                    <Link class="nav-link active" href="/">Home</Link>
                    </li>
                    
                    {
                        session &&
                        <li class="nav-item">
                            <button class="nav-link btn" onClick={logOut}>Logout</button>
                        </li>
                    }
                    
                    
                </ul>
                </div>
            </div>
            </nav>
    )
}