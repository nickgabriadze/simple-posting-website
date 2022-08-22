import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const posterReducer = createSlice({
    name: 'poster',
    initialState: {
        value: {
            posts: [{
                id: nanoid(),
                title: 'Goal Website',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum numquam maxime accusantium provident, officia aperiam, iure esse aspernatur repellat est deserunt ea quasi. Non facere eveniet error magni magnam natus deserunt omnis excepturi itaque aspernatur dicta sunt ducimus officia necessitatibus, maxime voluptatem ab odio enim facilis numquam modi impedit',
                postAuthor: 'Nicka',
                postDate: `${new Date()}`,
                postOpen: false
            }, {
                id: nanoid(),
                title: 'Goal Website',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum numquam maxime accusantium provident, officia aperiam, iure esse aspernatur repellat est deserunt ea quasi. Non facere eveniet error magni magnam natus deserunt omnis excepturi itaque aspernatur dicta sunt ducimus officia necessitatibus, maxime voluptatem ab odio enim facilis numquam modi impedit',
                postAuthor: 'Nicka',
                postDate: `${new Date()}`,
                postOpen: false
            },
            {
                id: nanoid(),
                title: 'Goal Website',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum numquam maxime accusantium provident, officia aperiam, iure esse aspernatur repellat est deserunt ea quasi. Non facere eveniet error magni magnam natus deserunt omnis excepturi itaque aspernatur dicta sunt ducimus officia necessitatibus, maxime voluptatem ab odio enim facilis numquam modi impedit',
                postAuthor: 'Nicka',
                postDate: `${new Date()}`,
                postOpen: false
            },
            {
                id: nanoid(),
                title: 'Goal Website',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum numquam maxime accusantium provident, officia aperiam, iure esse aspernatur repellat est deserunt ea quasi. Non facere eveniet error magni magnam natus deserunt omnis excepturi itaque aspernatur dicta sunt ducimus officia necessitatibus, maxime voluptatem ab odio enim facilis numquam modi impedit',
                postAuthor: 'Nicka',
                postDate: `${new Date()}`,
                postOpen: false
            }, {
                id: nanoid(),
                title: 'Goal Website',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum numquam maxime accusantium provident, officia aperiam, iure esse aspernatur repellat est deserunt ea quasi. Non facere eveniet error magni magnam natus deserunt omnis excepturi itaque aspernatur dicta sunt ducimus officia necessitatibus, maxime voluptatem ab odio enim facilis numquam modi impedit',
                postAuthor: 'Nicka',
                postDate: `${new Date()}`,
                postOpen: false

            }]
        }
    },

    reducers: {
        addPost: (state, action) => {
            
            const post = {
                id: nanoid(),
                title:action.payload.title,
                content: action.payload.content,
                postAuthor: action.payload.author,
                postDate: `${new Date()}`,
                postOpen: false

            }
           
            const newPosts = [...state.value.posts]
            newPosts.push(post);
            state.value.posts = newPosts;

        },
        closePost: (state, action) => {
            const newPosts = [...state.value.posts]
            for(let i = 0; i < newPosts.length; i++){
                if(newPosts[i].id === action.payload.checkId){
                    newPosts[i].postOpen = false
                }
            }
            console.table(newPosts)
            state.value.posts = newPosts;
        },

        openPost: (state, action) => {
            const newPosts = [...state.value.posts]
            for(let i = 0; i < newPosts.length; i++){
                if(newPosts[i].id === action.payload.checkId){
                    newPosts[i].postOpen = true
                }
            }
            console.table(newPosts)
            state.value.posts = newPosts;
        }
        
    }
})

export const { addPost, closePost, openPost } = posterReducer.actions;

export default posterReducer.reducer;