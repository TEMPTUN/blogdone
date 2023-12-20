import React from 'react'
import Page from '@/components/Page'
import Navbar from '@/components/Navbar'
import Comment from '@/components/Comment'
import { useRouter } from 'next/router'


const postpage = () => {
  const router = useRouter();
  const { page } = router.query;
  return (
    <>  
        <Navbar/>
        <Page id={page}/>
        <Comment id={page} />
    </>
  )
}

export default postpage