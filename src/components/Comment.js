import React from 'react'
import styles from '@/styles/comment.module.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Comment = ({id}) => {
    const [comments, setComments] = useState([]);
    const [com, setCom] = useState('');

    // const handlecommen=async(e)=>{
    //     e.preventDefault();
    //     await axios.post('https://woolback-complementme001-gmailcom.vercel.app/api/bcomment', { comment: com, id: id,username:localStorage.getItem('token') });
    //     setCom('');
        
    // }

    // useEffect(() => {
      
      
    // }, [com]); 
  
    return (
      <div className={styles['comments-container']}> 
        <h2>Comments</h2>
        <form  className={styles.forme} >
            <input
            type="text"
            placeholder="Add a new comment"
            onChange={(e) => setCom(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p style={{color:'black'}}>{comment}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Comment