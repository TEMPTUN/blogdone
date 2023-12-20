import React, { useEffect } from 'react'
import { useState } from "react"
import styles from '@/styles/Signup.module.scss'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await axios.get(`https://woolback-complementme001-gmailcom.vercel.app/api/blogin?username=${username}&password=${password}`)
        // console.log(res.data);

        if(res.data.success===true){
            localStorage.setItem('token',username);
            router.push('/');
        }

    }
    useEffect(() => {
        if(localStorage.getItem('token')){
            router.push('/');
        }
    }, [])

  return (
    <div>
        <div className={styles.block}>
            <form onSubmit={handleSubmit} className={styles.forms}>
                <h1>Welcome back!</h1>
                <input type="text" required placeholder="Username" name="name" onChange={(e)=>setUsername(e.target.value)}/>
                <input type="password" required placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Ready</button> 
                <span className={styles.sign} style={{color:'black'}}>not yet signup! <Link href={'/signup'} style={{color:'blue'}}>click here</Link></span>   
            </form>
        </div>
    </div>
  )
}

export default Login