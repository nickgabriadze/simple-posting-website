import React, { useState } from 'react';
import '../css/posts.css';
import { useSelector } from 'react-redux';
import SinglePost from '../components/singlePost.jsx';
import { useDispatch } from 'react-redux';
import { openPost } from '../features/poster';
export function Posts() {

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer.value.posts)
    const [postInfo, setPostInfo] = useState({
        title: '',
        author: '',
        content: '',
        postId: '',

    })
    let postOpenState = false
    console.table(posts)

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === postInfo.postId) {
            postOpenState = posts[i].postOpen;
        }


    }


    return (
        <>
            <div className='posts-area'>
                {posts.map((posts) => {
                    return (
                        <div key={posts.id} className='information-box' onClick={() => {
                            dispatch(openPost({ checkId: posts.id }))
                            setPostInfo({ ...postInfo, title: posts.title, content: posts.content, author: posts.postAuthor, postId: posts.id })
                        }}>
                            <h3>{posts.title}</h3>
                            <hr></hr>
                            <div>{posts.content.substring(0, 200)}...</div>
                            <p style={{ paddingTop: '10px', color: '#5f338c' }}>Posted By @{posts.postAuthor} - On {posts.postDate}</p>

                        </div>


                    )
                })}

            </div>

            {postOpenState && <SinglePost title={postInfo.title} content={postInfo.content} author={postInfo.author} postId={postInfo.postId} />}
        </>
    )
}

export default Posts;
