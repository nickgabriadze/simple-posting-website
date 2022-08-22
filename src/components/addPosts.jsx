import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import '../css/addPosts.css';
import { addPost } from '../features/poster';
import { Link } from 'react-router-dom';

export function AddPosts() {
    const dispatch = useDispatch();

    const [post, setPost] = useState({
        postTitle: '',
        postContent: '',
        postAuthor: ''
    });

    const [postAdded, setPostAdded] = useState(false);
    return (
        <>
            <div className="posting-container">
                <h1 id='post-cool' style={{ textAlign: 'center' }}>Post Something Cool!</h1>
                <div className='input-container'>
                    <div id='for-title'>

                        <input type='text' onChange={(e) => {
                            setPostAdded(false);
                            setPost({ ...post, postTitle: e.target.value })
                        }} placeholder='Enter Title' value={post.postTitle} required={true}></input>
                    </div>
                    <div id='for-content'>

                        <textarea type='text' onChange={(e) => {
                            setPostAdded(false);
                            setPost({ ...post, postContent: e.target.value })
                        }} placeholder='Write your thoughts' value={post.postContent} required={true}></textarea>
                    </div>
                    <div id='for-author'>

                        <input type='text' onChange={(e) => {
                            setPostAdded(false);
                            setPost({ ...post, postAuthor: e.target.value })
                        }} placeholder="Enter the author's name" value={post.postAuthor} required={true}></input>
                    </div>
                    <div>
                        <motion.div
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 1.08 }}
                            onClick={() => {
                                setPostAdded(true);
                                setPost({
                                    ...post, 
                                    postTitle: '',
                                    postContent: '',
                                    postAuthor: ''
                                })
                                dispatch(addPost({
                                    title: post.postTitle,
                                    content: post.postContent.toString(),
                                    author: post.postAuthor
                                }))


                            }}
                            id='submit-btn'>Share it to the world</motion.div>
                        <p style={{ paddingTop: '5px', color: '#764ba2' }}>{postAdded ? 'Post Added Successfully' : ''}</p>
                    </div>
                </div>


            </div>
            <Link to='/' id='return'><div>{"< Go Back to Main Page"}</div></Link>
        </>
    )
}

export default AddPosts