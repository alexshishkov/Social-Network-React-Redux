import {UsersAPI as userApi} from "../api/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_PAGE = 'SET_PAGE';
const TOOGLE_IS_FETHING = 'TOOGLE_IS_FETHING';
const TOOGLE_IS_FOLlOwING_PROGRESS = 'TOOGLE_IS_FOLlOwING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    userCount: 0,
    page: 1,
    isFething: false,
    followingIsProgress: []
};

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                    })
                ]
            };
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
                ]
            };
        case SET_USERS:{
            return {...state, users: action.users}
        }
        case SET_PAGE:{
            return {...state, page: action.page}
        }
        case SET_TOTAL_COUNT:{
            return {...state, userCount: [action.totalCount]}
        }
        case TOOGLE_IS_FETHING:{
            return {...state, isFething: action.isFething}
        }
        case TOOGLE_IS_FOLlOwING_PROGRESS:{
            return {...state, followingIsProgress: action.isFething
                    ? [...state.followingIsProgress, action.userId]
                    : state.followingIsProgress.filter(id => id != action.userId)}
        }
        default:
            return state;
    }
};

export const followSuccess = (userId) => {
    return {type: FOLLOW, userId}
};

export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId}
};

export const setUsers = (users) => {
    return {type: SET_USERS, users}
};
export const setPages = (page) => {
    return {type: SET_PAGE, page}
};
export const setTotalUserCount = (totalCount) => {
    return {type: SET_TOTAL_COUNT, totalCount}
};
export const setIsFething = (isFething) => {
    return {type: TOOGLE_IS_FETHING, isFething}
};
export const toogleFollowingProgress = (isFething, userId) => {
    return {type: TOOGLE_IS_FOLlOwING_PROGRESS, isFething, userId}
};

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFething(true));
        dispatch(setPages(page));
        userApi.getUser(page, pageSize).then(data => {
            dispatch(setIsFething(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
        });
    };
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true, userId));
        userApi.follow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toogleFollowingProgress(false, userId));
        });
    };
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true, userId));
        userApi.unfollow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toogleFollowingProgress(false, userId));
        });
    };
};

export default userReduser;