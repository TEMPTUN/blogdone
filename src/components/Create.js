import React from 'react'
import { useState,useEffect } from 'react';
import styles from '@/styles/create.module.scss'
import { useRouter } from 'next/router';
import axios from 'axios';



const Create = () => {
    const [title, setTilte] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [img, setImage] = useState('');
    const router = useRouter();

    function convertToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
    
        reader.onload = () => {
          const base64String = reader.result.split(',')[1]; // Extracting base64 data
          resolve(base64String);
        };
    
        reader.onerror = error => {
          reject(error);
        };
    
        // Read the image file as a data URL
        reader.readAsDataURL(file);
        });
      }

    const handleSubmit =async(e) => {
        e.preventDefault();
        // const image =convertToBase64(img);
        const username=localStorage.getItem('token');
        const date=Date.now();
        const res = await axios.post('https://woolback-complementme001-gmailcom.vercel.app/api/blog',{ title, summary,content,username,date});

        if(res!==false && res.data.success===true){
            router.push('/');
        }
        
    }
  return (
    <>
        <div className={styles.model}>
            <form onSubmit={handleSubmit}>
                <div><input type="text" placeholder="Title" onChange={(e) => setTilte(e.target.value)}/></div>
                <div><input type="text" placeholder="Summary" onChange={e => setSummary(e.target.value)}/></div>
                <div><input type="file" accept='image/*' onChange={(e)=> setImage(e.target.files[0])} required/></div>
                <textarea style={{minWidth:'100%',minHeight:'300px',padding:'10px'}} placeholder="Content" onChange={e => setContent(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </>
  )
}

export default Create