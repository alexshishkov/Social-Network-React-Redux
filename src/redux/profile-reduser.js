const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    post: [
        {messages: 'Hi how are you?', like: '3', id:'1'},
        {messages: 'Hi', like: '2', id:'2'}
    ],
    newPostText: '',
    profile: null
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: '3',
                messages: state.newPostText,
                like: '0'
            };
            let stateCopy = {...state};
            stateCopy.post = [...state.post];
            stateCopy.post.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile};
        }
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
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
};
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile});

export default profileReduser;