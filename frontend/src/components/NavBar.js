import { Link } from "react-router-dom"
import React,{useEffect,useState} from "react"



const NavBar = ()=>{
    const [hasKey,setHasKey] = useState(false)
   

        var key = JSON.parse(localStorage.getItem('key'))
        useEffect(()=>{
            if(key){
                setHasKey(true)
                
            } 

            
        },[])
        console.log(key)

        const handleLogout=()=>{
            localStorage.removeItem("key")
            setHasKey(false)

        }


    return (
        <div className="bg-black text-neutral-100 h-14 flex flex-row justify-end">
            {
                hasKey ? <div className="flex justify-end">
                    <button className="border-solid border-2  p-2  m-1 mx-4 my-2 text-center bg-slate-500 rounded-md" onClick={handleLogout}>Logout</button>
                    <div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-8 h-8">
                    <path   d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h2 className="px-1">{key.users.firstName}</h2>
                    </div>

                </div> : (
                    <div>
                    <button className="border-solid border-2  p-2  m-1 mx-4 my-2 text-center bg-slate-500 rounded-md"><Link to={"/Login"}>Login</Link></button>
                    <button className="border-solid border-2 p-1 m-1 mx-4 my-2 bg-slate-500 rounded-md"><Link to={"/Signup"}>SignUP</Link></button>
               </div>

                )
            }
           

            

            </div>
    )
}

export default NavBar