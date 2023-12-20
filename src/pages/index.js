import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import Render from '@/components/Render'



//here post will be on map fetched by api and props will be passed to post component



export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Web</title>
        <meta name="description" content="By Webblog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Render/>
    </>
  )
}
