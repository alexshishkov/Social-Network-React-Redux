export const getUsers =(state) =>{
    return state.users.users
};
export const getPageSize =(state) =>{
    return state.users.pageSize
};
export const getUserCont =(state) =>{
    return state.users.userCount
};
export const getPage =(state) =>{
    return state.users.page
};
export const getIsFething =(state) =>{
    return  state.users.isFething
};
export const getFollowingIsProgress =(state) =>{
    return  state.users.followingIsProgress
};

