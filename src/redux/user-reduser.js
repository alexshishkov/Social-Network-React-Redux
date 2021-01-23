const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_PAGE = 'SET_PAGE';

let initialState = {
    users: [],
    pageSize: 5,
    userCount: 0,
    page: 2
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
            return {...state, page: [action.page]}
        }
        case SET_TOTAL_COUNT:{
            return {...state, userCount: [action.totalCount]}
        }
        default:
            return state;
    }
};

export const followAC = (userId) => {
    return {type: FOLLOW, userId}
};

export const unfollowsAC = (userId) => {
    return {type: UNFOLLOW, userId}
};

export const setUsersAC = (users) => {
    return {type: SET_USERS, users}
};
export const setpagesAC = (page) => {
    return {type: SET_PAGE, page}
};
export const setTotalUserCountAC = (totalCount) => {
    return {type: SET_TOTAL_COUNT, totalCount}
};



export default userReduser;