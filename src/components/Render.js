import React from 'react'
import { useState,CSSProperties } from 'react'
import Post from '@/components/Post'
import axios from 'axios'
import { ClockLoader } from "react-spinners";




const Render = () => {
    const override = {
        display: "block",
        margin: "150px auto",
        borderColor: "red",
      };
    const [posts, setPosts] = useState([]);
    const [call, setCall] = useState(false);
    const [loading, setLoading] = useState(true);

    const fun=async()=>{
        const res=await axios.get('https://woolback-complementme001-gmailcom.vercel.app/api/bget')
        setPosts(res.data);
    }
    React.useEffect(() => {
        if(!call){
            fun();
            setCall(true);
        }
    }, [call])

    return (
    <div>
        {posts.length>0?posts.map((post) => (
            <Post key={post._id} post={post} />
        )):<ClockLoader
        color={"#36d7b7"}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        }
    </div>
    )
}
// (posts.map((post) => (
//     <Post key={post._id} post={post} />
// )))

export default Render