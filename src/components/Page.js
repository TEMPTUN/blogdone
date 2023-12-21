import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/page.module.scss'
import axios from 'axios'


const Page = ({id}) => {
  console.log(id);
  const [posts, setPosts] = React.useState([]);
  const fun=async()=>{
    if(!id){
      return
    }
    const res=await axios.get(`https://woolback-complementme001-gmailcom.vercel.app/api/bs?id=${id}`)
    setPosts(res.data)
    
  }

  useEffect(() => {
    fun();
  } , [id])
  return (
    <>
        <div className={styles.postpage}>
            <h1 className={styles.postpage__title}>{posts.title}</h1>
            <p className={styles.postpage__date}>{posts.date}</p>
            <div style={{textAlign:'center'}}>{posts.username}</div>
            <div className={styles.content}>
                <Image src="/brown.jpg" alt="image" height={400} width={1000} className={styles.imgn}></Image>
                <p className={styles.postpage__content}>
                    {posts.content}
                </p>
            </div>
        </div>
    </>
  )
}

export default Page