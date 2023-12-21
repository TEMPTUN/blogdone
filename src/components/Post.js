import React from 'react'
import Image from 'next/image'
import styles from '@/styles/post.module.scss'
import { useRouter } from 'next/router'

const Post = ({post}) => {
  const router = useRouter();
  const handlepost=()=>{
    router.push(`/postpage/${post._id}`)
  }
  return (
    <>
        <div className={styles.post} onClick={handlepost}>
            <Image className={styles.imgn} src="/ddj.avif" height={300} width={400} alt='there is an image'></Image>
            <div>
                <h2>{post.title}
                </h2> 
                <span>{post.username}<span>  {post.date}</span></span>
                <p>{post.summary}
                </p>
            </div>
        </div>
    </>
  )
}

export default Post