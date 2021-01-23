import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setpagesAC, setTotalUserCountAC, setUsersAC, unfollowsAC} from "../../redux/user-reduser";


const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        count: state.users.userCount,
        page: state.users.page
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowsAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },
        setPage: (page) =>{
            dispatch(setpagesAC(page))
        },
        setTotalUserCount: (totalCount) =>{
            dispatch(setTotalUserCountAC(totalCount))
        },


    }
};

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default usersContainer;
