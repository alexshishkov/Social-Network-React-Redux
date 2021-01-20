const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
};
          //'https://sun9-40.userapi.com/c846524/v846524924/1c2ff3/okyk5B513qY.jpg'
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
            return {...state, users: [...state.users, ...action.users]}
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

export default userReduser;