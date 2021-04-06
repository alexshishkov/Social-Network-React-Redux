import {profileAPI, UsersAPI} from "../api/api";
import {takeEvery, put, call} from "redux-saga/effects";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const REQUEST = 'REQUEST';
const REQUESTSTATUS = 'REQUESTSTATUS';

let initialState = {
    post: [
        {messages: 'Hi how are you?', like: '3', id:'1'},
        {messages: 'Hi', like: '2', id:'2'}
    ],
    newPostText: '',
    profile: null,
    status: ''
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
        case SET_STATUS: {
            return {...state, status: action.status};
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
export const setUserProfile = (profile) => {
    return {type: SET_USERS_PROFILE, profile}
};

export const setStatus = (status) => ({type: SET_STATUS, status});

/*
export const getUserProfile = (userId) => (dispatch) => {
    UsersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};
 */

export const profileGet = (UserId) => {
    return {type: REQUEST, UserId}};

export function* saga() {
    yield takeEvery(REQUEST, sagaWorker);
}

export function* sagaWorker(action) {
    const result = yield call(UsersAPI.getProfile, action.UserId);
    yield put(setUserProfile(result.data));
}

export const getStatus = (userId) =>{
    return {type: REQUESTSTATUS, userId};
};

export function* sagaStatus() {
    yield takeEvery(REQUESTSTATUS, sagaWorkerStatus);
}

export function* sagaWorkerStatus(action) {
    const result = yield call(profileAPI.getStatus, action.UserId);
    yield put(setStatus(result.UserId));
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0){
        dispatch(setStatus(status));
        }
    });
};

export default profileReduser;


