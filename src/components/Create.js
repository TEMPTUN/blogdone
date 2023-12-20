import React from 'react'
import { useState,useEffect } from 'react';
import styles from '@/styles/create.module.scss'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { useRouter } from 'next/router';
import axios from 'axios';



const Create = () => {
    const [title, setTilte] = useState('');
    const [summary, setSummary] = useState('');
    const [conte, setContent] = useState('');
    const [ima, setImage] = useState('');
    const router = useRouter();
    //one image

    const convertToPlainText = (html) => {
        const temporaryDivElement = document.createElement('div');
        temporaryDivElement.innerHTML = html;
        return temporaryDivElement.textContent || temporaryDivElement.innerText || '';
    };

    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
      
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
      
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      }

    const handleSubmit =(e) => {
        e.preventDefault();
        const image64 = convertToBase64(ima);
        const cont=convertToPlainText(conte);
        const username=localStorage.getItem('token');
        const content=cont;
        const date=Date.now();
        const image=image64;
        get(username,title,summary,content,date,image);
        
    }
    const get=async(username,title,summary,content,date,image)=>{
      const res = await axios.get(`https://woolback-complementme001-gmailcom.vercel.app/api/blog?username=${username}&title=${title}&summary=${summary}&content=${content}&date=${date}&image=${image}`);
        console.log(res.data);

        if(res.data.success===true){
            router.push('/');
        }
    }
  return (
    <>
        <div className={styles.model}>
            <form onSubmit={handleSubmit}>
                <div><input type="text" placeholder="Title" onChange={(e) => setTilte(e.target.value)}/></div>
                <div><input type="text" placeholder="Summary" onChange={e => setSummary(e.target.value)}/></div>
                <div><input type="file" accept='image/*'  onChange={(e)=> setImage(e.target.files[0])} required/></div>
                <ReactQuill onChange={e => setContent(e)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    </>
  )
}

export default Create