import React from 'react'
import styles from '@/styles/navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const handleLogout = async(e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    router.push('/login');
  }

  

    return (
      <>
          <header className={styles.headers}>
              <a>Webblog</a>
              <nav>
                {typeof window !== "undefined"  && !localStorage.getItem('token')?(
                  <>
                    <Link href={'/login'} legacyBehavior><a>login</a></Link>
                    <Link href={'/signup'} legacyBehavior><a>signup</a></Link>
                  </>):
                  <>
                      <Link href={'/'} legacyBehavior><a>Home</a></Link>
                      <Link href={'/cpost'} legacyBehavior><a>Create</a></Link>
                      <Link href={'/login'} legacyBehavior><a onClick={handleLogout}>Logout</a></Link>
                  </>
                }
              </nav>
          </header>
      </>
    )
}

export default Navbar