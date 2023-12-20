import React from 'react'
import { useState } from 'react'
import Post from '@/components/Post'
import axios from 'axios'

const Render = () => {
    const [posts, setPosts] = useState([]);
    const [call, setCall] = useState(false);

    const fun=async()=>{
        const res=await axios.get('https://woolback-complementme001-gmailcom.vercel.app/api/bget')
        setPosts(res.data);
        // console.log(res.data);
    }
    React.useEffect(() => {
        if(!call){
            fun();
            setCall(true);
        }
    }, [call])
    return (
    <div>
        {
        posts.length>0 ? 
        (posts.map((post) => (
            <Post key={post._id} post={post} />
        ))):
        (<h1 style={{marginTop:'100px'}}>Create posts</h1>)
        }
    </div>
    )
}

export default Render