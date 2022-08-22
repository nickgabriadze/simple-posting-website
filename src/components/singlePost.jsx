import React, { useState } from 'react';
import '../css/singlePost.css';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { closePost } from '../features/poster';

export function SinglePost({ title, content, author, postId }) {

    const dispatch = useDispatch()

    return (
        <>
            <div className='post-popUp'>
                <div>
                    <div id='post-title'>
                        <p>{title}</p>
                        <hr style={{ width: '80%', margin: 'auto' }}></hr>
                        <p id='post-content'>
                            {content}
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ textAlign: 'start', padding: '10px', fontSize: '15px' }}>Posted By @{author}</p>
                            <motion.p whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.8 }}
                                style={{ textAlign: 'end', padding: '10px', fontSize: '15px', cursor: 'pointer' }}
                                onClick={() => { dispatch(closePost({ checkId: postId })) }}
                            >Close</motion.p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default SinglePost;