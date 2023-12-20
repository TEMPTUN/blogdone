import React from 'react'
import Page from '@/components/Page'
import Navbar from '@/components/Navbar'
import Comment from '@/components/Comment'


const postpage = ({page}) => {
  return (
    <>  
        <Navbar/>
        <Page id={page}/>
        <Comment id={page} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { page } = context.params;
  return {
    props: {
      page,
    },
  };
}

export default postpage