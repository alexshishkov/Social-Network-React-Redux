const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    post: [
        {messages: 'Hi how are you?', like: '3', id:'1'},
        {messages: 'Hi', like: '2', id:'2'}
    ],
    newPostText: 'ой ой ой'
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: let newPost = {
            id:'3',
            messages: state.newPostText,
            like: '0'
        };
            state.post.push(newPost);
            state.newPostText ='';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreater = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default profileReduser;