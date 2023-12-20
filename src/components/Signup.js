import { useEffect, useState } from "react"
import styles from '@/styles/Signup.module.scss'
import Link from 'next/link'
import axios from "axios"
import { useRouter } from "next/router"


const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(username, password);
        const res=await axios.post('https://woolback.vercel.app/api/bsignup', {username, password})
        router.push('/');
    }

    useEffect(() => {
        if(localStorage.getItem('token')){
            router.push('/');
        }
    }, [])

  return (
    <div className={styles.block}>
        <form onSubmit={handleSubmit} className={styles.forms}>
            <h1>Welcome <span >{username}</span>!</h1>
            <input type="text" required placeholder="Username" name="name" onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" required placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit">Signup</button> 
            <span className={styles.sign} style={{color:'black'}}>Already Signup! <Link href={'/login'} style={{color:'blue'}}>login here</Link></span>   
        </form>
    </div>
  )
}

export default Signup